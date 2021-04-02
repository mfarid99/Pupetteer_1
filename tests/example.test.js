const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
	it('Should launch the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 250,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.type('#developer-name', 'Mike', { delay: 0 })
		await page.click('#populate', { clickCount: 1 })
		await page.waitForTimeout(2000)

		await page.click('#tried-test-cafe', { clickCount: 1 })
		await page.select('#preferred-interface', 'JavaScript API')
		await page.waitForTimeout(2000)
		await browser.close()
	})
})
