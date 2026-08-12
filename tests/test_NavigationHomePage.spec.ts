import {test, expect} from '@playwright/test'
import {PageManager} from '../page-objects/pageManager'

//Launch PW-Test page on localhost mode upon browser set in plawright.config.ts
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')  
}) 

//Test Case # 1-Navigate to Forms->Form Layouts page
test('Test Case #1-Navigate to Forms->Form Layouts page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().formLayoutPage()
})

//Test Case # 2-Navigate to Forms->Datepicker page
test('Test Case #2-Navigate to Forms->Datepicker page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().datepickerPage()
})

//Test Case # 3-Navigate to Modal & Overlays->Dialog page
test('Test Case #3-Navigate to Modal & Overlays->Dialog page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().dialogPage()
})
//Test Case # 4-Navigate to Modal & Overlays->Dialog page
test('Test Case #4-Navigate to Modal & Overlays->Window page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().windowPage()
})
//Test Case # 5-Navigate to Modal & Overlays->Popover page
test('Test Case #5-Navigate to Modal & Overlays->Popover page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().popoverPage()
})
//Test Case # 6-Navigate to Modal & Overlays->Toastr page
test('Test Case #6-Navigate to Modal & Overlays->Toastr page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().toastrPage()
})
//Test Case # 7-Navigate to Modal & Overlays->Tooltip page
test('Test Case #7-Navigate to Modal & Overlays->Tooltip page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().tooltipPage()
})

//Test Case # 8-Navigate to Extra Componentes->Calendar page
test('Test Case #8-Navigate to Extra Componentes->Calendar page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().calendarsPage()
})
//Test Case # 9-Navigate to Charts->Echarts page
test('Test Case #9-Navigate to Charts->Echarts page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().echartsPage()
})
//Test Case # 10-Navigate to Tables & Data ->Smarte Table page
test('Test Case #10-Navigate to Tables & Data ->Smarte Table page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().smartTablePage()

})
//Test Case # 11-Navigate to Tables & Data ->Tree Grid page
test('Test Case #11-Navigate to Tables & Data ->Tree Grid page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().treeGridPage()
})
//Test Case # 12-Navigate to Auth ->Login page
test('Test Case #12-Navigate to Auth ->Login page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().loginPage()
})
//Test Case # 13-Navigate to Auth ->Register page
test('Test Case #13-Navigate to Auth ->Register page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().registerPage()
})
//Test Case # 14-Navigate to Auth ->Request Password page
test('Test Case #14-Navigate to Auth ->Request Password page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().requestPasswordPage()
})
//Test Case # 15-Navigate to Auth ->Reset Password page
test('Test Case #15-Navigate to Auth ->Reset Password page', async ({ page }) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().resetPasswordPage()
})