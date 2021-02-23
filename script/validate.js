const valid = {
    popupForm:'.popup__form',
    inputSelector:'.popup__input',
    submitButton:'.popup__submit',
    submitButtonDisabled:'popup__submit_disabled',
    inputErrorCon:'popup__input_type_error',
    errorVis: 'popup__error_visible'
}
const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        console.log(inputList)
        return !inputSelector.validity.valid;
      })
  };
const toggleButtonState = (inputList, buttonElement, submitButtonDisabled) => {
  console.log(hasInvalidInput(inputList))
  if (hasInvalidInput(inputList)) {
     buttonElement.classList.add(submitButtonDisabled);
     buttonElement.disabled = true;
  } else {
      buttonElement.classList.remove(submitButtonDisabled);
      buttonElement.disabled = false;
    }
  };
  const inputError = (popupForm, inputSelector, errorMessage, inputErrorCon, errorVis) => {
    const error = popupForm.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(inputErrorCon);
    error.textContent = errorMessage;
    error.classList.add(errorVis);
  };

   const hideInputError = (popupForm, inputSelector,inputErrorCon,errorVis) => {
    const error = popupForm.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(inputErrorCon);
    error.textContent = "";
    error.classList.remove(errorVis);
  };
  const isValid = (popupForm, inputSelector,inputErrorCon,errorVis) => {
    if (!inputSelector.validity.valid) {
        inputError(popupForm, inputSelector, inputSelector.validationMessage,inputErrorCon,errorVis);
    } else {
        hideInputError(popupForm, inputSelector,inputErrorCon,errorVis);
    }
    }; 
  const setEventListeners = (popupForm,submitButton,inputSelector,submitButtonDisabled,inputErrorCon,errorVis) => {
    const inputList = Array.from(popupForm.querySelectorAll(inputSelector))
    const buttonElement = popupForm.querySelector(submitButton)
    toggleButtonState(inputList, buttonElement,submitButtonDisabled)
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            isValid(popupForm, inputSelector,inputErrorCon,errorVis);
            toggleButtonState(inputList, buttonElement,submitButtonDisabled);
        });
    });
  };
  const enableValidation = ({popupForm,submitButton,inputSelector,submitButtonDisabled,inputErrorCon,errorVis}) => {
    
    const formList = Array.from(document.querySelectorAll(popupForm));
    formList.forEach((popupForm) => {
        popupForm.addEventListener('submit', function (evt) {
            evt.preventDefault();
      });
      setEventListeners(popupForm,submitButton,inputSelector,submitButtonDisabled,inputErrorCon,errorVis);
    });
  };
  function validatePopupOnOpen(inputList,buttonElement) {
        toggleButtonState(inputList, buttonElement, valid.submitButtonDisabled);
  }
  enableValidation(valid);