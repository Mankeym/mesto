const openButton = document.querySelector('.profile__rectangle')
const overlay = document.querySelector('.overlay')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const name = document.querySelector('.profile__title')
const job = document.querySelector('.profile__subtitle')
const NameMesto = document.querySelector('.card__title')
const LinkMesto = document.querySelector('.card__logo')
const closeOverlay = document.querySelector('.overlay__button')
const formElement = document.querySelector('.popup__form')
const form = document.querySelector('.popup__form_edit')
const picture = document.querySelector('.overlay')
const OpenPicture = document.querySelector('.profile__button')
const closePicture = document.querySelector('.overlay__button_edit')
const CardContent = document.querySelector('.card-template');
const namePicture = document.querySelector('.popup__input_type_mesto')
const jobPicture = document.querySelector('.popup__input_type_link')
const directorsList = document.querySelector('.cards');
const templateEl = document.querySelector('.card-template');
const LikeBlack = document.querySelector('.card__button');
const overlayEdit = document.querySelector('.overlay_edit')
const overlayEditPicture = document.querySelector('.overlay_edit-picture')
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
  openPopup(overlay)
})
closeOverlay.addEventListener('click', () =>{
  closePopup(overlay)
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
    nameInput.value = name.textContent
    jobInput.value = job.textContent
    closePopup(overlay)
    
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit)
OpenPicture.addEventListener('click', () =>{
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
function getItem(item) {
  const newItem = CardContent.cloneNode(true).content
  const headerEl = newItem.querySelector('.card__title');
  headerEl.textContent = item.Mesto;
  const head = newItem.querySelector('.card__logo')
  head.src = item.link
  const bigImage = newItem.querySelector('.popup__picture')
  bigImage.src = item.link
  const textpicture = newItem.querySelector('.popup__textpicture')
  textpicture.textContent = item.Mesto
  const removeBtn = newItem.querySelector('.card__trash');
  removeBtn.addEventListener('click', handleDelete);
  const likeBtn = newItem.querySelector('.card__button')
  likeBtn.addEventListener('click', LikeHeart)
  const image = newItem.querySelector('.overlay_edit-picture')
  head.addEventListener('click', () => {
    image.classList.add('overlay_active')
  })
  image.addEventListener('click', () =>{
    image.classList.remove('overlay_active')
  })
  return newItem;
}
function handleAdd() {
  const inputText = namePicture.value;
  const inputLink = jobPicture.value;
  const listItem = getItem({Mesto: inputText, link: inputLink});
  directorsList.prepend(listItem);
  namePicture.value = ''
  jobPicture.value = ''
}
function RenderImage(evt){
  evt.preventDefault()
  handleAdd()
  closePopup(overlayEdit)
}
form.addEventListener('submit', RenderImage)
function handleDelete(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.card');
  targetItem.remove();
}
let LikeHeart = (item) => { 
  item.target.classList.toggle('card__button_active')
}

function openPopup(popup){
  popup.classList.add('overlay_active')
}
function closePopup(popup){
  popup.classList.remove('overlay_active')
}
render();