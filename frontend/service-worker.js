const CACHE_NAME = "cms-alifah-v2";

const urlsToCache = [
  "/",
  "/cms.html",
  "/profile alifah.html",
  "/css/styles.css",
  "/js/api.js",
  "/js/auth.js",
  "/js/cms.js",
  "/js/map.js",
  "/js/profile.js",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});