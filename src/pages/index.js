import './index.css';
import {Card} from '../script/components/Card.js';
import {Section} from '../script/components/Section.js'
import {FormValidator} from '../script/components/FormValidator.js';
import {PopupWithForm} from '../script/components/PopupWithForm.js';
import {PopupWithImage} from '../script/components/PopupWithImage.js'
import {UserInfo} from '../script/components/UserInfo.js'
const profilePopupOpenButton = document.querySelector('.profile__rectangle')
const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const form = document.querySelector('.popup__form_edit')
const openPicture = document.querySelector('.profile__button')
const namePicture = document.querySelector('.popup__input_type_mesto')
const jobPicture = document.querySelector('.popup__input_type_link')
const directorsList = document.querySelector('.cards');
const overlayEdit = document.querySelector('.overlay_edit')
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
const openLargeImage = new PopupWithImage('.overlay_edit-picture');
openLargeImage.setEventListeners()
function createCard(item) {
  const card = new Card(item, '.card-template', () => {
    openLargeImage.open(item.link, item.place);
  });
  return card.getItem();
}
const usernew = new UserInfo ({usernameSelector: '.profile__title', userinfoSelector: '.profile__subtitle'});
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
},
  directorsList);

function openProfileModal() {
  const data = usernew.getUserInfo()
  formAuthor.open();
  nameInput.value = data.username;
  jobInput.value = data.userinfo;
}
function openCardModal() {
  formAddImage.open()
  overlayEdit.querySelector(valid.submitButton).classList.add(valid.submitButtonDisabled)
}
//Изменение данных в попапе с автором
const formAuthor = new PopupWithForm('.profile-popup',
  {
    handleFormSubmit: (data) => {
    usernew.setUserInfo(data);
    formAuthor.close();
    }
  });

//Добавление карточки в попапе
const formAddImage = new PopupWithForm('.overlay_edit',
  { 
    handleFormSubmit: () => {
      const newCard ={
        place: namePicture.value,
        link: jobPicture.value
    }
    cardsList.addItem(createCard(newCard))
    formAddImage.close();
    }
  });

  const valAuthorForm = new FormValidator(valid, profilePopup);
  const valImageForm = new FormValidator(valid, form);

  //Добавление карочек при загрузке страницы
  cardsList.renderItems();

  //Изменение данных в попапах
  formAuthor.setEventListeners();
  formAddImage.setEventListeners();


  //Валидация форм
  valAuthorForm.enableValidation();
  valImageForm.enableValidation();

// Открытие попапа для изменения автора
    profilePopupOpenButton.addEventListener('click', openProfileModal)

// Открытие попапа для добавления картинки
    openPicture.addEventListener('click', openCardModal);