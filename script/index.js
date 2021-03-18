import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
const profilePopupOpenButton = document.querySelector('.profile__rectangle')
const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const name = document.querySelector('.profile__title')
const job = document.querySelector('.profile__subtitle')
const profileCloseButton = document.querySelector('.overlay__button')
const formFirstElement = document.querySelector('.popup__form')
const form = document.querySelector('.popup__form_edit')
const openPicture = document.querySelector('.profile__button')
const closePicture = document.querySelector('.overlay__button_edit')
const namePicture = document.querySelector('.popup__input_type_mesto')
const jobPicture = document.querySelector('.popup__input_type_link')
const directorsList = document.querySelector('.cards');
const overlayEdit = document.querySelector('.overlay_edit')
const overlayEditPicture = document.querySelector('.overlay_edit-picture')
const buttonEdit = document.querySelector('.overlay__button_edit-picture')
const initialCards = [
    {
      Mesto: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      Mesto: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      Mesto: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      Mesto: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      Mesto: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      Mesto: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  const valid = {
    popupForm:'.popup__form',
    inputSelector:'.popup__input',
    submitButton:'.popup__submit',
    submitButtonDisabled:'popup__submit_disabled',
    inputErrorCon:'popup__input_type_error',
    errorVis: 'popup__error_visible'
}
const valAuthorForm = new FormValidator(valid, profilePopup);
const valAuthoForm = new FormValidator(valid, formFirstElement);
profilePopupOpenButton.addEventListener('click', () =>{
  nameInput.value = name.textContent
  jobInput.value = job.textContent
  openPopup(profilePopup)
  const inputList = Array.from(profilePopup.querySelectorAll(valid.inputSelector));
  const buttonElement = profilePopup.querySelector(valid.submitButton);
  valAuthorForm.validatePopupOnOpen(inputList,buttonElement);
})
profileCloseButton.addEventListener('click', () =>{
  closePopup(profilePopup)
})
function handleESCpress (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.overlay_active'));
  };
}
function closeByOverlay (evt) {
  if(evt.target.classList.contains('overlay')){
    closePopup(document.querySelector('.overlay_active'));
  }
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
    // Находим поля формы в DOM
    // Получите значение полей из свойства value
    name.textContent = nameInput.value
    job.textContent = jobInput.value
    // Выберите элементы, куда должны быть вставлены значения полей
    closePopup(profilePopup)
    
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formFirstElement.addEventListener('submit', handleProfileSubmit)
openPicture.addEventListener('click', () =>{
  openPopup(overlayEdit)
  const inputList = Array.from(overlayEdit.querySelectorAll('.popup__input'));
  const buttonElement = overlayEdit.querySelector('.popup__submit');
  valAuthorForm.validatePopupOnOpen(inputList,buttonElement);
})
closePicture.addEventListener('click', () =>{
  closePopup(overlayEdit)
})
buttonEdit.addEventListener('click', () =>{
  closePopup(overlayEditPicture)
})
function handleAdd() {
  const inputText = namePicture.value;
  const inputLink = jobPicture.value;
  const card = new Card(inputText,inputLink)
  const cardActivate = card.getItem()
  directorsList.prepend(cardActivate);
  namePicture.value = ''
  jobPicture.value = ''
  
}
function renderImage(evt){
  evt.preventDefault()
  handleAdd()
  closePopup(overlayEdit)
}
form.addEventListener('submit', renderImage)
function openPopup(popup){
  popup.classList.add('overlay_active')
  document.addEventListener('click', closeByOverlay);
  document.addEventListener('keydown', handleESCpress); 
}
function closePopup(popup){
  popup.classList.remove('overlay_active')
  document.removeEventListener('click', closeByOverlay);
  document.removeEventListener('keydown', handleESCpress); 
}
initialCards.forEach((item) => {
  const card = new Card(item.Mesto, item.link);
  const newCard = card.getItem();
  directorsList.append(newCard);
}); 
valAuthorForm.enableValidation();