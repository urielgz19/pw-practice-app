import {test, expect} from '@playwright/test'
import {PageManager } from '../page-objects/pageManager'

//Launch PW-Test page on localhost mode upon browser set in plawright.config.ts
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')  
}) 

/*Test Case #1 Datepicker page-Select dates on Common and Datepicker with Range Calendar-Type fields*/
test('Test Case #1-Datepicker page-Select dates on Common and Datepicker with Range Calendar-Type fields', async ({ page }) => {
    const launchpageManager = new PageManager(page)    
    await launchpageManager.navigateTo().datepickerPage()
    await launchpageManager.onDatePickerPage().selectCommonDatePickerDateFromToday(10)   
    await launchpageManager.onDatePickerPage().selectDatepickerWithRangeFromToday(6, 15)

})
/*Test Case #2-Select a forward date on Datepicker calendar*/
test('Test Case #2-Select a forward date on Datepicker calendar', async ({ page }) => {
    const launchpageManager = new PageManager(page)    
    await launchpageManager.navigateTo().datepickerPage()
    await launchpageManager.onDatePickerPage().selectDateFromTodayInDisabledMinMaxDatepickerForward(5)

})
/*Test Case#3-Select a backward date on Datepicker calendar */
test('Test Case#3-Select a backward date on Datepicker calendar', async ({ page }) => {
    const launchpageManager = new PageManager(page)    
    await launchpageManager.navigateTo().datepickerPage()
    await launchpageManager.onDatePickerPage().selectDateFromTodayInDisabledMinMaxDatepickerBackward(3)

})