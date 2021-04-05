import './index.css';
import {Card} from '../script/components/Card.js';
import {Section} from '../script/components/Section.js'
import {FormValidator} from '../script/components/FormValidator.js';
import {PopupWithForm} from '../script/components/PopupWithForm.js';
import {PopupWithImage} from '../script/components/PopupWithImage.js'
import {UserInfo} from '../script/components/UserInfo.js'
import * as constants from '../script/utils/constants.js'
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
  items: constants.initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
},
  constants.directorsList);

function openProfileModal() {
  const data = usernew.getUserInfo()
  formAuthor.open();
  constants.nameInput.value = data.username;
  constants.jobInput.value = data.userinfo;
}
function openCardModal() {
  formAddImage.open()
  constants.overlayEdit.querySelector(constants.valid.submitButton).classList.add(constants.valid.submitButtonDisabled)
}
//Изменение данных в попапе с автором
const formAuthor = new PopupWithForm('.profile-popup',
  {
    handleFormSubmit: (data) => {
      console.log(data)
    usernew.setUserInfo(constants.nameInput,constants.jobInput);
    constants.name.value = data.username
    constants.job.value = data.userinfo
    formAuthor.close();
    }
  });

//Добавление карточки в попапе
const formAddImage = new PopupWithForm('.overlay_edit',
  { 
    handleFormSubmit: (data) => {
      console.log(data)
      const newCard ={
        place: data.cardDescription,
        link: data.cardImage
    }
    cardsList.addItem(createCard(newCard))
    formAddImage.close();
    }
  });

  const valAuthorForm = new FormValidator(constants.valid, constants.profilePopup);
  const valImageForm = new FormValidator(constants.valid, constants.form);

  //Добавление карочек при загрузке страницы
  cardsList.renderItems();

  //Изменение данных в попапах
  formAuthor.setEventListeners();
  formAddImage.setEventListeners();


  //Валидация форм
  valAuthorForm.enableValidation();
  valImageForm.enableValidation();

// Открытие попапа для изменения автора
    constants.profilePopupOpenButton.addEventListener('click', openProfileModal)

// Открытие попапа для добавления картинки
    constants.openPicture.addEventListener('click', openCardModal);