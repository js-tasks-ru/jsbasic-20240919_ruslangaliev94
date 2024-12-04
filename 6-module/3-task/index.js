import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0; // Отслеживаем текущий слайд
    this.render();
    this.initCarousel();
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
      .map(({name, price, image, id}) => `
              <div class="carousel__slide" data-id="${id}">
                <img src="/assets/images/carousel/${image}" class="carousel__img" alt="${name}">
                <div class="carousel__caption">
                  <span class="carousel__price">€${price.toFixed(2)}</span>
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

    // Добавляем обработчики на кнопки добавления продукта
    this.addProductEventListeners();
  }

  addProductEventListeners() {
    const buttons = this.elem.querySelectorAll('.carousel__button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const slideId = button.closest('.carousel__slide').dataset.id;
        const event = new CustomEvent('product-add', {
          detail: slideId,
          bubbles: true,
        });
        this.elem.dispatchEvent(event);
        console.log('тык', event.detail);
      });
    });
  }

  initCarousel() {
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    const carouselInner = this.elem.querySelector('.carousel__inner');
    const totalSlides = this.slides.length;


    const updateCarousel = () => {
      const offset = -this.currentSlide * carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;

      // Показываем/скрываем стрелки в зависимости от текущего слайда
      arrowLeft.style.display = this.currentSlide === 0 ? 'none' : '';
      arrowRight.style.display = this.currentSlide === totalSlides - 1 ? 'none' : '';


      console.log(`${this.currentSlide + 1 } из ${totalSlides}`);
    };

    arrowLeft.addEventListener('click', () => {
      this.currentSlide = Math.max(this.currentSlide - 1, 0);
      updateCarousel();
    });

    arrowRight.addEventListener('click', () => {
      this.currentSlide = Math.min(this.currentSlide + 1, totalSlides - 1);
      updateCarousel();
    });

    // Обновляем карусель при первом рендере
    updateCarousel();
  }
}
