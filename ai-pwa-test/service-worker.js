// service-worker.js
// https://bscnote.tistory.com/33

var CACHE_NAME = 'my-site-cache-v1'; //캐시파일명

var urlsToCache = [ 

	'/',

]; //캐시할 파일경로들



console.log('Started', self);

//설치단계 수행

self.addEventListener('install', function(event) {

	self.skipWaiting(); //대기상태를 건너뛰고 서비스 워커를 바로 실행

	// Perform install steps

	event.waitUntil(

		caches.open(CACHE_NAME).then(function(cache) {

			console.log('Opened cache');

			return cache.addAll(urlsToCache);

		})

	);

});



self.addEventListener('activate', function(event) {

  console.log('Service Worker Activated', event);

});



self.addEventListener('fetch', function(event) {

  console.log('Service Worker fetch', event);

});





self.addEventListener('push', function(event) {

  console.log('Push message received', event);

  // TODO

  alert("push message");

});