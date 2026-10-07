// Yıldırım Hava — basit service worker
// Uygulama kabuğunu (app shell) önbelleğe alır, böylece uygulama daha hızlı açılır
// ve zayıf bağlantılarda çalışmaya devam edebilir. Hava durumu verileri her zaman
// ağdan (Open-Meteo API) taze olarak çekilir — hava durumu önbelleğe alınmaz.

var CACHE_NAME = 'yildirimhava-cache-v2';
var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(APP_SHELL);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event){
  var url = event.request.url;

  // Hava durumu / geokodlama / hava kalitesi API çağrılarına dokunma —
  // her zaman ağdan taze veri gelsin.
  if(url.indexOf('open-meteo.com') !== -1 || url.indexOf('bigdatacloud.net') !== -1){
    return;
  }

  // Sadece GET isteklerini ve kendi kaynağımızı (same-origin) önbellekle yönet.
  if(event.request.method !== 'GET' || url.indexOf(self.location.origin) !== 0){
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(cached){
      var networkFetch = fetch(event.request).then(function(response){
        if(response && response.status === 200){
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        }
        return response;
      }).catch(function(){ return cached; });
      // cache-first: varsa hemen önbellekten döndür, arka planda güncelle
      return cached || networkFetch;
    })
  );
});
