import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit; // Принимает в конструктор колбэк сабмита формы.
        this.popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this.popupForm.querySelectorAll('.popup__input');
    };

    // собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
        super.setEventListeners();
    };

    close() {
        this.popupForm.reset();
        super.close();
    };

    setInputValues(data) {
        this._inputList.forEach((input) =>{
        input.value = data[input.name];
        });
      };

}