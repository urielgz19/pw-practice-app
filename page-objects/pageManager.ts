import {Page, expect} from "@playwright/test"
import {NavigationPage} from '../page-objects/navigationPage'
import {FormsLayoutsPage} from './formsLayoutPage'
import {DatepickerPage} from './datePickerPage'
import {DialogPage} from './dialogPage'

export class PageManager{
    /*Class that acts as a central manager for page objects.
      Its job is usually to create and expose objects such as login page, 
      home page, checkout page, etc.
      Helps keep test code cleaner by avoiding repeated new SomePage(page) calls.
      Makes it easier to organize and reuse page-object instances across tests.
     */
    private readonly page : Page
    private readonly navigationPage: NavigationPage
    private readonly formsLayoutsPage: FormsLayoutsPage
    private readonly datePickerPage: DatepickerPage
    private readonly dialogPage: DialogPage

    //Add instances of the test page class- Each Class represents a page across the testing Application
    constructor (page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formsLayoutsPage = new FormsLayoutsPage(this.page)
        this.datePickerPage = new DatepickerPage(this.page)
        this.dialogPage = new DialogPage(this.page)

    }
    //Returns Individual instances
    //Class Navigation Page
    navigateTo(){
        return this.navigationPage
    }
    //Class FormsLayout Page
    onFormsLayoutPage(){
        return this.formsLayoutsPage
    }
    // Class DatePicker Page
    onDatePickerPage(){
        return this.datePickerPage
    }
    //Class Dialog page
    onDialogPage(){
        return this.dialogPage
    }
}