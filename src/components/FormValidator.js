export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.disableSubmitButton();
        } else {
            this.enableSubmitButton();
        }
    };

    enableSubmitButton() {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }

    disableSubmitButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    };

    _setEventListeners() {
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            })
        })
    };

    enableValidation() {
        this._setEventListeners();
    };
}