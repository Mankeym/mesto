import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector,{handleFormSubmit}){
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
    }
    _getInputValues(){
        this._inputList = this._container.querySelectorAll('.popup__input');
        this._value = {};
        this._inputList.forEach(input => this._value[input.name] = input.value);

        return this._value;
    }

    setEventListeners(){
        super.setEventListeners();
        this._container.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            super.close();
          })
    }

}