import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
    constructor(slides) {
        this.slides = slides;
        this.render();
    }

    render() {
        this.elem = createElement(`
            <div class="carousel">
                <div class="carousel__arrow carousel__arrow_right">
                    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                </div>
                <div class="carousel__arrow carousel__arrow_left">
                    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                </div>
                <div class="carousel__inner">
                    ${this.slides
            .map(({name, price, image, id}) =>
                `
                            <div class="carousel__slide" data-id="${id}">
                                <img src="/assets/images/carousel/${image}" class="carousel__img" alt="${name}">
                                <div class="carousel__caption">
                                    <span class="carousel__price">€${(price).toFixed(2)}</span>
                                    <div class="carousel__title">${name}</div>
                                    <button type="button" class="carousel__button">
                                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                </div>
            </div>
        `);

        let arowLeft = this.elem.querySelector('.carousel__arrow_left');
        let arowRight = this.elem.querySelector('.carousel__arrow_right');
        let carouselInner = this.elem.querySelector('.carousel__inner');
        let carouselSlide = this.elem.querySelectorAll('.carousel__slide');

        let currentSlide = 0;

        // Сохраняем ширину карусели в переменную
        let carouselWidth = carouselInner.offsetWidth;

        // Ждем немного перед получением ширины (если нужно больше времени для рендеринга)
        setTimeout(() => {
            carouselWidth = carouselInner.offsetWidth;
            console.log(carouselWidth);
        }, 0);

        // Добавляем обработчик на клик по карусели
        this.elem.addEventListener('click', (e) => {
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

            console.log(currentSlide);
            console.log(carouselWidth);
        });
    }
}
