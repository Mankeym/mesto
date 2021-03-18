export class Card {
    constructor(Mesto,link){
        this._mesto = Mesto
        this._link = link
    }

    _getTemplate(){
        const newItem = document.querySelector('.card-template').cloneNode(true).content
        return newItem
    }

    getItem(){
        this._element = this._getTemplate()
        this._setEventListeners()
        this._element.querySelector('.card__title').textContent = this._mesto;
        this._element.querySelector('.card__logo').src = this._link;
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
        const cardImage = document.querySelector('.popup__picture')
        const cardTitle = document.querySelector('.popup__textpicture')
        const overlayEditPicture = document.querySelector('.overlay_edit-picture')
        overlayEditPicture.classList.add('overlay_active')
        cardImage.src = this._link
        cardTitle.textContent = this._mesto
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