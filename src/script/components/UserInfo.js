import {nameInput,jobInput} from '../../pages/constants.js'
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
        this._author.textContent = nameInput.value
        this._profession.textContent = jobInput.value;
    }
}