import {overlayEditPicture,imageCloseButton} from '../../pages/index.js';
import {Popup} from './Popup.js';
export class Card {
    constructor(place,link,cardTemplate,handleCardClick){
        this._place = place
        this._link = link
        this._cardTemplate = cardTemplate;
        this._handleCardClick = handleCardClick;
    }

    getItem(){
        this._element = this._cardTemplate.cloneNode(true);
        this._element.querySelector('.card__title').textContent = this._place;
        this._element.querySelector('.card__logo').src = this._link;
        this._element.querySelector('.card__logo').alt = this._name;
        this._setEventListeners()
        return this._element;
    }
    _openOverlayImage(){
        this._handleCardClick();
    }
    _closeOverlayImage(){
        const popup = new Popup(overlayEditPicture);
        popup.close();
    }
    _setEventListeners(){
        const deleteTrash = this._element.querySelector('.card__trash')
        deleteTrash.addEventListener('click',(event)=> {
            this._handleDelete(event)
        })
        const cardLogo = this._element.querySelector('.card__logo')
        cardLogo.addEventListener('click', () =>{
            this._openOverlayImage()
        })
        imageCloseButton.addEventListener('click',() =>{
            this._closeOverlayImage()
        })
        this._element.querySelector('.card__button').addEventListener('click', (item) => {
            this._likeHeart(item)
        })
    }
    _handleDelete(event){
        const targetEl = event.target;
        const targetItem = targetEl.closest('.card');
        targetItem.remove();
    }
    _likeHeart(item){
        item.target.classList.toggle('card__button_active')
    }   
}