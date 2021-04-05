
export class UserInfo {
    constructor({usernameSelector, userinfoSelector}) {
        this._author = document.querySelector(usernameSelector);
        this._profession = document.querySelector(userinfoSelector);
    }

    getUserInfo(){
        this._userData = {
            username: this._author.textContent,
            userinfo: this._profession.textContent
        };
        return this._userData
    }

    setUserInfo(){
        const nameInput = document.querySelector('.popup__input_type_name')
        const jobInput = document.querySelector('.popup__input_type_job')
        this._author.textContent = nameInput.value
        this._profession.textContent = jobInput.value;
    }
}