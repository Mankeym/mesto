import {closePopup, openPopup,overlayEditPicture,cardImage,cardTitle} from './index.js'
export class Card {
    constructor(place,link,cardTemplate){
        this._place = place
        this._link = link
        this._cardTemplate = cardTemplate;
    }

    getItem(){
        this._element = this._cardTemplate.cloneNode(true);
        this._setEventListeners()
        this._element.querySelector('.card__title').textContent = this._place;
        this._element.querySelector('.card__logo').src = this._link;
        this._element.querySelector('.card__logo').alt = this._name;
        
        return this._element;
    }
    _setEventListeners(){
        const deleteTrash = this._element.querySelector('.card__trash')
        deleteTrash.addEventListener('click',(event)=> {
            this._handleDelete(event)
        })
        this._element.querySelector('.card__button').addEventListener('click', (item) => {
            this._likeHeart(item)
        })
        this._element.querySelector('.card__logo').addEventListener('click', () => {
            this._clickLogo()
        })
    }
    _clickLogo(){
        openPopup(overlayEditPicture)
        cardImage.src = this._link
        cardTitle.textContent = this._place
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