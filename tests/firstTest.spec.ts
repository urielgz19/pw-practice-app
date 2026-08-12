import {test} from '@playwright/test'


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click();
    
})   

test('Locator Syntax Rulex', async ({ page }) => {
    //by Tage name
    await page.locator('input').first().click()

    //by ID
    page.locator('#inputEmail1')

    //by Class value
    page.locator('.shape-rectangle')

    //by Attribute name
    page.locator('[placeholder="Email"]')

    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //Combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')
   
    //XPath selector (not recommended)
    page.locator('//*[@id="inputEmail1"]')

    //by partial tetx match
    page.locator(':text("Using")')

    //by exact text match
    page.locator(':text-is("Using the Grid")')


})

test('User facing locator ', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Email' }).first().click()
    await page.getByRole('button', { name: 'Sign in' }).first().click()


})


    
