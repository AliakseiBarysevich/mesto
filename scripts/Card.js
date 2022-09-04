export class Card {
    constructor(data, templateSelector, openLargeImagePopup) {
        this._text = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._openLargeImagePopup = openLargeImagePopup;
    }

    _getTemplateCopy() {
        const cardTemplateCopy = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplateCopy;
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