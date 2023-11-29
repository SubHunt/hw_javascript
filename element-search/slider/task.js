const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
const arrSliders = Array.from(document.getElementsByClassName("slider__item"));
const qtySlides = arrSliders.length;
let activeSlide = arrSliders.findIndex(findFirstElement);

function findFirstElement(element) {
    return element = 'div.slider__item.slider__item_active';
  }

function switchOnSlide() {
    arrSliders[activeSlide].className = 'slider__item slider__item_active';
}

function switchOffSlide() {
    arrSliders[activeSlide].className = 'slider__item';
}

sliderNext.onclick = () => {
    switchOffSlide();
    activeSlide++;
    if (activeSlide >= qtySlides) {
        activeSlide = 0;
    }
    switchOnSlide();    
}

sliderPrev.onclick = () => {
    switchOffSlide();
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = qtySlides - 1;
    }
    switchOnSlide();    
}
