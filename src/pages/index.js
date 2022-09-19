import './index.css';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards, validationSettings, editingButton, additionCardButton } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';

const currentUserInfo = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__job' });

const initialCardsList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    initialCardsList.addItem(createCard(cardData));
  }
},
  '.elements');

const editingProfilePopup = new PopupWithForm('.popup_type_edit-profile', {
  handleFormSubmit: (userData) => {
    currentUserInfo.setUserInfo(userData);
    editingProfilePopup.close();
  }
});

const profileFormValidator = new FormValidator(validationSettings, editingProfilePopup.popupForm);

const additionCardPopup = new PopupWithForm('.popup_type_add-card', {
  handleFormSubmit: (cardData) => {
    initialCardsList.addItem(createCard(cardData));
    additionCardPopup.close();
  }
});

const additionCardFormValidator = new FormValidator(validationSettings, additionCardPopup.popupForm);

const largeImagePopup = new PopupWithImage('.popup_type_large-image');

function createCard(cardData) {
  const card = new Card({
    data: cardData,
    handleCardClick: (cardData) => {
      largeImagePopup.open(cardData);
    }
  },
    '#element');
  const cardRendered = card.getCard();
  return cardRendered;
};

initialCardsList.createView();
editingProfilePopup.setEventListeners();
additionCardPopup.setEventListeners();
profileFormValidator.enableValidation();
profileFormValidator.enableSubmitButton();
additionCardFormValidator.enableValidation();
largeImagePopup.setEventListeners();

editingButton.addEventListener('click', () => {
  const userData = currentUserInfo.getUserInfo();
  editingProfilePopup.setInputValues(userData);
  editingProfilePopup.open();
});

additionCardButton.addEventListener('click', function () {
  additionCardFormValidator.disableSubmitButton();
  additionCardPopup.open();
});