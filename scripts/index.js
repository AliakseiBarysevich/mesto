const editingButton = document.querySelector('.profile__edit-button');
const editingProfilePopup = document.querySelector('.popup_type_edit-profile');
const formElementForEditingProfilePopup = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const additionCardButton = document.querySelector('.profile__add-button');
const additionCardPopup = document.querySelector('.popup_type_add-card');
const placeNameInput = document.querySelector('.popup__input_type_place-name');
const placeLinkInput = document.querySelector('.popup__input_type_place-link');
const formElementForAdditionCardPopup = document.querySelector('.popup__form_type_add-card');
const additionCardPopupSubmitButton = additionCardPopup.querySelector('.popup__submit-button');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content;
const card = cardTemplate.querySelector('.element');
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

function openLargeImagePopup(cardData) {
  largeImage.src = cardData.link;
  largeImage.alt = cardData.name;
  largeImageCaption.textContent = cardData.name;
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

function handleSubmitAdditionCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  }
  const newCard = createNewCard(cardData);
  cardsContainer.prepend(newCard);
  closePopup(additionCardPopup);
}

function likeCard(likeButton) {
  likeButton.classList.toggle('element__description-like_active');
};

function deleteCard(cardToBeDeleted) {
  cardToBeDeleted.remove();
};

function createNewCard(cardData) {
  const newCard = card.cloneNode(true);
  const cardImage = newCard.querySelector('.element__image');

  newCard.querySelector('.element__description-text').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const likeButton = newCard.querySelector('.element__description-like');
  const deleteButton = newCard.querySelector('.element__delete-button');

  likeButton.addEventListener('click', function () {
    likeCard(likeButton);
  });

  deleteButton.addEventListener('click', function () {
    deleteCard(newCard);
  });

  cardImage.addEventListener('click', function () {
    openLargeImagePopup(cardData);
  });

  return newCard;
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

editingButton.addEventListener('click', function () {
  openEditingProfilePopup(editingProfilePopup);
});

formElementForEditingProfilePopup.addEventListener('submit', handleSubmitEditingProfile);

additionCardButton.addEventListener('click', function () {
  formElementForAdditionCardPopup.reset();
  additionCardPopupSubmitButton.classList.add('popup__submit-button_disabled');
  additionCardPopupSubmitButton.setAttribute('disabled', true);
  openPopup(additionCardPopup);
});

formElementForAdditionCardPopup.addEventListener('submit', handleSubmitAdditionCard);

initialCards.forEach(function (item) {
  const newCard = createNewCard(item);
  cardsContainer.append(newCard);
});

initialiseEditingProfilePopup();