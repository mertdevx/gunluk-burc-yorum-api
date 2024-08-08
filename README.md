# Türkçe - Günlük Burç Yorumları API

Bu API, günlük burç yorumlarını kolayca almanızı sağlar. `gunlukburc.net` sitesinden verileri çeker ve JSON formatında sunar.

## Nasıl Kullanılır?

API'ye şu şekilde istek gönderebilirsiniz:

```
GET /burc/:burc
```

`:burc` yerine istediğiniz burcun adını yazın (örneğin: `koc`, `boga`, `ikizler`, vb.).

**Örnek İstek:**

```
GET /burc/koc
```

**Örnek Yanıt:**

```json
{
  "success": true,
  "developer": "Atsız Yazılım",
  "kaynak": "Tüm Günlük Burç Verileri https://www.gunlukburc.net/ Websitesinden Anlık Olarak Çekilmektedir.",
  "genel_durum": "...",
  "ask_ve_iliskiler": "...",
  "is_ve_kariyer": "...",
  "maddi_durum": "...",
  "yildiz_fali": "...",
  "genel_yuzdelik": "%75",
  "ask_yuzdelik": "%80",
  "para_yuzdelik": "%65",
  "saglik_yuzdelik": "%90",
  "is_yuzdelik": "%70"
}
```

## Kurulum

1. Node.js ve npm'in yüklü olduğundan emin olun.
2. Projeyi klonlayın veya indirin.
3. `npm install` komutuyla bağımlılıkları yükleyin.
4. `node index.js` komutuyla API'yi başlatın.

## Veri Kaynağı

Tüm veriler `https://www.gunlukburc.net/` adresinden çekilmektedir.

## Lisans

Bu proje [GNU Genel Kamu Lisansı v3.0](LICENSE) ile lisanslanmıştır.



# English - Daily Horoscope API

This API allows you to easily retrieve daily horoscope readings. It fetches data from `gunlukburc.net` and provides it in JSON format.

## How to Use?

You can make requests to the API as follows:

```
GET /burc/:burc
```

Replace `:burc` with the name of the desired zodiac sign (e.g., `koc`, `boga`, `ikizler`, etc.).

**Example Request:**

```
GET /burc/koc
```

**Example Response:**

```json
{
  "success": true,
  "developer": "Atsız Yazılım",
  "kaynak": "All Daily Horoscope Data is Fetched Instantly from https://www.gunlukburc.net/",
  "genel_durum": "...",
  "ask_ve_iliskiler": "...",
  "is_ve_kariyer": "...",
  "maddi_durum": "...",
  "yildiz_fali": "...",
  "genel_yuzdelik": "%75",
  "ask_yuzdelik": "%80",
  "para_yuzdelik": "%65",
  "saglik_yuzdelik": "%90",
  "is_yuzdelik": "%70"
}
```

## Installation

1. Make sure you have Node.js and npm installed.
2. Clone or download the project.
3. Install dependencies with `npm install`.
4. Start the API with `node index.js`.

## Data Source

All data is fetched from `https://www.gunlukburc.net/`.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).


