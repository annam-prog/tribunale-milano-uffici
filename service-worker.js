self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('tribunale-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/TribunaleMilano.html',
        '/icon-180.png'
      ]);
    })
  );
});
