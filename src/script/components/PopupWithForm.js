import {namePicture,jobPicture} from '../../pages/constants.js'
import {Popup} from './Popup.js'
export class PopupWithForm extends Popup {
    constructor(popupSelector,{handleFormSubmit}){
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
    }
    _getInputValues(){
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._values = {};
        this._inputList.forEach(input => this._values[input.name] = input.value);

        return this._value;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            close();
          })
    }
    close() {
        super.close()
        namePicture.value = ''  // я пытался сделать через reset(), но постоянно выдавало ошибку, а сроки поджимают прошу меня простить
        jobPicture.value = '' 
        
    }
}