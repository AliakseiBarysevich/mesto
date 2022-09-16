export const editingButton = document.querySelector('.profile__edit-button');
export const nameInput = document.querySelector('.popup__input_type_name');
export const infoInput = document.querySelector('.popup__input_type_job');
export const additionCardButton = document.querySelector('.profile__add-button');
// export const editingProfilePopup = document.querySelector('.popup_type_edit-profile');
// export const formElementForEditingProfilePopup = document.querySelector('.popup__form_type_edit-profile');
// export const profileName = document.querySelector('.profile__name');
// export const profileJob = document.querySelector('.profile__job');
// export const additionCardPopup = document.querySelector('.popup_type_add-card');
// export const placeNameInput = document.querySelector('.popup__input_type_place-name');
// export const placeLinkInput = document.querySelector('.popup__input_type_place-link');
// export const formElementForAdditionCardPopup = document.querySelector('.popup__form_type_add-card');
// export const cardsContainer = document.querySelector('.elements');
// export const largeImagePopup = document.querySelector('.popup_type_large-image');
// export const largeImage = largeImagePopup.querySelector('.popup__image');
// export const largeImageCaption = largeImagePopup.querySelector('.popup__image-caption');
// export const popups = document.querySelectorAll('.popup');

export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export const initialCards = [
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