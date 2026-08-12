import {test, expect, Page} from '@playwright/test'


export class HelperBase{

    /*Acts as a reusable base class for page-object helpers.
      Stores the Playwright page instance in a property so child classes
      can use it.
      Provides common utility methods that are shared across
      multiple page objects.*/

    readonly page: Page
    constructor(page: Page){
        this.page = page
    }
    
    /**
     * Test sample method that can be used across different page objects
     * @param timeInSeconds 
     */
    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }


}