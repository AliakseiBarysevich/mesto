export class Card {
    constructor(data, templateSelector, openLargeImagePopup) {
        this._text = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._openLargeImagePopup = openLargeImagePopup;
    }

    _getTemplateCopy() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplate;
    }

    _likeCard(likeButton) {
        likeButton.classList.toggle('element__description-like_active');
    }
    
    _deleteCard() {
        this._card.remove();
    }

    _setEventListeners() {
        const deleteButton = this._card.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => {
            this._deleteCard();
        });

        const likeButton = this._card.querySelector('.element__description-like');
        likeButton.addEventListener('click', () => {
            this._likeCard(likeButton);
        });

        const cardImage = this._card.querySelector('.element__image');
        cardImage.addEventListener('click', () => {
            this._openLargeImagePopup(this._text, this._image);
        })
    };

    getCard() {
        this._card = this._getTemplateCopy();
        this._setEventListeners();

        this._card.querySelector('.element__image').src = this._image;
        this._card.querySelector('.element__image').alt = this._image;
        this._card.querySelector('.element__description-text').textContent = this._text;

        return this._card;
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