const sliderTrustUs = () => {
    'use strict';

    const options = {
        main: '.companies-wrapper',
        wrap: '.companies-hor',
        prev: '#test-left',
        next: '#test-right',
        slidesToShow: 4,
        infinity: true
    };

    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 0,
            slidesToShow = 3
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow)
            };
        }

        init() {
            this.addGloClass();
            this.addStyle();

            if (this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
        }

        addGloClass() {
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for (const item of this.slides) {
                item.classList.add('glo-slider__item');
            }
        }

        addStyle() {
            const style = document.createElement('style');
            style.id = 'sliderCarusel-style';
            style.textContent = `
                .glo-slider {
                    overflow: hidden !important;
                }
                .glo-slider__wrap {
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;          
                }
                .glo-slider__item {
                    flex: 0 0 ${this.options.widthSlide}% !important;
                    margin: auto 0 !important;
                }
            `;                                      // will-change необходим предупредить браузер об изменнении параметра в будущем
            document.head.appendChild(style);
        }

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                console.log(this.options.position);
                if (this.options.position < 0) {
                    this.options.position = this.slides.length - this.slidesToShow;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        nextSlider() {
            if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
                ++this.options.position;
                console.log(this.options.position);
                if (this.options.position > this.slides.length - this.slidesToShow) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        addArrow() {

        }
    }

    const carousel = new SliderCarousel(options);
    carousel.init();

}

export default sliderTrustUs;