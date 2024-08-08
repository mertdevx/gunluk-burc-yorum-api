const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3433;

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
};

app.get('/burc/:burc', async (req, res) => {
    const burc = req.params.burc;
    const url = `https://www.gunlukburc.net/gunluk-burc-yorumlari/${burc}.html`;

    try {
        const response = await axios.get(url, { headers });
        const html = response.data;
        const $ = cheerio.load(html);

        const data = {
            success: true,
            developer: 'Atsız Yazılım',
            kaynak: 'Tüm Günlük Burç Verileri https://www.gunlukburc.net/ Websitesinden Anlık Olarak Çekilmektedir.',
        };

        const genelDurumElement = $('#articleBody p').eq(0).text();
        if (genelDurumElement) {
            data.genel_durum = genelDurumElement.trim();
        }

        const askVeIliskilerElement = $('#articleBody p').eq(1).text();
        if (askVeIliskilerElement) {
            data.ask_ve_iliskiler = askVeIliskilerElement.trim();
        }

        const isVeKariyerElement = $('#articleBody p').eq(2).text();
        if (isVeKariyerElement) {
            data.is_ve_kariyer = isVeKariyerElement.trim();
        }

        const maddiDurumElement = $('#articleBody p').eq(3).text();
        if (maddiDurumElement) {
            data.maddi_durum = maddiDurumElement.trim();
        }

        const yildizFaliElement = $('#articleBody p').eq(4).text();
        if (yildizFaliElement) {
            data.yildiz_fali = yildizFaliElement.trim();
        }

        const yuzdelikElements = $('svg');
        yuzdelikElements.each(function () {
            const className = $(this).attr('class');
            const yuzdelik = $(this).find('text').first().text().trim();

            switch (className) {
                case 'yildiz-fali genel':
                    data.genel_yuzdelik = yuzdelik;
                    break;
                case 'yildiz-fali ask':
                    data.ask_yuzdelik = yuzdelik;
                    break;
                case 'yildiz-fali para':
                    data.para_yuzdelik = yuzdelik;
                    break;
                case 'yildiz-fali saglik':
                    data.saglik_yuzdelik = yuzdelik;
                    break;
                case 'yildiz-fali is':
                    data.is_yuzdelik = yuzdelik;
                    break;
            }
        });

        res.json(data);
    } catch (error) {
        res.json({ success: false, error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
