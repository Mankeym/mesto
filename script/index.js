const openButton = document.querySelector('.profile__rectangle')
const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const name = document.querySelector('.profile__title')
const job = document.querySelector('.profile__subtitle')
const closeOverlay = document.querySelector('.overlay__button')
const formElement = document.querySelector('.popup__form')
const form = document.querySelector('.popup__form_edit')
const openPicture = document.querySelector('.profile__button')
const closePicture = document.querySelector('.overlay__button_edit')
const cardContent = document.querySelector('.card-template');
const namePicture = document.querySelector('.popup__input_type_mesto')
const jobPicture = document.querySelector('.popup__input_type_link')
const directorsList = document.querySelector('.cards');
const templateEl = document.querySelector('.card-template');
const overlayEdit = document.querySelector('.overlay_edit')
const overlayEditPicture = document.querySelector('.overlay_edit-picture')
const buttonEdit = document.querySelector('.overlay__button_edit-picture')
const pictureBig = document.querySelector('.popup__picture')
const textPicture = document.querySelector('.popup__textpicture')
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
openButton.addEventListener('click', () =>{
  nameInput.value = name.textContent
  jobInput.value = job.textContent
  openPopup(profilePopup)
})
closeOverlay.addEventListener('click', () =>{
  closePopup(profilePopup)
})

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
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
formElement.addEventListener('submit', handleFormSubmit)
openPicture.addEventListener('click', () =>{
  openPopup(overlayEdit)
})
closePicture.addEventListener('click', () =>{
  closePopup(overlayEdit)
})
function render() {
  const html = initialCards
      .map(getItem)

  directorsList.append(...html);
}
// Создание карточки
function getItem(item) {
  const newItem = cardContent.cloneNode(true).content
  const headerEl = newItem.querySelector('.card__title');
  headerEl.textContent = item.Mesto;
  const head = newItem.querySelector('.card__logo')
  head.src = item.link
  const removeBtn = newItem.querySelector('.card__trash');
  removeBtn.addEventListener('click', handleDelete);
  const likeBtn = newItem.querySelector('.card__button')
  likeBtn.addEventListener('click', likeHeart)
  head.addEventListener('click', () =>{
    pictureBig.src = head.src
    textPicture.textContent = headerEl.textContent
    openPopup(overlayEditPicture)
  })
  buttonEdit.addEventListener('click', () =>{
      closePopup(overlayEditPicture)
  })
  return newItem;
}
// Добавляем карточку
function handleAdd() {
  const inputText = namePicture.value;
  const inputLink = jobPicture.value;
  const listItem = getItem({Mesto: inputText, link: inputLink});
  directorsList.prepend(listItem);
  namePicture.value = ''
  jobPicture.value = ''
}
// Отправка формы
function renderImage(evt){
  evt.preventDefault()
  handleAdd()
  closePopup(overlayEdit)
}
form.addEventListener('submit', renderImage)
// Удаляем карточку
function handleDelete(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.card');
  targetItem.remove();
}
// Ставим лайк
const likeHeart = (item) => { 
  item.target.classList.toggle('card__button_active')
}
// Открытие попапа
function openPopup(popup){
  popup.classList.add('overlay_active')
}
// Закрытие попапа
function closePopup(popup){
  popup.classList.remove('overlay_active')
}
render();