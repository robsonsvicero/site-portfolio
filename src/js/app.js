new Swiper('.card-wrapper', {

	loop: true,
	spaceBetween: 30,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		820: {
			slidesPerView: 1
		},
		1024: {
			slidesPerView: 2
		},
		1440: {
			slidesPerView: 3
		},
		1920: {
			slidesPerView: 4
		}
	}
});