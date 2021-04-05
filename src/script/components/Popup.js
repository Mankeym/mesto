export class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector)
        this._handleEscCl = this._handleEscClose.bind(this);
    }
    open(){
        this._popup.classList.add('overlay_active')
        document.addEventListener('keydown', this._handleEscCl);
    }
    close(){
        this._popup.classList.remove('overlay_active')
        document.removeEventListener('keydown', this._handleEscCl);
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close()
          };
    }
    _closeByOverlay (evt) {
        if(evt.target.classList.contains('overlay')){
            this.close();
        }
      }
    setEventListeners(){
        const closeProfile = document.querySelector('.overlay__button-profile')
        closeProfile.addEventListener('click', () =>{
            this.close()
        })
        const closeAddImage = document.querySelector('.overlay__button_edit')
        closeAddImage.addEventListener('click', () =>{
            this.close()
        })
        const closePicture = document.querySelector('.overlay__button_edit-picture')
        closePicture.addEventListener('click', () =>{
            this.close()
        })
    }
}