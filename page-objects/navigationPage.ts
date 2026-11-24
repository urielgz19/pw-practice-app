import {Locator,Page,expect} from '@playwright/test'
import { HelperBase } from './helperBase'

//Defines class Navigation Page and exports it to be used in other classes which repesent pages accross Applicantion
//Class-IoT Dashboard Home Page
export class NavigationPage extends HelperBase{
 
   
    /*Readonly Variables to initialize locators for Navigation Menu items
    readonly-Typescript keyword to indicate variable cant be reassigned after being initialized*/
    //Forms Menu
    readonly fromLayoutsMenuItem: Locator   
    readonly datepickerMenuItem: Locator
    //Modal & Overlays Menu
    readonly dialogModalMenuItem: Locator
    readonly windowModalMenuItem: Locator
    readonly popoverModalMenuItem: Locator    
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator
    //Extra Components Menu
    readonly extraCalendarMenuItem: Locator  
    //Charts Menu
    readonly chartEchartsMenuItem: Locator 
    //Tables & Data Menu
    readonly tablesDatasmartTableMenuItem: Locator
    readonly tablesDatatreeGridMenuItem: Locator
    //Auth Menu
    readonly authLoginMenuItem: Locator
    readonly registerMenuItem: Locator
    readonly requestPasswordMenuItem: Locator
    readonly resetPasswordMenuItem: Locator

    
    /*Constructor to initialize the Page Object whiich receives and object of 
    type Page as parameter and assigns it to the page property of this class*/
    /*Locators for web elements in Page-Navigation Menu
    Playywright recommends to keep locators separated from the test logic spec in 
    remaining Page methods for better maintainability*/
    constructor(page: Page){
        super(page)
        this.fromLayoutsMenuItem = this.page.getByRole('link',{name: 'Form Layouts'})
        this.datepickerMenuItem = this.page.getByRole('link',{name: 'Datepicker'})
        this.dialogModalMenuItem = this.page.getByRole('link',{name: 'Dialog'})
        this.windowModalMenuItem = this.page.getByRole('link',{name: 'Window'})
        this.popoverModalMenuItem = this.page.getByRole('link',{name: 'Popover'})
        this.toastrMenuItem = this.page.getByRole('link',{name: 'Toastr'})
        this.tooltipMenuItem = this.page.getByRole('link',{name: 'Tooltip'})
        this.extraCalendarMenuItem = this.page.getByRole('link',{name: 'Calendar'})
        this.chartEchartsMenuItem = this.page.getByRole('link',{name: 'Echarts'})       
        this.tablesDatasmartTableMenuItem = this.page.getByRole('link',{name: 'Smart Table'}) 
        this.tablesDatatreeGridMenuItem = this.page.getByRole('link',{name: 'Tree Grid'}) 
        this.authLoginMenuItem = this.page.getByRole('link',{name: 'Login'}) 
        this.registerMenuItem = this.page.getByRole('link',{name: 'Register'})
        this.requestPasswordMenuItem = this.page.getByRole('link',{name: 'Request Password'}) 
        this.resetPasswordMenuItem = this.page.getByRole('link',{name: 'Reset Password'})  
    }    
    
    //Navigation Methods- Each Method simulate user navigation to each of one of Sub-Menus and their available navigation options
    async formLayoutPage(){
        await this.selectGroupMenuItem('Forms')
        await this.fromLayoutsMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/forms/layouts" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/forms\/layouts*/)
    }

    async datepickerPage(){
        await this.selectGroupMenuItem('Forms')        
        await this.datepickerMenuItem.click()
        await this.waitForNumberOfSeconds(2)
         //✅Assertion: validates URL contains "/pages/forms/datepicker" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/forms\/datepicker*/)    

    }
    async dialogPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.dialogModalMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/modal-overlays/dialog" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/modal-overlays\/dialog*/)  

    }
    async windowPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.windowModalMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/modal-overlays/window" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/modal-overlays\/window*/)    
    }
    async popoverPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.popoverModalMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/modal-overlays/popover" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/modal-overlays\/popover*/)   
    }   
    async toastrPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/modal-overlays/toastr" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/modal-overlays\/toastr*/)       

    }
    async tooltipPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenuItem.click()
        await this.waitForNumberOfSeconds(2) 
         //✅Assertion: validates URL contains "/pages/modal-overlays/toastr" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/modal-overlays\/tooltip*/)          
    }
     async calendarsPage(){
        await this.selectGroupMenuItem('Extra Components')
        await this.extraCalendarMenuItem.click()
        await this.waitForNumberOfSeconds(2)  
          //✅Assertion: validates URL contains "/pages/extra-components/calendar" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/extra-components\/calendar*/)         
    }
    async echartsPage(){
        await this.selectGroupMenuItem('Charts')
        await this.chartEchartsMenuItem.click()
        await this.waitForNumberOfSeconds(2)  
          //✅Assertion: validates URL contains "/pages/charts/echarts" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/charts\/echarts*/)         
    }
    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.tablesDatasmartTableMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/tables/smart-table" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/tables\/smart-table*/)         
    }
    async treeGridPage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.tablesDatatreeGridMenuItem.click()
        await this.waitForNumberOfSeconds(2)    
        //✅Assertion: validates URL contains "/pages/tables-data/tree-grid" text pattern
        await expect(this.page).toHaveURL(/.*\/pages\/tables\/tree-grid*/)         

    }
    async loginPage(){
        await this.selectGroupMenuItem('Auth')
        await this.authLoginMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/auth/login" text pattern
        await expect(this.page).toHaveURL(/.*\/auth\/login*/)           

    }
    async registerPage(){
        await this.selectGroupMenuItem('Auth')
        await this.registerMenuItem.click()
        await this.waitForNumberOfSeconds(2)  
        //✅Assertion: validates URL contains "/auth/register" text pattern
        await expect(this.page).toHaveURL(/.*\/auth\/register*/)           
    }
    async requestPasswordPage(){
        await this.selectGroupMenuItem('Auth')
        await this.requestPasswordMenuItem.click()
        await this.waitForNumberOfSeconds(2) 
        //✅Assertion: validates URL contains "/pages/auth/request-password" text pattern
        await expect(this.page).toHaveURL(/.*\/auth\/request-password*/)           

    }
    async resetPasswordPage(){
        await this.selectGroupMenuItem('Auth')
        await this.resetPasswordMenuItem.click()
        await this.waitForNumberOfSeconds(2)
        //✅Assertion: validates URL contains "/pages/auth/reset-password" text pattern
        await expect(this.page).toHaveURL(/.*\/auth\/reset-password*/)           

    }

    //Helper Method to validate Main Menu state i.e. whether it's collapsed or 
    //expanded and enabled to navigate to sub-menu option i.e. Forms, Modal & Overlays, Extra Components, etc
    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle,{exact: true})
        const expandedState = await groupMenuItem.getAttribute('aria-expanded') 
        
        if(expandedState === 'false'){
            await groupMenuItem.click()
        }


    }
}