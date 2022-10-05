export class UserInfo {
    // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    constructor({userNameSelector, userInfoSelector, avatar}) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileInfo = document.querySelector(userInfoSelector);
        this._profileAvatar = avatar;
    }
    
    // Этот метод возвращает объект с данными пользователя, пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
        this._userData = {};
        this._userData.name = this._profileName.textContent;
        this._userData.about = this._profileInfo.textContent;
        return this._userData;
    }

    getProfileId() {
        return this._profileId;
    }

    // Принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, about, avatar, profileId) {
        this._profileName.textContent = name;
        this._profileInfo.textContent = about;
        this._profileAvatar.src = avatar;
        this._profileId = profileId;
    }
        
}