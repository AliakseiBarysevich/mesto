// отвечает за открытие и закрытие попапа
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    // содержит логику закрытия попапа клавишей Esc
    _handleEscClose(e) {
        if (e.code === 'Escape') {
            // const popupOpened = document.querySelector('.popup_opened');
            this.close();
          }
    };

    // добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы
    setEventListeners() {
        this._popup.addEventListener('mousedown', (e) => {
            if (e.target === e.currentTarget || e.target.classList.contains('popup__close-button')) {
                this.close();
            };
          });
    }
}