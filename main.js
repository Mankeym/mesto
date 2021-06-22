(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._place=e.name,this._link=e.link,this._like=e.likes,this._owner=e.owner,this._cardTemplate=r,this._handleCardClick=o,this._deleteCardClick=i,this._handleCardLike=a,this._userID=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return this._cardTemplate.content.querySelector(".card").cloneNode(!0)}},{key:"_deleteEdit",value:function(){document.querySelector(".overlay_edit-delete").classList.add("overlay_active")}},{key:"getItem",value:function(){return this._element=this._getTemplate(),this._photoCardLike=this._element.querySelector(".card__button"),this._element.querySelector(".card__title").textContent=this._place,this._element.querySelector(".card__logo").src=this._link,this._element.querySelector(".card__logo").alt=this._name,this._element.querySelector(".card__score").textContent=this._like.length,this._element.querySelector(".card__logo").setAttribute("id",this._userID),this._setEventListeners(),this._checkOurLike()?this.setLiked():this.unsetLiked(),this._userID!==this._owner._id&&this._removeDeleteButton(),this._element}},{key:"_openOverlayImage",value:function(){this._handleCardClick()}},{key:"updateLikes",value:function(e){this._like=e,this._element.querySelector(".card__score").textContent=this._like.length}},{key:"_checkOurLike",value:function(){var e=this;return this._like.some((function(t){return t._id===e._userID}))}},{key:"setLiked",value:function(){this._photoCardLike.classList.add("card__button_active"),this.isLiked=!0}},{key:"unsetLiked",value:function(){this._photoCardLike.classList.remove("card__button_active"),this.isLiked=!1}},{key:"_removeDeleteButton",value:function(){this._element.querySelector(".card__trash").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__trash").addEventListener("click",(function(){e._deleteCardClick()})),this._element.querySelector(".card__logo").addEventListener("click",(function(){e._openOverlayImage()})),this._photoCardLike.addEventListener("click",(function(){e._handleCardLike()}))}},{key:"deleteCard",value:function(){console.log(this._element),this._element.remove(),this._element=null}},{key:"delete",value:function(){event.target.closest(".card").remove()}},{key:"handleDelete",value:function(){document.querySelector(".overlay_edit-delete").classList.add("overlay_active")}},{key:"_likeHeart",value:function(e){e.target.classList.toggle("card__button_active")}},{key:"idCard",value:function(){return this._cardId}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._valid=t,this._popupForm=n}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(e){return e.some((function(t){return console.log(e),!t.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){console.log(this._hasInvalidInput(e)),this._hasInvalidInput(e)?(t.classList.add(this._valid.submitButtonDisabled),t.disabled=!0):(t.classList.remove(this._valid.submitButtonDisabled),t.disabled=!1)}},{key:"_inputError",value:function(e,t,n,r,o){var i=this._popupForm.querySelector(".".concat(t.id,"-error"));t.classList.add(this._valid.inputErrorCon),i.textContent=n,i.classList.add(this._valid.errorVis)}},{key:"_hideInputError",value:function(e,t,n,r){var o=this._popupForm.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._valid.inputErrorCon),o.textContent="",o.classList.remove(this._valid.errorVis)}},{key:"_isValid",value:function(e,t,n,r){t.validity.valid?this._hideInputError(e,t,n,r):this._inputError(e,t,t.validationMessage,n,r)}},{key:"_setEventListeners",value:function(e,t,n,r){var o=this,i=Array.from(this._popupForm.querySelectorAll(this._valid.inputSelector)),a=this._popupForm.querySelector(this._valid.submitButton);this._toggleButtonState(i,a,t),i.forEach((function(u){u.addEventListener("input",(function(){o._isValid(e,u,n,r),o._toggleButtonState(i,a,t)}))}))}},{key:"enableValidation",value:function(){this._popupForm.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"validatePopupOnOpen",value:function(e,t){this._toggleButtonState(e,t)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscCl=this._handleEscClose.bind(this),this._closeByOver=this._closeByOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("overlay_active"),document.addEventListener("keydown",this._handleEscCl),this._popup.addEventListener("click",this._closeByOver)}},{key:"close",value:function(){this._popup.classList.remove("overlay_active"),document.removeEventListener("keydown",this._handleEscCl),this._popup.removeEventListener("click",this._closeByOver)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeByOverlay",value:function(e){e.target.classList.contains("overlay")&&this.close()}},{key:"changeButtonName",value:function(e){this._oldButtonName=this._popup.querySelector(".popup__submit").textContent,this._popup.querySelector(".popup__submit").textContent=e}},{key:"restoreButtonName",value:function(){this._popup.querySelector(".popup__submit").textContent=this._oldButtonName}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".overlay__button").addEventListener("click",(function(){e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._values={},this._inputList.forEach((function(t){return e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;s(d(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){s(d(a.prototype),"close",this).call(this),this._popup.querySelector(".popup__form").reset()}}])&&l(t.prototype,n),a}(u);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._name=t._popup.querySelector(".popup__textpicture"),t._link=t._popup.querySelector(".popup__picture"),t}return t=a,(n=[{key:"open",value:function(e,t){this._link.src=e,this._name.textContent=t,v(k(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),a}(u);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.usernameSelector,r=t.userinfoSelector,o=t.useravatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._author=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={username:this._author.textContent,userinfo:this._profession.textContent},this._userData}},{key:"setUserInfo",value:function(e){this._author.textContent=e.name,this._profession.textContent=e.about,this._avatar.src=e.avatar}}])&&g(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.adress,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._adress=n,this._token=r}var t,n;return t=e,(n=[{key:"getCard",value:function(){return fetch("".concat(this._adress,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._adress,"/users/me"),{headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this._adress,"/users/me"),{method:"PATCH",headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._adress,"/cards"),{method:"POST",headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e),{method:"DELETE",headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._adress,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._adress,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._adress,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"1c933ec4-a4fc-4d43-aaf4-c9a8a8844745","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&O(t.prototype,n),e}(),C=(document.querySelector(".overlay_edit-picture"),document.querySelector(".popup__picture"),document.querySelector(".popup__textpicture"),document.querySelector(".card-template").content.querySelector(".card"),document.querySelector(".overlay__button_edit"),document.querySelector(".card__logo"),document.querySelector(".card__title"),document.querySelector(".overlay__button_edit-picture"),document.querySelector(".popup__input_type_mesto")),E=document.querySelector(".popup__input_type_link"),q=(document.querySelector(".overlay__button-profile"),document.querySelector(".overlay_active"),document.querySelectorAll(".overlay"),document.querySelector(".popup__input_type_name")),j=document.querySelector(".popup__input_type_job"),P=document.querySelector(".profile-popup"),I=document.querySelector(".popup__form_edit"),B=document.querySelector(".overlay_edit"),T=document.querySelector(".profile__rectangle"),R=document.querySelector(".profile__button"),D=document.querySelector(".cards"),x=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile__avatar-update")),A=(document.querySelector(".card__trash"),document.querySelector(".overlay_edit-delete"),document.querySelector(".card-template"),document.querySelector(".card"),document.querySelector(".popup__input_type_avatar")),N=document.querySelector(".profile__logo"),F="Сохранение...",U={popupForm:".popup__form",inputSelector:".popup__input",submitButton:".popup__submit",submitButtonDisabled:"popup__submit_disabled",inputErrorCon:"popup__input_type_error",errorVis:"popup__error_visible"};function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t,n){return(H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._handleSubmit=t.handler.bind($(t)),t}return t=a,(n=[{key:"handler",value:function(e){e.preventDefault(),this._handleDeleteCard()}},{key:"setEventListeners",value:function(){H(G(a.prototype),"setEventListeners",this).call(this),console.log(this._handleDeleteCard),this._popup.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(e){var t=e.handleDeleteCard;H(G(a.prototype),"open",this).call(this),this._handleDeleteCard=t}}])&&z(t.prototype,n),a}(u);function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=document.querySelector(".card-template"),X=new K(".overlay_edit-delete"),Y=new w({adress:"https://mesto.nomoreparties.co/v1/cohort-23",token:"36169384-18f3-4191-82d3-156e3e29d72d"}),Z=new S(".overlay_edit-picture");Z.setEventListeners(),Promise.all([Y.getUserInfo(),Y.getCard()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo(o),console.log(o),ee=o._id,re.renderItems(i)})).catch((function(e){console.log(e)}));var ee="";function te(e,n,r,o,i){var a=new t(e,r,n,(function(){return i.open(e.link,e.name)}),(function(){o.open({handleDeleteCard:function(){Y.deleteCard(e._id).then((function(){a.deleteCard(),o.close()})).catch((function(e){return console.log("Ошибка при удалении")})).finally((function(){o.restoreButtonName()}))}})}),(function(){a.isLiked?Y.removeLike(e._id).then((function(e){a.unsetLiked(),a.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка при удалении")})):Y.addLike(e._id).then((function(e){a.setLiked(),a.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка при добавлении")}))}));return a}var ne=new L({usernameSelector:".profile__title",userinfoSelector:".profile__subtitle",useravatarSelector:".profile__logo"}),re=new r({renderer:function(e){var t=te(e,W,ee,X,Z).getItem();re.addItem(t)}},D),oe=new h(".profile-popup",{handleFormSubmit:function(){var e={name:q.value,about:j.value,avatar:N.src};oe.changeButtonName(F),Y.editUserInfo(e.name,e.about).then((function(){ne.setUserInfo(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.restoreButtonName()}))}}),ie=new h(".overlay_edit_avatar",{handleFormSubmit:function(){var e={avatar:A.value};ie.changeButtonName(F),Y.editAvatar(e.avatar).then((function(e){ne.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.restoreButtonName()}))}}),ae=new h(".overlay_edit",{handleFormSubmit:function(e){var t={name:C.value,link:E.value};ae.changeButtonName(F),Y.addCard(t.name,t.link).then((function(e){var t=te(e,W,ee,X,Z).getItem();re.addItem(t),ae.close()})).catch((function(e){console.log(e)})).finally((function(){ae.restoreButtonName()}))}}),ue=new i(U,P),ce=new i(U,I);oe.setEventListeners(),ae.setEventListeners(),ie.setEventListeners(),X.setEventListeners(),ue.enableValidation(),ce.enableValidation(),x.addEventListener("click",(function(){ie.open()})),T.addEventListener("click",(function(){var e=ne.getUserInfo();oe.open(),q.value=e.username,j.value=e.userinfo})),R.addEventListener("click",(function(){ae.open(),B.querySelector(U.submitButton).classList.add(U.submitButtonDisabled)}))})();