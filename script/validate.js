const valid = {
    popupForm: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__submit',
    submitButtonDisabled: '.popup__submit_disabled'
}

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        console.log(inputList)
        return !inputSelector.validity.valid;
      })
  };
  const toggleButtonState = (inputList, buttonElement) => {
      console.log(hasInvalidInput(inputList))
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit_disabled');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__submit_disabled');
        buttonElement.disabled = false;
    }
  };
  const inputError = (popupForm, inputSelector, errorMessage, inputErrorClass, errorClass) => {
    const error = popupForm.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(errorClass);
  };

   const hideInputError = (popupForm, inputSelector, inputErrorClass, errorClass) => {
    const error = popupForm.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(inputErrorClass);
    error.textContent = "";
    error.classList.remove(errorClass);
  };
  const isValid = (popupForm, inputSelector, inputErrorClass, errorClass) => {
    if (!inputSelector.validity.valid) {
        inputError(popupForm, inputSelector, inputSelector.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(popupForm, inputSelector, inputErrorClass, errorClass);
    }
    }; 
  const setEventListeners = (popupForm,submitButton,inputSelector) => {
    const inputList = Array.from(popupForm.querySelectorAll(inputSelector));
    const buttonElement = popupForm.querySelector(submitButton);
    toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            // ... и переключает состояние кнопки Submit
            toggleButtonState(inputList, buttonElement);
        });
    });
  };
   
  const enableValidation = ({popupForm, inputSelector, submitButton}) => {
    
    const formList = Array.from(document.querySelectorAll(popupForm));
    formList.forEach((popupForm) => {
        popupForm.addEventListener('submit', function (evt) {
            evt.preventDefault();
      });
      setEventListeners(popupForm,submitButton,inputSelector);
    });
  };
  function validatePopupOnOpen(inputList,buttonElement) {
        toggleButtonState(inputList, buttonElement, valid.submitButtonDisabled);
  }
  enableValidation(valid);