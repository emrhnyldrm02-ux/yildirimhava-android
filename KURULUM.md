# Yıldırım Hava — Native Android Uygulaması (Capacitor)

Bu proje, "Yıldırım Hava" uygulamasının tasarımını kendi içine gömen gerçek bir
native Android projesidir. Uygulama artık açılırken yildirimhava.netlify.app
sitesine ihtiyaç duymaz — arayüz apk'nin içinde yerel dosya olarak durur.
Sadece hava durumu verisi için (Open-Meteo API) internete bağlanır.

Derleme, GitHub Actions üzerinde (ücretsiz, bulutta) otomatik yapılır.

## İmzalama (signing)

Bu depo imzalama anahtarını (keystore) veya şifrelerini **içermez** — hiçbiri
commit edilmedi. Derleme sırasında GitHub'ın "Actions secrets" (şifreli,
depo içeriğinde görünmeyen) bölümünde saklanan `KEYSTORE_BASE64`,
`KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` değerleri kullanılıyor.
Bu depo public (herkese açık) olsa bile imzalama bilgileri asla görünmez.

## Derlemeyi indir

Her `main` dalına yapılan push sonrası **Actions** sekmesinde otomatik bir
derleme başlar. Birkaç dakika sonra tamamlanan işin sayfasında, en altta
**Artifacts** kısmında `yildirimhava-release-apk` ve
`yildirimhava-release-aab` dosyaları indirilebilir.

- `.apk` → telefona kurup test etmek için
- `.aab` → Google Play Console'a yüklenecek asıl dosya

## Bir şey değiştirmek istersen

`www/` klasörü uygulamanın tüm arayüzünü içeriyor (index.html, about.html,
vs.). Bu dosyalarda değişiklik yapıp push edildiğinde GitHub otomatik olarak
yeni bir apk/aab derler.
