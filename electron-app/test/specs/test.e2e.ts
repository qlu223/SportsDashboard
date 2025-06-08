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
    it('should scroll down the recently played matches',async ()=>{
        const elem = await $('##vertical-tabpanel-0 > div > p > div > div.MuiBox-root.css-1w1vbxm > div.MuiBox-root.css-1l1pq2q > ul');
        await elem.scrollIntoView();
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    })
})

