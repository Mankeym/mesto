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
export const overlayEditPicture = document.querySelector('.overlay_edit-picture')
export const cardImage = document.querySelector('.popup__picture')
export const cardTitle = document.querySelector('.popup__textpicture')
export const cardTemplate = document.querySelector('.card-template').content.querySelector('.card')
const imageCloseButton = document.querySelector('.overlay__button_edit-picture')
const initialCards = [
    {
      place: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      place: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      place: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      place: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      place: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      place: 'Байкал',
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
const valImageForm = new FormValidator(valid, form);
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
    closePopup(evt.target);
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
imageCloseButton.addEventListener('click', () =>{
  closePopup(overlayEditPicture)
})
function handleAdd() {
  const inputText = namePicture.value;
  const inputLink = jobPicture.value;
  const createCard = new Card(inputText,inputLink,cardTemplate)
  const cardActivate = createCard.getItem()
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
export function openPopup(popup){
  popup.classList.add('overlay_active')
  document.addEventListener('click', closeByOverlay);
  document.addEventListener('keydown', handleESCpress); 
}
export function closePopup(popup){
  popup.classList.remove('overlay_active')
  document.removeEventListener('click', closeByOverlay);
  document.removeEventListener('keydown', handleESCpress); 
}
initialCards.forEach((item) => {
  const createCard = new Card(item.place, item.link,cardTemplate);
  const newCard = createCard.getItem();
  directorsList.append(newCard);
}); 
valAuthorForm.enableValidation();
valImageForm.enableValidation();