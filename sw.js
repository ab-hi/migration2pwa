// version: I'm nearly finished the codelab woo!

/** An empty service worker! */
self.addEventListener('fetch', function(event) {
  if (event.request.url == 'https://dragon-server.appspot.com/') {
    console.info('responding to dragon-server fetch with Service Worker! 🤓');
    event.respondWith(fetch(event.request).catch(function(e) {
      let out = {Gold: 1, Size: -1, Actions: []};
      return new Response(JSON.stringify(out));
    }));
    return;
  }  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Got Push?', {
      body: 'Push Message received'
   }));
});

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
       '/migration2pwa',
        '/migration2pwa/index.html',
        '/migration2pwa/dragon.html',
        '/migration2pwa/faq.html',
        '/migration2pwa/manifest.json',
        '/migration2pwa/background.jpeg',
        '/migration2pwa/construction.gif',
        '/migration2pwa/dragon.png',
        '/migration2pwa/logo.png',
        '/migration2pwa/site.js',
        '/migration2pwa/dragon.js',
        '/migration2pwa/styles.css',
      ]);
    })
  );
});