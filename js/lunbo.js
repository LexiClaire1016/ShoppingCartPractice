$(function() {
	//Swiper
	var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,
			autoplayDisableOnInteraction: false,
			loop: true,
			paginationClickable: true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 30,
	        hashnav: true
		}) //SwiperEnd
})
