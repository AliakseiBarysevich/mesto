// initialCards

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
    name: 'Часовня-усыпальница рода Рейтанов в Грушевке',
    link: 'https://sun9-45.userapi.com/impg/jz5MU9VuYXRVKj1-vH-sjXhBp0ktUT4G_GcqYw/-nHkGufNQYs.jpg?size=1183x960&quality=95&sign=f5ad84cb6cab10e9f53c0f26df56d12e&type=album'
  },
  {
    name: 'Река Птичь',
    link: 'https://sun9-88.userapi.com/impg/WDmwXUigOwKzspZsiTCfUo7HwDZGaRWkqqHdDw/h5p95qCPCD8.jpg?size=1280x960&quality=95&sign=576e11c173a8c5984276f194c77cacb0&type=album'
  },
  {
    name: 'Синагога в Слониме',
    link: 'https://sun9-35.userapi.com/impg/AzTPexAKn1lM0UYUdM8xQCMCUZbGZYireHD4Pw/W9NEB5PllXc.jpg?size=1280x960&quality=95&sign=cf59eb77044e39062c79982cf46b65f1&type=album'
  },
  {
    name: 'Церковь Святого Архангела Михаила в Сынковичах',
    link: 'https://sun9-78.userapi.com/impg/WM1sTXcenc8O14CMIOjOnblQHD2yFb3Bq4uWUw/HoZUjILWWKs.jpg?size=960x1345&quality=95&sign=da5aa151b02ac5501e0c7c3948774878&type=album'
  }
];

const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

initialCards.forEach(item => {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__description-text').textContent = item.name;
  element.querySelector('.element__image').src = item.link;
  element.querySelector('.element__description-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__description-like_active')
  });
  element.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });



  let popupFullSizePiture = document.querySelector('.popup-full-size-picture');
  
  element.querySelector('.element__image').addEventListener('click', function () {
    popupFullSizePiture.classList.add('popup-full-size-picture_opened');
    popupFullSizePiture.querySelector('.popup-full-size-picture__image').src = item.link;
    popupFullSizePiture.querySelector('.popup-full-size-picture__caption').textContent = item.name;
  });
  
  let closeButtonTypeFullSizePicture = document.querySelector('.popup-full-size-picture__close-button');
  
  closeButtonTypeFullSizePicture.addEventListener('click', function () {
    popupFullSizePiture.classList.remove('popup-full-size-picture_opened');
  });




  elements.append(element);
});

const deleteButton = document.querySelector('.element__delete-button');

deleteButton.addEventListener('click', function () {
  const element = deleteButton.closest('.element');
  element.remove();
});


// editButton

let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

let closeButton = document.querySelector('.popup__close-button');

closeButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

// addButton

let addButton = document.querySelector('.profile__add-button');
let addButtonPopup = document.querySelector('.popup-add-button');
let placeNameInput = document.querySelector('.popup-add-button__input_type_place-name');
let placeLinkInput = document.querySelector('.popup-add-button__input_type_place-link');

addButton.addEventListener('click', function () {
  addButtonPopup.classList.add('popup-add-button_opened');
  placeNameInput.value = 'Название';
  placeLinkInput.value = 'Ссылка на картинку';
});

let closeButtonTypeAddButton = document.querySelector('.popup-add-button__close-button');

closeButtonTypeAddButton.addEventListener('click', function () {
  addButtonPopup.classList.remove('popup-add-button_opened');
});

let formElementTypeAddButton = document.querySelector('.popup-add-button__form');

function addButtonFormSubmitHandler(evt) {
  evt.preventDefault();
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__description-text').textContent = placeNameInput.value;
  element.querySelector('.element__image').src = placeLinkInput.value;

//
  element.querySelector('.element__description-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__description-like_active')
  });
  element.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });



  let popupFullSizePiture = document.querySelector('.popup-full-size-picture');
  
  element.querySelector('.element__image').addEventListener('click', function () {
    popupFullSizePiture.classList.add('popup-full-size-picture_opened');
    popupFullSizePiture.querySelector('.popup-full-size-picture__image').src = item.link;
    popupFullSizePiture.querySelector('.popup-full-size-picture__caption').textContent = item.name;
  });
  
  let closeButtonTypeFullSizePicture = document.querySelector('.popup-full-size-picture__close-button');
  
  closeButtonTypeFullSizePicture.addEventListener('click', function () {
    popupFullSizePiture.classList.remove('popup-full-size-picture_opened');
  });
//


  elements.prepend(element);
  addButtonPopup.classList.remove('popup_opened');
}

formElementTypeAddButton.addEventListener('submit', addButtonFormSubmitHandler);

// deleteButton
/*
const deleteButton = document.querySelector('.element__delete-button');

deleteButton.addEventListener('click', function () {
  const element = deleteButton.closest('.element');
  element.remove();
});
*/
// fullSizePicture
/*
let image = document.querySelector('.element__image');
let popupFullSizePiture = document.querySelector('.popup-full-size-picture');

image.addEventListener('click', function () {
  popupFullSizePiture.classList.add('popup-full-size-picture_opened');
});

let closeButtonTypeFullSizePicture = document.querySelector('.popup-full-size-picture__close-button');

closeButtonTypeFullSizePicture.addEventListener('click', function () {
  popupFullSizePiture.classList.remove('popup-full-size-picture_opened');
});*/