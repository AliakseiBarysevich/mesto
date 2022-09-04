export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }
    
    _showInputError = (formElement, inputElement, errorMessage, this._config) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
    };
    
    _hideInputError = (formElement, inputElement, this._config) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };
    
    _isValid = (formElement, inputElement, this._config) => {
        if (!inputElement.validity.valid) {
            showInputError(formElement, inputElement, inputElement.validationMessage, this._config);
        } else {
            hideInputError(formElement, inputElement, this._config);
        }
    };
    
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };
    
    //Верно, там можешь оставить ещё одну публичную функцию блокирующую кнопку. 
    toggleButtonState = (inputList, buttonElement, this._config) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._config.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._config.inactiveButtonClass);
            buttonElement.removeAttribute('disabled', true);
        }
    };
    
    _setEventListeners = (formElement, this._config) => {
        const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
        const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
        toggleButtonState(inputList, buttonElement, this._config);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                isValid(formElement, inputElement, this._config);
                toggleButtonState(inputList, buttonElement, this._config);
            })
        })
    };
    
    enableValidation = (config) => {
        //const formList = Array.from(document.querySelectorAll(config.formSelector));
        formList.forEach((formElement) => {
            setEventListeners(formElement, config);
        })
    }
    
    enableValidation(validationSettings);
}