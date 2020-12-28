let openButton = document.querySelector('.profile__rectangle')
let overlay = document.querySelector('.overlay')
let nameInput = document.querySelector('.popup_input_name')
let jobInput = document.querySelector('.popup_input_job')
let name = document.querySelector('.profile__title')
let job = document.querySelector('.profile__subtitle')
let closeOverlay = document.querySelector('.overlay__button')
let togglePopup = () => { 
    overlay.classList.toggle('overlay_active')
}
openButton.addEventListener('click', togglePopup)
closeOverlay.addEventListener('click', togglePopup)
overlay.addEventListener('mouseup', (event) => {
    if (event.target === event.currentTarget) {
        togglePopup()
    }
})

let formElement = document.querySelector('.popup__form')

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
    togglePopup()
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit)