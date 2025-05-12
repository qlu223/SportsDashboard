import { browser } from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application title', async () => {
        console.log('Hello', await browser.getTitle(), 'application!')
    })
    // it('should demonstrate a click', async () => {
    //     const myButton = await $('#vertical-tab-9')
    //     await myButton.click({ x: 0}) 
    // })
})
describe('Tab Click Testing', () =>{
    it('should demonstrate a click on the overview page', async () => {
        const myButton = await $('#vertical-tab-0')
        await myButton.click() 
    })
    it('should demonstrate a click on the fixtures page', async () => {
        const myButton = await $('#vertical-tab-1')
        await myButton.click() 
    })
    it('should demonstrate a click on the teams page', async () => {
        const myButton = await $('#vertical-tab-2')
        await myButton.click() 
    })
    it('should demonstrate a click on the visualizations page', async () => {
        const myButton = await $('#vertical-tab-3')
        await myButton.click() 
    })
    it('should demonstrate a click on the predictions page', async () => {
        const myButton = await $('#vertical-tab-4')
        await myButton.click({ x: 0}) 
    })
})


