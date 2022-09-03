// Создаем для каждой проверяемой формы экземпляр класса FormValidator.
const profileFormValidator = new FormValidator(initialOject, profileForm);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(initialOject, cardForm);
cardFormValidator.enableValidation();