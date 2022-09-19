export class Card {
    constructor({data, handleCardClick}, cardTemplateSelector) {
        this._data = data;
        this._placeName = data.name;
        this._imageLink = data.link;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        // handleCardClick должна открывать попап с картинкой при клике на карточку.
    }

    _getTemplateCopy() {
        const cardTemplateCopy = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplateCopy;
    }

    _likeCard() {
        this._likeButton.classList.toggle('element__description-like_active');
    }

    _deleteCard() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        const deleteButton = this._card.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => {
            this._deleteCard();
        });

        this._likeButton = this._card.querySelector('.element__description-like');
        this._likeButton.addEventListener('click', () => {
            this._likeCard();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._data);
        })
    };

    getCard() {
        this._card = this._getTemplateCopy();
        this._cardImage =  this._card.querySelector('.element__image');
        this._setEventListeners();

        this._cardImage.src = this._imageLink;
        this._cardImage.alt = this._imageLink;
        this._card.querySelector('.element__description-text').textContent = this._placeName;

        return this._card;
    }

}