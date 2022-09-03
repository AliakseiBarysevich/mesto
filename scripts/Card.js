export class Card {
    constructor(data, templateSelector, openLargeImagePopup) {
        this._text = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._openLargeImagePopup = openLargeImagePopup;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplate;
    }

    _likeCard(likeButton) {
        likeButton.classList.toggle('element__description-like_active');
    }
    
    _deleteCard() {
        this.cardTemplate.remove();
    }

    // _openLargeImagePopup() {
    //     largeImage.src = this._image;
    //     largeImage.alt = this._text;
    //     largeImageCaption.textContent = this._text;
    //     largeImagePopup.classList.add('popup_opened');
    // }
    
    //Ещё раз напомню, класс -- изолированная сущность, которая ничего не знает про глобальные переменные и соседнюю разметку
    //(исключение -- обращение к document для обработки нажатия на Esc)

    _setEvenetListeners() {
        const deleteButton = this.card.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => {
            _deleteCard();
        });

        const likeButton = this.card.querySelector('.element__description-like');
        likeButton.addEventListener('click', () => {
            _likeCard(likeButton);
        });

        this._image.addEventListener('click', () => {
            _openLargeImagePopup(this._text, this._image);
        })
    };

    getCard() {
        this.card = this._getTemplate();
        this._setEvenetListeners();

        this.card.querySelector('.element__image').src = this._image;
        this.card.querySelector('.element__image').alt = this._image;
        this.card.querySelector('.element__description-text').textContent = this._text;

        return this.card;
    }

}




// function createNewCard(cardData) {
//     const newCard = card.cloneNode(true);
//     const cardImage = newCard.querySelector('.element__image');

//     newCard.querySelector('.element__description-text').textContent = cardData.name;
//     cardImage.src = cardData.link;
//     cardImage.alt = cardData.name;

//     const likeButton = newCard.querySelector('.element__description-like');
//     const deleteButton = newCard.querySelector('.element__delete-button');

//     likeButton.addEventListener('click', function () {
//         likeCard(likeButton);
//     });

//     deleteButton.addEventListener('click', function () {
//         deleteCard(newCard);
//     });

//     cardImage.addEventListener('click', function () {
//         openLargeImagePopup(cardData);
//     });

//     return newCard;
// };