// let buttonElement = document.querySelector('.button');
// let popupContainerElement = document.querySelector('.popup-container');
// let buttonClose = document.querySelector('.close');

// buttonElement.addEventListener('click', () => {
//     popupContainerElement.classList.remove('popup-container-hidden');    
// });

// buttonClose.addEventListener('click', () => {
//     popupContainerElement.classList.add('popup-container-hidden');
// });


let slider = document.querySelector('.slider-list');
let slides = document.querySelectorAll('.slider-item');
let nextButton = document.querySelector('.button-next-slide');
let prewButton = document.querySelector('.button-prew-slide');

slides.forEach((slide, i) => {
    slide.style.left = `calc(${100 * i}% + ${160 * i}px)`;
});

let activeIndex = 0;
let currntLeft = 0;

nextButton.addEventListener('click', () => {
    slides.forEach((slide, i) => {
        if (slide.classList.contains('active')) {
            activeIndex = i + 1;
            slide.classList.remove('active');
        }

        if (slide[activeIndex]) {
            slides[activeIndex].classList.add('active')
        } else {
            slide[0].classList.add('active');

        }

        currntLeft = 62 * activeIndex;
        slider.style.left = `-${currntLeft}%`;
    });
});