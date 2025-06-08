import { browser } from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application title', async () => {
        console.log('Hello', await browser.getTitle(), 'application!')
    })
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
        const myButton = await $('#vertical-tab-3')
        await myButton.click() 
    })
})
// describe('Filter click testing', ()=>{
//     it('should demonstrate a click on the teams page', async () => {
//         const myButton = await $('#vertical-tab-3')
//         await myButton.click() 
//     })
//     it('should demonstrate a click on the view filter',async ()=>{
//         const myButton = await $('#view-select')
//         await myButton.click()
//     })
//     it('should demonstrate a click on the sortedby filter',async ()=>{
//         const myButton = await $('#sort-by-select')
//         await myButton.click()
//     })
// })


