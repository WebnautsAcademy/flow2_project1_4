let buttonElement = document.querySelector('.button');
let popupContainerElement = document.querySelector('.popup-container');
let buttonClose = document.querySelector('.close');

buttonElement.addEventListener('click', () => {
    popupContainerElement.classList.remove('popup-container-hidden');    
});

buttonClose.addEventListener('click', () => {
    popupContainerElement.classList.add('popup-container-hidden');
});
