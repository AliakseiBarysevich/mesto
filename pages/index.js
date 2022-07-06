const editButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const closeButtonForEditProfilePopup = document.querySelector('.popup__close-button_type_edit-profile');
const formElementForEditProfilePopup = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_add-card');
const closeButtonForAddCardPopup = document.querySelector('.popup__close-button_type_add-card');
const placeNameInput = document.querySelector('.popup__input_type_place-name');
const placeLinkInput = document.querySelector('.popup__input_type_place-link');
const formElementForAddCardPopup = document.querySelector('.popup__form_type_add-card');
const cardsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;
const element = elementTemplate.querySelector('.element');
const largeImagePopup = document.querySelector('.popup_type_large-image');
const largeImage = largeImagePopup.querySelector('.popup__image');
const largeImageCaption = largeImagePopup.querySelector('.popup__image-caption');
const closeButtonForLargeImagePopup = largeImagePopup.querySelector('.popup__close-button_type_large-image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function openLargeImagePopup(cardData) {
  largeImage.src = cardData.link;
  largeImageCaption.textContent = cardData.name;
  openPopup(largeImagePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function handleFormSubmitForEditProfilePopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function handleFormSubmitForAddCardPopup(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  }
  const newCard = createNewCard(cardData);
  cardsContainer.prepend(newCard);
  closePopup(addCardPopup);
}

function likeCard(likeButton) {
  likeButton.classList.toggle('element__description-like_active');
};

function deleteCard(elementToBeDeleted) {
  elementToBeDeleted.remove();
};

function createNewCard(cardData) {
  const newCard = element.cloneNode(true);
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

editButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;

  jobInput.value = profileJob.textContent;
  openPopup(editProfilePopup);
});

closeButtonForEditProfilePopup.addEventListener('click', function () {
  closePopup(editProfilePopup);
});

formElementForEditProfilePopup.addEventListener('submit', handleFormSubmitForEditProfilePopup);

addCardButton.addEventListener('click', function () {
  openPopup(addCardPopup)
});

closeButtonForAddCardPopup.addEventListener('click', function () {
  closePopup(addCardPopup)
});

formElementForAddCardPopup.addEventListener('submit', handleFormSubmitForAddCardPopup);

closeButtonForLargeImagePopup.addEventListener('click', function () {
  closePopup(largeImagePopup);
});

initialCards.forEach(function (item) {
  const newCard = createNewCard(item);
  cardsContainer.append(newCard);
});