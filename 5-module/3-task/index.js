function initCarousel() {

	let arowLeft = document.querySelector('.carousel__arrow_left');
	let arowRight = document.querySelector('.carousel__arrow_right');
	let carouselInner = document.querySelector('.carousel__inner');
	let carouselSlide = document.querySelectorAll('.carousel__slide');

	let currentSlide = 0;
	let carouselWidth = carouselInner.offsetWidth;


	let carousel = document.querySelector('.carousel');


	arowLeft.style.display = 'none';


	carousel.addEventListener('click', (e) => {
		if (e.target.classList.contains('carousel__arrow_left')) {
			console.log('клик лево');
			currentSlide--;


			console.log(currentSlide * carouselWidth);

			carouselInner.style.transform = `translateX(${-currentSlide * carouselWidth}px)`;



			if (currentSlide <= 0) {
				arowLeft.style.display = 'none';
			} else {
				arowLeft.style.display = 'block';
			}


			if (currentSlide < carouselSlide.length - 1) {
				arowRight.style.display = 'block';
			}


		} else if (e.target.classList.contains('carousel__arrow_right')) {
			console.log('клик право');
			currentSlide++;

			carouselInner.style.transform = `translateX(${-currentSlide * carouselWidth}px)`;

			if (currentSlide >= carouselSlide.length - 1) {
				arowRight.style.display = 'none';
			} else {
				arowRight.style.display = 'block';
			}
			if (currentSlide > 0) {
				arowLeft.style.display = 'block';
			}
		}

		console.log(currentSlide)
		console.log(carouselWidth)

	})
}