// Service Worker for LifeAt.io PWA
const CACHE_NAME = 'lifeat-io-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let browser fetch normally, with fallback if needed
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
