const config = {
    formSelector: '.popup__form',
    addCardFormSelector: '.popup__form_type_add-card',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    addCardSubmitButtonSelector: '.popup__submit-button_type_add-card',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${config.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${config.errorClass}`);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${config.inputErrorClass}`);
    errorElement.classList.remove(`${config.errorClass}`);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(`${config.inactiveButtonClass}`);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(`${config.inactiveButtonClass}`);
        buttonElement.removeAttribute('disabled', true);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
    const addCardForm = document.querySelector(`${config.addCardFormSelector}`);
    const addCardSubmitButton = document.querySelector(`${config.addCardSubmitButtonSelector}`);
    const addCardFormInputList = Array.from(addCardForm.querySelectorAll(`${config.inputSelector}`));
    const buttonElement = formElement.querySelector(`${config.submitButtonSelector}`);
    toggleButtonState(addCardFormInputList, addCardSubmitButton);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(`${config.formSelector}`));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    })
}

enableValidation();