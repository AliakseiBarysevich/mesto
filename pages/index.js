import { UserInfo } from '../components/UserInfo.js';
import { infoInput, initialCards, nameInput, validationSettings, editingButton, additionCardButton } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';

const currentUserInfo = new UserInfo({userNameSelector: '.profile__name', userInfoSelector: '.profile__job'});

const initialCardsList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = new Card({
      data: cardData,
      handleCardClick: (cardData) => {
        largeImagePopup.open(cardData);
      }
    },
      '#element');
    const cardRendered = card.getCard();
    initialCardsList.addItem(cardRendered);
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
    const newCard = new Section({
      items: cardData,
      renderer: (cardData) => {
        const card = new Card({
          data: cardData,
          handleCardClick: (cardData) => {
            largeImagePopup.open(cardData);
          }
        },
          '#element');
        const cardRendered = card.getCard();
        newCard.addItem(cardRendered);
      }
    },
      '.elements');
      newCard.createView();
      additionCardPopup.close();
  }
});

const additionCardFormValidator = new FormValidator(validationSettings, additionCardPopup.popupForm);

const largeImagePopup = new PopupWithImage('.popup_type_large-image');

initialCardsList.createView();
editingProfilePopup.setEventListeners();
additionCardPopup.setEventListeners();
profileFormValidator.enableValidation();
profileFormValidator.enableSubmitButton();
additionCardFormValidator.enableValidation();
largeImagePopup.setEventListeners();

editingButton.addEventListener('click', () => {
  const userData = currentUserInfo.getUserInfo();
  nameInput.value = userData.name;
  infoInput.value = userData.info;
  editingProfilePopup.open();
});

additionCardButton.addEventListener('click', function () {
  // formElementForAdditionCardPopup.reset();
  additionCardFormValidator.disableSubmitButton();
  additionCardPopup.open();
});