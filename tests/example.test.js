const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
	it('Should launch the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 20,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.type('#developer-name', 'Mike', { delay: 0 })
		await page.click('#tried-test-cafe', { clickCount: 1 })
		await page.select('#preferred-interface', 'JavaScript API')
		const message = 'lets fill it up with bunch of txt'
		await page.type('#comments', message)
		await page.click('#submit-button')
		await page.waitForSelector('.result-content')
		await page.waitForTimeout(5000)
		await browser.close()
	})
})
