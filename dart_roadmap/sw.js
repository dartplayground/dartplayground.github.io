// অফলাইন: নিজের ফাইল আগে network থেকে (নতুন version পেতে), না পেলে cache থেকে।
// font আর highlight.js আগে cache থেকে। script এর ?v= বদলালে পুরানোটা মুছে নতুনটা রাখি।
const CACHE = 'dart-khata-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html'])));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

const keep = (req, res) => caches.open(CACHE).then(async c => {
  const path = new URL(req.url).pathname;
  for (const k of await c.keys()) if (new URL(k.url).pathname === path && k.url !== req.url) await c.delete(k);
  await c.put(req, res);
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => { if (res.ok) keep(req, res.clone()); return res; })
      .catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
  } else if (/^(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { if (res.ok || res.type === 'opaque') caches.open(CACHE).then(c => c.put(req, res.clone())); return res; })));
  }
});
