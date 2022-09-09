import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './data.js';
import { validationSettings } from './data.js';

const editingButton = document.querySelector('.profile__edit-button');
const editingProfilePopup = document.querySelector('.popup_type_edit-profile');
const formElementForEditingProfilePopup = document.querySelector('.popup__form_type_edit-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const additionCardButton = document.querySelector('.profile__add-button');
const additionCardPopup = document.querySelector('.popup_type_add-card');
const placeNameInput = document.querySelector('.popup__input_type_place-name');
const placeLinkInput = document.querySelector('.popup__input_type_place-link');
const formElementForAdditionCardPopup = document.querySelector('.popup__form_type_add-card');
const cardsContainer = document.querySelector('.elements');
const largeImagePopup = document.querySelector('.popup_type_large-image');
const largeImage = largeImagePopup.querySelector('.popup__image');
const largeImageCaption = largeImagePopup.querySelector('.popup__image-caption');
const popups = document.querySelectorAll('.popup');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupOnEsc);
};

function initialiseEditingProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

function openEditingProfilePopup(editingProfilePopup) {
  initialiseEditingProfilePopup();
  openPopup(editingProfilePopup);
};

function openLargeImagePopup(data) {
  largeImage.src = data.link;
  largeImage.alt = data.name;
  largeImageCaption.textContent = data.name;
  openPopup(largeImagePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupOnEsc);
};

function closePopupOnEsc(e) {
  if (e.code === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

function handleSubmitEditingProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editingProfilePopup);
}

function createNewCard(cardData) {
  const newCard = new Card(cardData, '#element', openLargeImagePopup);
  const createdCard = newCard.getCard();
  return createdCard;
};

function handleSubmitAdditionCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  }
  createNewCard(cardData);
  cardsContainer.prepend(createNewCard(cardData));
  closePopup(additionCardPopup);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

initialiseEditingProfilePopup(); // вызов этой функции позволяет делать активной кнопку submit у editingProfilePopup при инициализации скрипта, без него кнопка при первой загрузке неактивна (http://joxi.ru/KAxEbxXcwPzYjr). 

const profileFormValidator = new FormValidator(validationSettings, formElementForEditingProfilePopup);
profileFormValidator.enableValidation();

const additionCardFormValidator = new FormValidator(validationSettings, formElementForAdditionCardPopup);
additionCardFormValidator.enableValidation();

editingButton.addEventListener('click', function () {
  openEditingProfilePopup(editingProfilePopup);
});

formElementForEditingProfilePopup.addEventListener('submit', handleSubmitEditingProfile);

additionCardButton.addEventListener('click', function () {
  formElementForAdditionCardPopup.reset();
  additionCardFormValidator.disableSubmitButton();
  openPopup(additionCardPopup);
});

formElementForAdditionCardPopup.addEventListener('submit', handleSubmitAdditionCard);

initialCards.forEach(function (cardData) {
  createNewCard(cardData);
  cardsContainer.append(createNewCard(cardData));
});