import { UserInfo } from '../components/UserInfo.js';
import { infoInput, initialCards, nameInput, validationSettings, editingButton, additionCardButton } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';

// import { Popup } from '../components/Popup.js'; яго ж не трэба сюды імпаратаваць, але ці трэба імпартаваць у класы PopupWithForm і PopupWithImage, у якіх я яго наследую?

const currentUserInfo = new UserInfo({userNameSelector: '.profile__name', userInfoSelector: '.profile__job'});

const initialCardsList = new Section({
  data: initialCards,
  renderer: (cardData) => {
    const card = new Card({
      data: cardData,
      handleCardClick: (cardData) => {
        largeImagePopup.open(cardData); //ці правільна перадаў публічны метад класа?
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

// як мне тут перадаваць другі аргмент -- элемент формы попапа?
const profileFormValidator = new FormValidator(validationSettings, editingProfilePopup.popupForm);

const additionCardPopup = new PopupWithForm('.popup_type_add-card', {
  handleFormSubmit: (cardData) => {
    const newCard = new Section({
      data: cardData,
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
  }
});

// як мне тут перадаваць другі аргмент -- элемент формы попапа?
const additionCardFormValidator = new FormValidator(validationSettings, additionCardPopup.popupForm);

const largeImagePopup = new PopupWithImage('.popup_type_large-image');

initialCardsList.createView();
editingProfilePopup.setEventListeners();
additionCardPopup.setEventListeners();
profileFormValidator.enableValidation();
additionCardFormValidator.enableValidation();

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


// const editingButton = document.querySelector('.profile__edit-button');
// const editingProfilePopup = document.querySelector('.popup_type_edit-profile');
// const formElementForEditingProfilePopup = document.querySelector('.popup__form_type_edit-profile');
// const nameInput = document.querySelector('.popup__input_type_name');
// const jobInput = document.querySelector('.popup__input_type_job');
// const profileName = document.querySelector('.profile__name');
// const profileJob = document.querySelector('.profile__job');
// const additionCardButton = document.querySelector('.profile__add-button');
// const additionCardPopup = document.querySelector('.popup_type_add-card');
// const placeNameInput = document.querySelector('.popup__input_type_place-name');
// const placeLinkInput = document.querySelector('.popup__input_type_place-link');
// const formElementForAdditionCardPopup = document.querySelector('.popup__form_type_add-card');
// const cardsContainer = document.querySelector('.elements');
// const largeImagePopup = document.querySelector('.popup_type_large-image');
// const largeImage = largeImagePopup.querySelector('.popup__image');
// const largeImageCaption = largeImagePopup.querySelector('.popup__image-caption');
// const popups = document.querySelectorAll('.popup');

// initialCards.forEach(function (cardData) {
//   createNewCard(cardData);
//   cardsContainer.append(createNewCard(cardData));
// });

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keyup', closePopupOnEsc);
// };

// function initialiseEditingProfilePopup() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// };

// function openEditingProfilePopup(editingProfilePopup) {
//   initialiseEditingProfilePopup();
//   openPopup(editingProfilePopup);
// };

// function openLargeImagePopup(data) {
//   largeImage.src = data.link;
//   largeImage.alt = data.name;
//   largeImageCaption.textContent = data.name;
//   openPopup(largeImagePopup);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keyup', closePopupOnEsc);
// };

// function closePopupOnEsc(e) {
//   if (e.code === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened);
//   }
// };

// function handleSubmitEditingProfile(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(editingProfilePopup);
// }

// function createNewCard(cardData) {
//   const newCard = new Card({
//     cardData,
//     handleCardClick: () => {

//     }
//   },
//     '#element');
//   const createdCard = newCard.getCard();
//   return createdCard;
// };

// function handleSubmitAdditionCard(evt) {
//   evt.preventDefault();
//   const cardData = {
//     name: placeNameInput.value,
//     link: placeLinkInput.value
//   }
//   createNewCard(cardData);
//   cardsContainer.prepend(createNewCard(cardData));
//   closePopup(additionCardPopup);
// }

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (e) => {
//     if (e.target === e.currentTarget || e.target.classList.contains('popup__close-button')) {
//       closePopup(popup);
//     };
//   });
// });

// formElementForEditingProfilePopup.addEventListener('submit', handleSubmitEditingProfile);

// formElementForAdditionCardPopup.addEventListener('submit', handleSubmitAdditionCard);

// initialiseEditingProfilePopup(); // вызов этой функции позволяет делать активной кнопку submit у editingProfilePopup при инициализации скрипта, без него кнопка при первой загрузке неактивна (http://joxi.ru/KAxEbxXcwPzYjr). 
