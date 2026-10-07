# Yıldırım Hava

Türkçe, reklam destekli bir hava durumu uygulaması. Anlık hava durumu, saatlik
ve 7 günlük tahmin, hava kalitesi (AQI), rüzgar yönü, basınç, görüş mesafesi
ve favori şehir listesi gibi özellikler sunar.

Bu depo, uygulamanın native Android (Capacitor) paketini içerir. Arayüz
(HTML/CSS/JS) apk'nin içine gömülüdür — uygulama açılışta harici bir siteye
ihtiyaç duymaz, sadece hava durumu verisi için internete bağlanır.

## Kullanılan veri kaynakları

- [Open-Meteo](https://open-meteo.com) — hava durumu, hava kalitesi ve şehir arama
- [BigDataCloud](https://www.bigdatacloud.com) — GPS konumunu şehir adına çevirme

## Teknoloji

- Saf HTML/CSS/JavaScript (framework yok) — `www/`
- [Capacitor](https://capacitorjs.com) — web arayüzünü native Android projesine paketler
- GitHub Actions — her push'ta otomatik apk/aab derlemesi (`.github/workflows/android-build.yml`)

## Yapay zeka kullanımı hakkında

Bu proje, [Claude](https://claude.com) (Anthropic) ile birlikte geliştirilmiştir.
Uygulamanın tasarımı, kod yapısı, Android paketlemesi ve CI/CD kurulumu büyük
ölçüde yapay zeka desteğiyle oluşturuldu; yönlendirme, karar alma ve test etme
tarafımdan yapıldı. Bunu burada belirtmeyi, sürecin şeffaf olması açısından
önemli buluyorum.

## Kurulum / geliştirme

Derleme adımları için bkz. [KURULUM.md](./KURULUM.md).
