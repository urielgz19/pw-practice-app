import {test, expect} from '@playwright/test'
import {PageManager } from '../page-objects/pageManager'

//Launch PW-Test page on localhost mode upon browser set in plawright.config.ts
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')  
}) 

/*Test Case #1- Form layouts page-Fill Inline Form*/
test('Test Case #1- Form Layputs page-Fill Inline Form', async ({page}) => {
    const launchpageManager = new PageManager(page)
    
    await launchpageManager.navigateTo().formLayoutPage()
    await launchpageManager.onFormsLayoutPage().submitInlineFormWithNameEmailAndCheckbox('Welcome Test 1','test1@example.com',true)
    

}) 
/*Test Case #2 Form layouts page-Fill Using the Grid Form*/
test('Test Case #2- Form Layouts page-Fill Using the Grid Form', async ({page}) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().formLayoutPage()    
    await launchpageManager.onFormsLayoutPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test2@example.com',
          'Password2','Option 2')
    
}) 
/*Test Casse #3 Form layputes page-Fill Using the Basic Form */
test('Test Case #3- Form Layouts page-Fill Using the Basic Form', async ({page}) => {
    const launchpageManager = new PageManager(page)
    await launchpageManager.navigateTo().formLayoutPage() 
    await launchpageManager.onFormsLayoutPage().submitBasicFormWithEmailPasswordAndCheckbox('test3@example.com','Password3',false)
   

})