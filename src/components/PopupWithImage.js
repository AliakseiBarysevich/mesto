// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupLargeImage = this._popup.querySelector('.popup__image');
        this._popupLargeImageCaption = this._popup.querySelector('.popup__image-caption');
    }
    open(data) {
        this._popupLargeImageCaption.alt = data.name;
        this._popupLargeImageCaption.textContent = data.name;
        this._popupLargeImage.src = data.link;
        super.open();
    }
};