import {overlayImageCloseButton,profileCloseButton,imageCloseButton} from '../../pages/constants.js'
export class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector)
        this._handleEscCl = this._handleEscClose.bind(this);
        this._closeByOver = this._closeByOverlay.bind(this);
    }
    open(){
        this._popup.classList.add('overlay_active')
        document.addEventListener('keydown', this._handleEscCl);
        this._popup.addEventListener('click', this._closeByOver);
    }
    close(){
        this._popup.classList.remove('overlay_active')
        document.removeEventListener('keydown', this._handleEscCl);
        this._popup.removeEventListener('click', this._closeByOver);
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
        profileCloseButton.addEventListener('click', () => {
            this.close();
        })
        overlayImageCloseButton.addEventListener('click', () => {
            this.close()
        })
        imageCloseButton.addEventListener('click', () =>{
            this.close()
        })
        
    }
}