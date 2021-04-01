import {overlayImageCloseButton,profileCloseButton,overlay} from '../../pages/index.js'
export class Popup {
    constructor(popupSelector){
        this._container = popupSelector
        this._handleEscCl = this._handleEscClose.bind(this);
        this._closeByOver = this._closeByOverlay.bind(this);
    }
    open(){
        this._container.classList.add('overlay_active')
        document.addEventListener('keydown', this._handleEscCl);
        this._container.addEventListener('click', this._closeByOver);
    }
    close(){
        this._container.classList.remove('overlay_active')
        document.removeEventListener('keydown', this._handleEscCl);
        this._container.removeEventListener('click', this._closeByOver);
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
        const popupSetEvent = new Popup (overlay)
        profileCloseButton.addEventListener('click', () => {
            this.close(popupSetEvent);
        })
        overlayImageCloseButton.addEventListener('click', () => {
            this.close(popupSetEvent)
        })
    }
}