import { Page, expect, Locator } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatepickerPage extends HelperBase {

    //Form Picker Calendar
    readonly FormPickerCalendar: Locator
    //Datepicker With Range Calendar
    readonly DatePickerRangeCalendar: Locator
    //Dates picked in Calendar
    readonly DatePicked: Locator
    //Navigation in Calendar
    readonly CalendarNextNavigation: Locator
    readonly CalendarPreviousNavigation: Locator
    //Datepicker With Disabled Min Max Values
    readonly DatepickerWithDisabledMinMaxValues: Locator

    constructor(page: Page) {
        super(page)
        this.FormPickerCalendar = this.page.getByPlaceholder('Form Picker')
        this.DatePickerRangeCalendar = this.page.getByPlaceholder('Range Picker')
        this.DatePicked = this.page.locator('nb-calendar-view-mode')
        this.CalendarNextNavigation = this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
        this.CalendarPreviousNavigation = this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-left"]')
        this.DatepickerWithDisabledMinMaxValues = this.page.getByPlaceholder('Min Max Picker')
    }

    /**
     * Method to select a date from the common Date Picker by providing the number of days from today
     * @param numberOfDaysFromToday 
     */
    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
        const calendarInputField = this.FormPickerCalendar
        await calendarInputField.click()
        const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday)
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    /**
     * Method to select a start date ranging from today and an end date specified by the number of days
     * received in the endDayFromToday parameter
     * @param startDayFromToday 
     * @param endDayFromToday 
     */
    async selectDatepickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number) {
        const calendarInputField = this.DatePickerRangeCalendar
        await calendarInputField.click()
        const dateToAssertStart = await this.selectDateInTheCalendar(startDayFromToday)
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday)
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    /**
     * Method to select a date from the disabled Min/Max Datepicker.
     * Allowed range is today up to 5 days ahead.
     * @param daysFromToday 
     */
    async selectDateFromTodayInDisabledMinMaxDatepickerForward(daysFromToday: number) {
        if (daysFromToday < 0 || daysFromToday > 5) {
            throw new Error(`The disabled min/max Datepicker Calendar allows only dates from today up to 5 days ahead. Received ${daysFromToday}.`)
        }

        const calendarInputField = this.DatepickerWithDisabledMinMaxValues
        await calendarInputField.click()

        const dateToAssert = await this.selectDateInTheCalendar(daysFromToday)
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    /**
     * Method to select a date from the disabled Min/Max Datepicker.
     * Allowed range is today up to 5 days behind.
     * @param daysBehindToday Positive number of days to go back from today
     */
    async selectDateFromTodayInDisabledMinMaxDatepickerBackward(daysBehindToday: number) {
        if (daysBehindToday < 1 || daysBehindToday > 5) {
            throw new Error(`The disabled Min/Max Datepicker Calendar allows only dates from today up to 5 days behind. Received ${daysBehindToday}.`)
        }

        const calendarInputField = this.DatepickerWithDisabledMinMaxValues
        await calendarInputField.click()

        const dateToAssert = await this.selectDateInTheCalendar(-daysBehindToday)
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    /**
     * Method to select a day from the calendar
     * @param numberOfDaysFromToday 
     * @returns 
     */
    private async selectDateInTheCalendar(numberOfDaysFromToday: number) {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const targetDate = new Date(today)
        targetDate.setDate(today.getDate() + numberOfDaysFromToday)

        const expectedDate = targetDate.getDate().toString()
        const expectedMonthShort = targetDate.toLocaleString('en-US', { month: 'short' })
        const expectedMonthLong = targetDate.toLocaleString('en-US', { month: 'long' })
        const expectedYear = targetDate.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`

        for (let attempt = 0; attempt < 24; attempt++) {
            const visibleMonthAndYear = (await this.DatePicked.textContent())?.trim()

            if (visibleMonthAndYear?.includes(expectedMonthAndYear)) {
                break
            }

            const currentVisibleDate = this.parseMonthYear(visibleMonthAndYear ?? '')
            const targetIsEarlier = currentVisibleDate ? targetDate < currentVisibleDate : false

            if (targetIsEarlier) {
                await this.CalendarPreviousNavigation.click()
            } else {
                await this.CalendarNextNavigation.click()
            }

            await this.page.waitForTimeout(150)
        }

        const finalVisibleMonthAndYear = (await this.DatePicked.textContent())?.trim() ?? ''
        if (!finalVisibleMonthAndYear.includes(expectedMonthAndYear)) {
            throw new Error(`Could not navigate calendar to ${expectedMonthAndYear}. Current visible month: ${finalVisibleMonthAndYear}`)
        }

        const dayCell = this.page
            .locator('.day-cell.ng-star-inserted:not(.bounding-month)')
            .filter({ hasText: new RegExp(`^\\s*${expectedDate}\\s*$`) })
            .first()

        await dayCell.click()

        return dateToAssert
    }

    /**
     * parseMonthYear() Helper method that turns the calendar’s visible label into a real 
     * JavaScript Date object so the code can compare months correctly.
       What it does: Takes a string like:
                 "August 2026","July 2025"
        Extracts:the month name, the year then Converts that into a Date object using: new Date(year, monthIndex, 1)
     * @param value 
     * @returns 
     */
    private parseMonthYear(value: string): Date | null {
        const monthMap = new Map([
            ['january', 0],
            ['february', 1],
            ['march', 2],
            ['april', 3],
            ['may', 4],
            ['june', 5],
            ['july', 6],
            ['august', 7],
            ['september', 8],
            ['october', 9],
            ['november', 10],
            ['december', 11]
        ])

        const match = value.match(/([A-Za-z]+)\s+(\d{4})/)
        if (!match) return null

        const monthName = match[1].toLowerCase()
        const monthIndex = monthMap.get(monthName)
        if (monthIndex === undefined) return null

        return new Date(Number(match[2]), monthIndex, 1)
    }
}

