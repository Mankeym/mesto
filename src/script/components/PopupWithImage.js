
import {Popup} from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(name, link, containerSelector) {
    super(containerSelector);
    this._name = name;
    this._link = link;
    }

    open(){
        super.open();
        this._container.querySelector('.popup__textpicture').textContent = this._name;
        this._container.querySelector('.popup__picture').src = this._link;
    }
}