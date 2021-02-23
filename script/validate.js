const valid = {
    popupForm: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__submit',
    submitButtonDisabled: '.popup__submit_disabled',
    inputErrorCon:'.popup__input_type_error',
    errorVis: '.popup__error_visible'

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
  const inputError = (popupForm, inputSelector, errorMessage) => {
    const error = popupForm.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add('popup__input_type_error');
    error.textContent = errorMessage;
    error.classList.add('popup__error_visible');
  };

   const hideInputError = (popupForm, inputSelector) => {
    const error = popupForm.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__input_type_error');
    error.textContent = "";
    error.classList.remove('popup__error_visible');
  };
  const isValid = (popupForm, inputSelector) => {
    if (!inputSelector.validity.valid) {
        inputError(popupForm, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputError(popupForm, inputSelector);
    }
    }; 
  const setEventListeners = (popupForm,submitButton,inputSelector) => {
    const inputList = Array.from(popupForm.querySelectorAll(inputSelector));
    const buttonElement = popupForm.querySelector(submitButton);
    toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            isValid(popupForm, inputSelector);
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