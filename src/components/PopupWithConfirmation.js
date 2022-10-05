import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupForm = this._popup.querySelector('.popup__form');
    };

    handleSubmit(handlerFormSubmit) {
        this._handlerFormSubmit = handlerFormSubmit;
      }

    setEventListeners() {
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerFormSubmit();
            this.close();
        })
        super.setEventListeners();
    };

}