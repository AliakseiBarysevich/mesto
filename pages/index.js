// initialCardsArray

const initialCards = [
  {
    name: 'Костел францисканцев в Гольшанах',
    link: 'https://sun9-80.userapi.com/impg/_faCJ7XK-bRu27EgOQnrKbHFPjZcvB1T5xQqYQ/fKaqwx2StF4.jpg?size=960x975&quality=95&sign=44e7eabd677354384ac02c19011b600c&type=album'
  },
  {
    name: 'Троицкий костёл в Гервятах',
    link: 'https://sun9-14.userapi.com/impg/WoEUAH0gyEirnhBdFLCNHH03MPy5hVdH5RTzng/rN9RK3HiQXo.jpg?size=960x1254&quality=95&sign=5e439735d09ea1cea0bfbac547d8baf0&type=album'
  },
  {
    name: 'Синагога в Слониме',
    link: 'https://sun9-35.userapi.com/impg/AzTPexAKn1lM0UYUdM8xQCMCUZbGZYireHD4Pw/W9NEB5PllXc.jpg?size=1280x960&quality=95&sign=cf59eb77044e39062c79982cf46b65f1&type=album'
  },
  {
    name: 'Река Птичь',
    link: 'https://sun9-88.userapi.com/impg/WDmwXUigOwKzspZsiTCfUo7HwDZGaRWkqqHdDw/h5p95qCPCD8.jpg?size=1280x960&quality=95&sign=576e11c173a8c5984276f194c77cacb0&type=album'
  },
  {
    name: 'Часовня-усыпальница рода Рейтанов в Грушевке',
    link: 'https://sun9-45.userapi.com/impg/jz5MU9VuYXRVKj1-vH-sjXhBp0ktUT4G_GcqYw/-nHkGufNQYs.jpg?size=1183x960&quality=95&sign=f5ad84cb6cab10e9f53c0f26df56d12e&type=album'
  },
  {
    name: 'Церковь Святого Архангела Михаила в Сынковичах',
    link: 'https://sun9-78.userapi.com/impg/WM1sTXcenc8O14CMIOjOnblQHD2yFb3Bq4uWUw/HoZUjILWWKs.jpg?size=960x1345&quality=95&sign=da5aa151b02ac5501e0c7c3948774878&type=album'
  }
];


// editButton

const editButton = document.querySelector('.profile__edit-button');
const editButtonPopup = document.querySelector('.popup_type_edit-button');
const formElementForEditButtonPopup = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', function () {
  openPopup(editButtonPopup);
});

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

const closeButtonForEditButtonPopup = document.querySelector('.popup__close-button_type_edit-button');

closeButtonForEditButtonPopup.addEventListener('click', function () {
  closePopup(editButtonPopup);
});

function formSubmitHandlerforEditButtonPopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editButtonPopup);
}

formElementForEditButtonPopup.addEventListener('submit', formSubmitHandlerforEditButtonPopup);

//addButton

const addButton = document.querySelector('.profile__add-button');
const addButtonPopup = document.querySelector('.popup_type_add-button');
const closeButtonForAddButtonPopup = document.querySelector('.popup__close-button_type_add-button');
const placeNameInput = document.querySelector('.popup__input-place-name_type_add-button');
const placeLinkInput = document.querySelector('.popup__input-place-link_type_add-button');
const formElementForAddButton = document.querySelector('.popup__form_type_add-button');

addButton.addEventListener('click', function () {
  openPopup(addButtonPopup)
});

placeNameInput.value = 'Название';
placeLinkInput.value = 'Ссылка на картинку';

closeButtonForAddButtonPopup.addEventListener('click', function () {
  closePopup(addButtonPopup)
});

function FormSubmitHandlerForAddButtonPopup(evt) {
  evt.preventDefault();
  addCard(placeNameInput.value, placeLinkInput.value);
  closePopup(addButtonPopup);
}

formElementForAddButton.addEventListener('submit', FormSubmitHandlerForAddButtonPopup);


//addCard

const elements = document.querySelector('.elements');

function likeCard(likeButton) {
  likeButton.classList.toggle('element__description-like_active');
};

function deleteCard(deleteButton) {
  deleteButton.closest('.element').remove();
};

function addCard(placeNameValue, placeLinkValue) {
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = element.querySelector('.element__image');

  element.querySelector('.element__description-text').textContent = placeNameValue;
  element.querySelector('.element__image').src = placeLinkValue;
  cardImage.alt = placeNameValue;

  const likeButton = element.querySelector('.element__description-like');
  const deleteButton = element.querySelector('.element__delete-button');

  likeButton.addEventListener('click', function () {
    likeCard(likeButton);
  });

  deleteButton.addEventListener('click', function () {
    deleteCard(deleteButton);
  });

  const largeImagePopup = document.querySelector('.popup_type_large-image');
  const largeImage = largeImagePopup.querySelector('.popup__image');
  const largeImageCaption = largeImagePopup.querySelector('.popup__image-caption');
  const closeButtonForLargeImagePopup = largeImagePopup.querySelector('.popup__close-button_type_large-image');

  cardImage.addEventListener('click', function () {
    openPopup(largeImagePopup);
    largeImage.src = placeLinkValue;
    largeImageCaption.textContent = placeNameValue;
  });

  closeButtonForLargeImagePopup.addEventListener('click', function () {
    closePopup(largeImagePopup);
  });

  elements.prepend(element);

  placeNameInput.value = 'Название';
  placeLinkInput.value = 'Ссылка на картинку';
};

//initialCards

initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});