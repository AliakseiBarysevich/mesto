export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose.bind(this));
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose.bind(this));
    };


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