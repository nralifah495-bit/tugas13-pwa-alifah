const CACHE_NAME = "cms-alifah-v1";

const urlsToCache = [
  "/",
  "/cms.html",
  "/login.html",
  "/profile alifah.html",
  "/css/styles.css",
  "/js/api.js",
  "/js/auth.js",
  "/js/cms.js",
  "/js/map.js",
  "/js/profile.js",
  "/manifest.json"
];
  "/",
  "/cms.html",
  "/css/styles.css",
  "/js/cms.js",
  "/manifest.json"


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