import { browser } from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application title', async () => {
        console.log('Hello', await browser.getTitle(), 'application!')
    })
})
describe('Tab Click Testing', () =>{
    it('should demonstrate a click on the fixtures page', async () => {
        const myButton = await $('#vertical-tab-1')
        await myButton.click() 
    })
    it('should demonstrate a click on the players page', async () => {
        const myButton = await $('#vertical-tab-2')
        await myButton.click() 
    })
    it('should demonstrate a click on the teams page', async () => {
        const myButton = await $('#vertical-tab-3')
        await myButton.click() 
    })
    it('should demonstrate a click on the overview page', async () => {
        const myButton = await $('#vertical-tab-0')
        await myButton.click() 
    })
})
describe('Overview Page Testing', ()=>{
    it('should scroll down the page',async ()=>{
        const elem = await $('#vertical-tabpanel-0 > div');
        
        await elem.waitForDisplayed({ timeout: 3000 });
        
        await elem.scrollIntoView();
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    })
    
})
describe('Fixture Page Testing', ()=>{
    
    it('should scroll down the page', async()=>{
        const myButton = await $('#vertical-tab-1')
        await myButton.click() 
        const elem = await $('#vertical-tabpanel-1 > div');
        
        await elem.waitForDisplayed({ timeout: 3000 });
        
        await elem.scrollIntoView();
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    })
    it('should sort each header',async()=>{
        const columnHeaders = await $$('div.MuiDataGrid-columnHeaderTitle');

        for (const header of columnHeaders) {
            const text = await header.getText();
            console.log(`Sorting column: ${text}`);

            await header.click(); 
            await browser.pause(500); 

            await header.click(); 
            await browser.pause(500); 
        }
            
    })

})
describe('Players Page Testing', ()=>{
    it('should scroll down the page', async()=>{
        const myButton = await $('#vertical-tab-2')
        await myButton.click() 
        const elem = await $('#vertical-tabpanel-2 > div');
        
        await elem.waitForDisplayed({ timeout: 3000 });
        
        await elem.scrollIntoView();
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    })
    it('should sort each header',async()=>{
        const columnHeaders = await $$('div.MuiDataGrid-columnHeaderTitle');

        for (const header of columnHeaders) {
            const text = await header.getText();
            console.log(`Sorting column: ${text}`);

            await header.click(); 
            await browser.pause(500); 

            await header.click();
            await browser.pause(500); 
        }
    })
})
describe('Teams Page Testing', ()=>{
    it('should scroll down the page', async()=>{
        const myButton = await $('#vertical-tab-3')
        await myButton.click() 
        const elem = await $('#vertical-tabpanel-3 > div');
        
        await elem.waitForExist({ timeout: 5000 });
        await elem.waitForDisplayed({ timeout: 5000 });
        
        await elem.scrollIntoView();
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    })
    it('should sort each header',async()=>{
        const columnHeaders = await $$('div.MuiDataGrid-columnHeaderTitle');

        for (const header of columnHeaders) {
            const text = await header.getText();
            console.log(`Sorting column: ${text}`);

            await header.click(); 
            await browser.pause(500); 

            await header.click(); 
            await browser.pause(500);
        }
    })
})
describe('Edge Case Testing', ()=>{
    it('should not crash on rapid tab switching', async () => {
        const tabs = ['#vertical-tab-0', '#vertical-tab-1', '#vertical-tab-2', '#vertical-tab-3'];
        for (let i = 0; i < 5; i++) {
            for (const selector of tabs) {
                const tab = await $(selector);
                await tab.click();
                await browser.pause(100); // simulate rapid user action
            }
        }
    });
})
