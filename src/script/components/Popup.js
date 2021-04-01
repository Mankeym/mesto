import {overlayImageCloseButton,profileCloseButton,overlay} from '../../index.js'
export class Popup {
    constructor(popupSelector){
        this._container = popupSelector
    }
    open(){
        this._container.classList.add('overlay_active')
    }
    close(){
        this._container.classList.remove('overlay_active')
    }
    _handleEscClose(){
        if (evt.key === 'Escape') {
            const clickEsc = new Popup(document.querySelector('.overlay_active'))
            clickEsc.close()
          };
    }
    _closeByOverlay (evt) {
        if(evt.target.classList.contains('overlay')){
            const clickOverlay = new Popup(document.querySelector('.overlay_active'));
            clickOverlay.close();
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