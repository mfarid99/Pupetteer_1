const { expect } = require('chai')
const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
	it('Should launch the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 20,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)

		await page.goto('https://example.com/')
		await page.waitForXPath('//h1')
		const title = await page.title()
		const url = await page.url()
		const text = await page.$eval('h1', element => element.textContent)
		const count = await page.$$eval('p', element => element.length)
		const parags = await page.$eval('p', element => element.textContent)
		console.log('Text in h1 is: ' + text)
		console.log('Count of paragraphs :' + count)
		console.log('All paragraphs are: ' + parags)

		expect(title).to.be.a('string', 'Example Domain')
		expect(url).to.include('example.com')
		expect(text).to.be.a('string', 'Example Domain')
		expect(count).to.equal(2)

		await page.goto('http://zero.webappsecurity.com/index.html')
		await page.waitForSelector('#signin_button')
		await page.click('#signin_button')
		await page.waitFor(() => !document.querySelector('#signin_button'))
		await browser.close()
	})
})
