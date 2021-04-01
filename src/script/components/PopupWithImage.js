import {cardImage, cardTitle} from '../../index.js';
import {Popup} from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(name, link, containerSelector) {
    super(containerSelector);
    this._name = name;
    this._link = link;
    }

    open(){
        console.log(cardTitle)
        super.open();
        cardTitle.textContent = this._name;
        cardImage.src = this._link;
    }
}