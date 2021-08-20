//main.js

//jQuery를 사용한다고 가정한다.

//서비스워커.js의 이름이 service-worker.js라고 가정한다.

$(document).ready(function(){

	if ('serviceWorker' in navigator && (window.location.protocol === 'https:')) {

	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {

		//service worker 등록 성공

		console.log('ServiceWorker registration successful with scope: ', registration.scope);

	}).catch(function(err){

		//service worker 등록 실패

		alert("sw error : "+err);

		console.log('ServiceWorker registration failed: ', err);

	});

}

});