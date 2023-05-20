const CACHE_NAME = 'cache_v_0.1'
const URLS = ['/index.html', '/src/app.tsx', '/src/main.tsx']
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS)
      })
      .catch(err => {
        throw err
      })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    })
  )
})
const tryNetwork = (req, timeout) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout)
    fetch(req).then(res => {
      clearTimeout(timeoutId)
      const responseClone = res.clone()
      caches.open(CACHE_NAME).then(cache => {
        cache.put(req, responseClone)
      })
      resolve(res)
      // Reject also if network fetch rejects.
    }, reject)
  })
}
const getFromCache = req => {
  console.log('network is off so getting from cache...')
  return caches.open(CACHE_NAME).then(cache => {
    return cache.match(req).then(result => {
      return result || Promise.reject('no-match')
    })
  })
}
self.addEventListener('fetch', event => {
  event.respondWith(
    tryNetwork(event.request, 60000).catch(() => getFromCache(event.request))
  )
})
