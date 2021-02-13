let openButton = document.querySelector('.profile__rectangle')
let overlay = document.querySelector('.overlay')
let nameInput = document.querySelector('.popup__input_type_name')
let jobInput = document.querySelector('.popup__input_type_job')
let name = document.querySelector('.profile__title')
let job = document.querySelector('.profile__subtitle')
let NameMesto = document.querySelector('.card__title')
let LinkMesto = document.querySelector('.card__logo')
let closeOverlay = document.querySelector('.overlay__button')
let formElement = document.querySelector('.popup__form')
let form = document.querySelector('.picture__form')
let picture = document.querySelector('.picture')
let OpenPicture = document.querySelector('.profile__button')
let closePicture = document.querySelector('.picture__button')
let CardContent = document.querySelector('.card-template');
let namePicture = document.querySelector('.picture__input_type_name')
let jobPicture = document.querySelector('.picture__input_type_job')
const directorsList = document.querySelector('.cards');
let templateEl = document.querySelector('.card-template');
let LikeBlack = document.querySelector('.card__button');
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
let togglePopupOpen = () => {
    overlay.classList.toggle('overlay_active')
    if(overlay.classList.contains('overlay_active')){
        nameInput.value = name.textContent
        jobInput.value = job.textContent
    }
}
openButton.addEventListener('click', togglePopupOpen)
closeOverlay.addEventListener('click',togglePopupOpen)
overlay.addEventListener('mouseup', (event) => {
    if (event.target === event.currentTarget) {
        togglePopupOpen()
    }
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
    togglePopupOpen()
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit)
let togglePictureOpen = () => {
    picture.classList.toggle('picture_active')
}
OpenPicture.addEventListener('click', togglePictureOpen)
closePicture.addEventListener('click',togglePictureOpen)
overlay.addEventListener('mouseup', (event) => {
    if (event.target === event.currentTarget) {
        togglePictureOpen()
    }
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
  const img = newItem.querySelector('.card__picture')
  const bigImage = newItem.querySelector('.card__bigimage')
  bigImage.src = item.link
  const textpicture = newItem.querySelector('.card__textpicture')
  textpicture.textContent = item.Mesto
  const removeBtn = newItem.querySelector('.card__trash');
  removeBtn.addEventListener('click', handleDelete);
  const likeBtn = newItem.querySelector('.card__button')
  likeBtn.addEventListener('click', LikeHeart)
  const image = newItem.querySelector('.card__picture')
  head.addEventListener('click', () => {
    image.classList.add('card__picture_active')
  })
  image.addEventListener('click', () =>{
    image.classList.remove('card__picture_active')
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
  togglePictureOpen()
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
function imageBig(){
  item.classList.add('card__picture_active')
}
render();