const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/scrape', async (req, res) => {
    try {
        const { query } = req.body;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://www.bing.com/search?q=${query}`);

        // Perform scraping and return the results as JSON
        // ...

        await browser.close();

        // Send the scraped data back to the client
        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
