// отвечает за управление отображением информации о пользователе на странице.
export class UserInfo {
    // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    constructor({userNameSelector, userInfoSelector}) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileInfo = document.querySelector(userInfoSelector);
    }
    
    // который возвращает объект с данными пользователя.
    // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
        this._userData = {};
        this._userData.name = this._profileName.textContent;
        this._userData.info = this._profileInfo.textContent;
        return this._userData;
    }

    // который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(userData) {
        this._profileName.textContent = userData.name;
        this._profileInfo.textContent = userData.info;
    }
        
}