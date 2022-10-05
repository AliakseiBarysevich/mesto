export class Card {
    constructor({data, handleCardClick, handleLikeClick, handleDeleteIconClick}, profileId, cardTemplateSelector) {
        this._data = data;
        this._placeName = data.name;
        this._imageLink = data.link;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick.bind(this);
        this._profileId = profileId;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getTemplateCopy() {
        const cardTemplateCopy = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplateCopy;
    }

    _getLikeCount() {
        const likesCount = this._likes == undefined || this._likes == null ? 0 : this._likes.length;
        this._card.querySelector('.element__description-likes-number').textContent = likesCount;
        if (this.isLiked()) {
            this._card.querySelector('.element__description-like').classList.add('element__description-like_active');
        } else {
            this._card.querySelector('.element__description-like').classList.remove('element__description-like_active');
        }
    }

    isLiked() {
        return Boolean(this._likes.find((item) => {
            return item._id === this._profileId;
        }));
    }

    setLikesInfo(data) {
        this._likes = data.likes;
        this._getLikeCount();
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }

    getCardId() {
        return this._cardId;
    }

    _renderButtons() {
        if (this._ownerId === this._profileId) {
            this._card.querySelector('.element__delete-button').classList.add('element__delete-button_visible')
        } else {
            this._card.querySelector('.element__delete-button').classList.add('element__delete-button_hidden')
        }
    }
     
    _setEventListeners() {
        const deleteButton = this._card.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => {
            this._handleDeleteIconClick(this);
        });

        this._likeButton = this._card.querySelector('.element__description-like');
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick(this);
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._data);
        });
    }

    getCard() {
        this._card = this._getTemplateCopy();
        this._cardImage =  this._card.querySelector('.element__image');
        this._setEventListeners();

        this._cardImage.src = this._imageLink;
        this._cardImage.alt = this._imageLink;
        this._card.querySelector('.element__description-text').textContent = this._placeName;

        this._getLikeCount();
        this._renderButtons();

        return this._card;
    }

}