const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
const arrSliders = Array.from(document.getElementsByClassName("slider__item"));
const qtySlides = arrSliders.length;
let activeSlide;

function switchOnSlide(indexSlide=0) {
    arrSliders[indexSlide].className = 'slider__item slider__item_active';
    return indexSlide;
}

function switchOffSlide(indexSlide=0) {
    arrSliders[indexSlide].className = 'slider__item';
    return indexSlide;
}

sliderNext.onclick = () => {
    activeSlide = switchOffSlide(activeSlide);
    activeSlide++;
    if (activeSlide >= qtySlides) {
        activeSlide = 0;
    }
    activeSlide = switchOnSlide(activeSlide);    
}

sliderPrev.onclick = () => {
    activeSlide = switchOffSlide(activeSlide);
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = qtySlides - 1;
    }
    activeSlide = switchOnSlide(activeSlide);    
}
