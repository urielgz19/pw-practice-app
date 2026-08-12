import {Page,Locator} from '@playwright/test'
import { HelperBase } from './helperBase'

export class FormsLayoutsPage extends HelperBase{
    
    /*Readonly Variables to initialize locators for Form layputs page's elements
    readonly-Typescript keyword to indicate variable can't be reassigned after being initialized*/
    //Inline Form
    readonly inlineForm: Locator
    readonly inlineFullNameTextbox: Locator
    readonly inlineEmailTextbox: Locator
    readonly inlineRememberMeCheckbox: Locator
    readonly inlineSubmitButton: Locator    
    //Using the Grid Form
    readonly gridForm: Locator
    readonly gridEmailTextbox: Locator
    readonly gridPasswordTextbox: Locator
    readonly gridOptionRadioButton: (optionText: string) => Locator
    readonly gridSignInButton: Locator 
    //Basic form   
    readonly basicForm: Locator
    readonly basicFormEmailTextbox: Locator
    readonly basicFormPasswordTextbox: Locator
    readonly basicFormCheckbox: Locator
    readonly basicFormSubmitButton: Locator 

    constructor(page: Page){
        super(page)
        //Inline Form Locators values and initialized within the Inline form card context.
        this.inlineForm = this.page.locator('nb-card', {hasText:"Inline form"})
        this.inlineFullNameTextbox = this.inlineForm.getByRole('textbox', {name: 'Jane Doe'})
        this.inlineEmailTextbox = this.inlineForm.getByRole('textbox', {name: 'Email'})
        this.inlineRememberMeCheckbox = this.inlineForm.getByRole('checkbox')
        this.inlineSubmitButton = this.inlineForm.getByRole('button', { name: 'Submit' })
        //Using the Grid Form locators values and initialized within the Usimg the Grid form card context.
        this.gridForm = this.page.locator('nb-card', {hasText:"Using the Grid"})
        this.gridEmailTextbox = this.gridForm.getByRole('textbox', {name: 'Email'})
        this.gridPasswordTextbox = this.gridForm.getByRole('textbox', {name: 'Password'})
        //typed locator factory that accepts the option name and returns the matching radio within gridForm context
        this.gridOptionRadioButton = (optionText: string) => this.gridForm.getByRole('radio', {name: optionText})
        this.gridSignInButton = this.gridForm.getByRole('button', { name: 'Sign in' })
         //Using the Basic For, locators values and initialized within the Using the Basic form card context.
        this.basicForm = this.page.locator('nb-card', {hasText:"Basic form"})
        this.basicFormEmailTextbox = this.basicForm.getByRole('textbox', {name: 'Email address'})
        this.basicFormPasswordTextbox = this.basicForm.getByLabel('Password')
        this.basicFormCheckbox = this.basicForm.getByRole('checkbox')
        this.basicFormSubmitButton = this.basicForm.getByRole('button', { name: 'Submit' })   

    }    

    /**
     * Method to fill Using the Grid form with credentials and select an option
     * @param email 
     * @param password 
     * @param optionText 
     */
    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string){  
        await this.gridEmailTextbox.fill(email)        
        await this.gridPasswordTextbox.fill(password)
        await this.gridOptionRadioButton(optionText).check({force: true})
        await this.gridSignInButton.click()   

    }    
    /**
     * Method to fill Inline form by providing name, email, and remember me checkbox state
     * @param name 
     * @param email 
     * @param rememberMe 
     */
    async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean){
        await this.inlineFullNameTextbox.fill(name)
        await this.inlineEmailTextbox.fill(email)
        // If the `rememberMe` parameter is true, check the "Remember me" checkbox.
        // This ensures we only interact with the checkbox when the caller requests it;
        // when `rememberMe` is false we leave the checkbox untouched.
        if (rememberMe) {
            await this.inlineRememberMeCheckbox.check({force: true})
        }
        await this.inlineSubmitButton.click()

    }
    
    /**
     * Method to fill Basic form by providing email, password, and checkbox state
     * @param email
     * @param password 
     * @param checkboxState 
     */
    async submitBasicFormWithEmailPasswordAndCheckbox(email: string, password: string, checkboxState: boolean){
        await this.basicFormEmailTextbox.fill(email)
        await this.basicFormPasswordTextbox.fill(password)
        // If the `checkboxState` parameter is true, check the "Remember me" checkbox.
        // This ensures we only interact with the checkbox when the caller requests it;
        // when `checkboxState` is false we leave the checkbox untouched.
        if (checkboxState) {
            await this.basicFormCheckbox.check({force: true})
        }
        await this.basicFormSubmitButton.click()
    }
}