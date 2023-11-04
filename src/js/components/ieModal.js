function init() {
	let ie = document.querySelector('.is-browser-ie');
	if (ie) {
		let block = document.createElement('div');
		block.className = 'info-browser-ie';
		block.innerHTML = '<b class="info-browser-ie__title">Внимание!</b><p class="info-browser-ie__text">Использование устаревшей версии браузера может быть причиной ряда проблем, включая уязвимости безопасности, ограниченный доступ к современным сайтам и проблемы с производительностью. Обновление браузера — это быстрый и простой способ устранить эти проблемы и насладиться полным функционалом интернета. Не отказывайте себе в возможности насладиться всеми преимуществами, которые предлагает современный интернет — обновите ваш браузер прямо сейчас!</p>';
		document.querySelector('body').prepend(block);
	}
}

export default {
	init,
};
