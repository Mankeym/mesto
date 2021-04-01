import './pages/index.css';
import {Popup} from './script/components/Popup.js'
import {Card} from './script/components/Card.js';
import {Section} from './script/components/Section.js'
import {FormValidator} from './script/components/FormValidator.js';
import {PopupWithForm} from './script/components/PopupWithForm.js';
import {PopupWithImage} from './script/components/PopupWithImage.js'
import {UserInfo} from './script/components/UserInfo.js'
export const overlayActive = document.querySelector('.overlay_active')
export const overlay = document.querySelectorAll('.overlay')
const profilePopupOpenButton = document.querySelector('.profile__rectangle')
const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const name = document.querySelector('.profile__title')
const job = document.querySelector('.profile__subtitle')
export const profileCloseButton = document.querySelector('.overlay__button')
const formFirstElement = document.querySelector('.popup__form')
const form = document.querySelector('.popup__form_edit')
const openPicture = document.querySelector('.profile__button')
const closePicture = document.querySelector('.overlay__button_edit')
const namePicture = document.querySelector('.popup__input_type_mesto')
const jobPicture = document.querySelector('.popup__input_type_link')
const directorsList = document.querySelector('.cards');
const popupForm = document.querySelector('.popup')
const overlayEdit = document.querySelector('.overlay_edit')
const submitButton = document.querySelector('.popup__sumbit')
export const overlayEditPicture = document.querySelector('.overlay_edit-picture')
export const cardImage = document.querySelector('.popup__picture')
export const cardTitle = document.querySelector('.popup__textpicture')
export const cardTemplate = document.querySelector('.card-template').content.querySelector('.card')
export const overlayImageCloseButton = document.querySelector('.overlay__button_edit')
export const lilImage = document.querySelector('.card__logo')
export const textCard = document.querySelector('.card__title')
export const imageCloseButton = document.querySelector('.overlay__button_edit-picture')
const popupAuthor = new Popup(profilePopup); 
const popupAddImage = new Popup(overlayEdit);
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

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
  const openOverlayImage = new PopupWithImage(item.place, item.link, overlayEditPicture);
  console.log(item.place)
  const card = new Card(item.place, item.link, cardTemplate, () => openOverlayImage.open());
  const newCard = card.getItem();
  cardsList.addItem(newCard);
  },
},
  directorsList);

//Изменение данных в попапе с автором
const formAuthor = new PopupWithForm(profilePopup,
  {
    handleFormSubmit: () => {
    const usernew = new UserInfo (name, job, nameInput, jobInput);
    usernew.setUserInfo();
    const popup = new Popup(profilePopup);
    popup.close();
    }
  });

//Добавление карточки в попапе
const formAddImage = new PopupWithForm(overlayEdit,
  {
    handleFormSubmit: () => {
    const inputText = namePicture.value;
    const inputLink = jobPicture.value;
    const openLargeImage = new PopupWithImage(inputText,inputLink, lilImage);
    const createCard = new Card(inputText,inputLink,cardTemplate, () => openLargeImage.open())
    const cardActivate = createCard.getItem()
    directorsList.prepend(cardActivate);
    const popup = new Popup(overlayEdit);
    popup.close();
    }
  });

  const valAuthorForm = new FormValidator(valid, profilePopup);
  const valImageForm = new FormValidator(valid, form);

  //Добавление карочек при загрузке страницы
  cardsList.renderItems();

  //Изменение данных в попапах
  formAuthor.setEventListeners();
  formAddImage.setEventListeners();

  //Слушатель клика иконке закрытия попапа
  popupAuthor.setEventListeners();    
  popupAddImage.setEventListeners();

  //Валидация форм
  valAuthorForm.enableValidation();
  valImageForm.enableValidation();

// Открытие попапа для изменения автора
    profilePopupOpenButton.addEventListener('click', () => {
    const user = new UserInfo (name, job, nameInput, jobInput);
    user.getUserInfo();
    const popup = new Popup(profilePopup);
    popup.open()
  });

// Открытие попапа для добавления картинки
    openPicture.addEventListener('click', () => {
    const popup = new Popup(overlayEdit);
    popup.open();
    overlayEdit.querySelector(valid.submitButton).classList.add(valid.submitButtonDisabled)
  });

valAuthorForm.enableValidation();
valImageForm.enableValidation();