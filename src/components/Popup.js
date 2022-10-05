export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this._popup.querySelector('.popup__submit-button');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    loading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Сохранить';
        }
    }

    _handleEscClose(e) {
        if (e.code === 'Escape') {
            this.close();
          }
    };

    setEventListeners() {
        this._popup.addEventListener('mousedown', (e) => {
            if (e.target === e.currentTarget || e.target.classList.contains('popup__close-button')) {
                this.close();
            };
          });
    }
}