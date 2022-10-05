import './index.css';
import { UserInfo } from '../components/UserInfo.js';
import { validationSettings, editingButton, additionCardButton, profileAvatar, editingAvatarButton, serverInteractionConfig } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

const api = new Api(serverInteractionConfig);

const currentUserInfo = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__job', avatar: profileAvatar });

const confirmingDeletionPopup = new PopupWithConfirmation('.popup_type_confirm-deletion');

const cardsSection = new Section({
  renderer: (cardData) => {
    cardsSection.addItem(createCard(cardData));
  }
},
  '.elements');

Promise.all([
  api.loadUserInfoFromServer(),
  api.getCards()
])
  .then((data) => {
    const [userData, cardData] = data;
    currentUserInfo.setUserInfo(userData.name, userData.about, userData.avatar, userData._id);
    cardsSection.createView(cardData);
  })
  .catch((err) => {
    console.log(err);
  })

const updatingAvatarPopup = new PopupWithForm('.popup_type_edit-avatar', {
  handleFormSubmit: ({ avatar }) => {
    updatingAvatarPopup.loading(true);
    api.editAvatar({ avatar: avatar })
      .then((res) => {
        currentUserInfo.setUserInfo(res.name, res.about, res.avatar, res._id);
      })
      .catch((err) => {
        console.log('Ошибка редактирования данных профиля', err);
      })
      .finally(() => {
        updatingAvatarPopup.loading(false);
      });
    updatingAvatarPopup.close();
  }
});

const updatingAvatarFormValidator = new FormValidator(validationSettings, updatingAvatarPopup.popupForm);

const editingProfilePopup = new PopupWithForm('.popup_type_edit-profile', {
  handleFormSubmit: ({ name, about }) => {
    editingProfilePopup.loading(true);
    api.updateUserInfo({ name: name, about: about })
      .then((res) => {
        currentUserInfo.setUserInfo(res.name, res.about, res.avatar, res._id);
      })
      .catch((err) => {
        console.log('Ошибка редактирования данных профиля', err);
      })
      .finally(() => {
        editingProfilePopup.loading(false);
      });
    editingProfilePopup.close();
  }
});

const profileFormValidator = new FormValidator(validationSettings, editingProfilePopup.popupForm);

const additionCardPopup = new PopupWithForm('.popup_type_add-card', {
  handleFormSubmit: (cardData) => {
    additionCardPopup.loading(true);
    api.addNewCard(cardData)
      .then((cardDataFromServer) => {
        cardsSection.addItem(createCard(cardDataFromServer));
      })
      .catch((err) => {
        console.log('Ошибка создания карточки', err);
      })
      .finally(() => {
        additionCardPopup.close();
        additionCardPopup.loading(false);
      });
  }
});

const additionCardFormValidator = new FormValidator(validationSettings, additionCardPopup.popupForm);

const largeImagePopup = new PopupWithImage('.popup_type_large-image');

function createCard(cardData) {
  const card = new Card({
    data: cardData,
    handleCardClick: (cardData) => {
      largeImagePopup.open(cardData);
    },
    handleLikeClick: (card) => {
      if (card.isLiked()) {
        api.removeLike(card.getCardId())
          .then((data) => {
            card.setLikesInfo(data);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.likeCard(card.getCardId())
          .then((data) => {
            card.setLikesInfo(data);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    handleDeleteIconClick: (card) => {
      confirmingDeletionPopup.open();
      confirmingDeletionPopup.handleSubmit(() => {
        confirmingDeletionPopup.loading(true);
        api.deleteCard(card.getCardId())
          .then(() => {
            card.deleteCard();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            confirmingDeletionPopup.close();
            confirmingDeletionPopup.loading(false);
          })
      })

    }
  },
    currentUserInfo.getProfileId(),
    '#element');
  const cardRendered = card.getCard();
  return cardRendered;
};

confirmingDeletionPopup.setEventListeners();
updatingAvatarPopup.setEventListeners();
editingProfilePopup.setEventListeners();
additionCardPopup.setEventListeners();
updatingAvatarFormValidator.enableValidation();
profileFormValidator.enableValidation();
profileFormValidator.enableSubmitButton();
additionCardFormValidator.enableValidation();
largeImagePopup.setEventListeners();

editingAvatarButton.addEventListener('click', () => {
  updatingAvatarPopup.open();
});

editingButton.addEventListener('click', () => {
  const userData = currentUserInfo.getUserInfo();
  editingProfilePopup.setInputValues(userData);
  editingProfilePopup.open();
});

additionCardButton.addEventListener('click', function () {
  additionCardFormValidator.disableSubmitButton();
  additionCardPopup.open();
});