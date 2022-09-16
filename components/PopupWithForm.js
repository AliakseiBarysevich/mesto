// ці трэба мне сюды імпартаваць клас Popup, які я наследую?
import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    // Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this.popupForm = this._popup.querySelector('.popup__form'); //як мне тут звяртацца да this._popup, які ёсць у класе Popup?
    };

    // собирает данные всех полей формы
    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._popup.querySelectorAll('.form__input');

        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }

    // //Перезаписывает родительский метод setEventListeners.
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
    // но и добавлять обработчик сабмита формы.
    setEventListeners() {
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();

            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._handleFormSubmit(this._getInputValues());
        })
        super.setEventListeners();
    };

    // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        this.popupForm.reset();
        super.close();
    }

}