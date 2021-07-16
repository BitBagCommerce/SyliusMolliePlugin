/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../src/Resources/assets/shop/js/main.js":
/*!**************************************************!*\
  !*** ../../src/Resources/assets/shop/js/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mollie_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mollie/main */ "../../src/Resources/assets/shop/js/mollie/main.js");


/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/app.js":
/*!********************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/app.js ***!
  \********************************************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(function () {
  var selectedValue = false;
  var mollieData = $(".online-online-payment__container");
  var initialOrderTotal = $('#sylius-summary-grand-total').text();
  var cardActiveClass = "online-payment__item--active";
  var orderTotalRow = $('#sylius-summary-grand-total');
  var components = Boolean(mollieData.data('components'));
  $('input[id*="sylius_checkout_select_payment_"][type=radio]').on('change', function (_ref) {
    var currentTarget = _ref.currentTarget;

    if (!currentTarget.classList.contains('mollie-payments')) {
      restoreOrderTotalValue();
      $(".".concat(cardActiveClass, " input[type=\"radio\"]")).prop('checked', false);
      $(".".concat(cardActiveClass)).removeClass(cardActiveClass);
    }
  });
  $(".online-payment__input").on('change', function (_ref2) {
    var currentTarget = _ref2.currentTarget;
    var currentItem = $(currentTarget).parent('.online-payment__item');
    currentItem.siblings().removeClass('online-payment__item--active');
    currentItem.addClass('online-payment__item--active');
    selectedValue = currentTarget.value;

    if (!$('.mollie-payments').prop('checked')) {
      $('.mollie-payments').prop('checked', true);
    }

    if (currentItem.data('feeurl')) {
      getPaymentFee(currentItem.data('feeurl'));
    }
  });

  function getPaymentFee(url) {
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      var paymentFeeRow = $('#bitbag-paymentFee-row');

      if (paymentFeeRow.length && data.view) {
        paymentFeeRow.replaceWith(data.view);
        orderTotalRow.text(data.orderTotal);
      } else if (data.view) {
        $('#sylius-checkout-subtotal .ui.large.header').before(data.view);
        orderTotalRow.text(data.orderTotal);
      } else {
        restoreOrderTotalValue();
      }
    });
  }

  function restoreOrderTotalValue() {
    $('#bitbag-paymentFee-row').replaceWith('');
    orderTotalRow.text(initialOrderTotal);
  }

  if (mollieData.length > 0 && true === components) {
    initializeCreditCartFields(selectedValue);
  }

  function initializeCreditCartFields(selectedValue) {
    var environment = mollieData.data('environment');
    var testmode = true;

    if (environment === 1) {
      testmode = false;
    }

    var mollie = Mollie(mollieData.data('profile_id'), {
      locale: mollieData.data('locale'),
      testmode: testmode
    });
    var form = document.getElementsByName("sylius_checkout_select_payment")[0];
    var formError = document.getElementById("form-error");
    var submitButton = document.getElementById("next-step") || document.getElementById("sylius-pay-link");
    var tokenField = document.querySelector('[id*="_details_cartToken"]');
    var cardHolder = mollie.createComponent("cardHolder");
    cardHolder.mount("#card-holder");
    var cardHolderError = document.getElementById("card-holder-error");
    cardHolder.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        cardHolderError.textContent = event.error;
      } else {
        cardHolderError.textContent = "";
      }
    });
    var cardNumber = mollie.createComponent("cardNumber");
    cardNumber.mount("#card-number");
    var cardNumberError = document.getElementById("card-number-error");
    cardNumber.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        cardNumberError.textContent = event.error;
      } else {
        cardNumberError.textContent = "";
      }
    });
    var expiryDate = mollie.createComponent("expiryDate");
    expiryDate.mount("#expiry-date");
    var expiryDateError = document.getElementById("expiry-date-error");
    expiryDate.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        expiryDateError.textContent = event.error;
      } else {
        expiryDateError.textContent = "";
      }
    });
    var verificationCode = mollie.createComponent("verificationCode");
    verificationCode.mount("#verification-code");
    var verificationCodeError = document.getElementById("verification-code-error");
    verificationCode.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        verificationCodeError.textContent = event.error;
      } else {
        verificationCodeError.textContent = "";
      }
    });

    function disableForm() {
      submitButton.disabled = true;
    }

    function enableForm() {
      submitButton.disabled = false;
    }

    form.addEventListener("submit", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _yield$mollie$createT, token, error, tokenInput;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!($(".online-payment__input:checked").val() === 'creditcard')) {
                  _context.next = 21;
                  break;
                }

                event.preventDefault();
                disableForm();
                formError.textContent = "";
                _context.next = 6;
                return mollie.createToken();

              case 6:
                _yield$mollie$createT = _context.sent;
                token = _yield$mollie$createT.token;
                error = _yield$mollie$createT.error;

                if (!error) {
                  _context.next = 14;
                  break;
                }

                enableForm();
                formError.textContent = error.message;
                form.classList.remove('loading');
                return _context.abrupt("return");

              case 14:
                tokenInput = document.createElement("input");
                tokenInput.setAttribute("name", "token");
                tokenInput.setAttribute("type", "hidden");
                tokenInput.setAttribute("value", token);
                form.appendChild(tokenInput);
                tokenField.value = token;
                form.submit();

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  }

  var applePay = document.getElementById("applepay");

  if (applePay) {
    if (window.ApplePaySession || ApplePaySession.canMakePayments()) {
      applePay.style.display = "block";
    }
  }
});

/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/applePayDirect.js":
/*!*******************************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/applePayDirect.js ***!
  \*******************************************************************/
/***/ (() => {

$(function () {
  var applePaySession = function applePaySession() {
    var version = 3;
    var divider = 100;
    var applePayButton = document.getElementById('mollie_applepay_button');
    var bitbagMollieValidateMerchantUrl = applePayButton.getAttribute('data-url-validate');
    var bitbagMolliePaymentUrl = applePayButton.getAttribute('data-url-payment');
    var bitbagMollieCurrency = applePayButton.getAttribute('data-currency-order');
    var bitbagMollieMerchantName = applePayButton.getAttribute('data-merchant-name');
    var bitbagMollieTotalOrder = applePayButton.getAttribute('data-total-order');
    bitbagMollieTotalOrder = bitbagMollieTotalOrder / divider;
    bitbagMollieTotalOrder = bitbagMollieTotalOrder.toString();
    var session = new ApplePaySession(version, request('US', bitbagMollieCurrency, bitbagMollieMerchantName, bitbagMollieTotalOrder));

    session.onvalidatemerchant = function (applePayValidateMerchantEvent) {
      jQuery.ajax({
        url: bitbagMollieValidateMerchantUrl,
        method: 'POST',
        data: {
          validationUrl: applePayValidateMerchantEvent.validationURL
        },
        success: function success(merchantSession) {
          if (merchantSession.success === true) {
            session.completeMerchantValidation(JSON.parse(merchantSession.data));
          } else {
            session.abort();
          }
        },
        error: function error(XHR, status, _error) {
          session.abort();
        }
      });
    };

    session.onpaymentauthorized = function (ApplePayPayment) {
      jQuery.ajax({
        url: bitbagMolliePaymentUrl,
        method: 'POST',
        data: {
          token: ApplePayPayment.payment.token,
          shippingContact: ApplePayPayment.payment.shippingContact,
          billingContact: ApplePayPayment.payment.billingContact
        },
        success: function success(authorization) {
          var result = authorization.data;

          if (authorization.success === true) {
            redirectionUrl = result['returnUrl'];
            session.completePayment(result['responseToApple']);
            window.location.href = redirectionUrl;
          } else {
            session.completePayment(result);
          }
        },
        error: function error(XHR, status, _error2) {
          session.abort();
        }
      });
    };

    session.begin();
  };

  var applePayMethodElement = document.querySelector('#mollie_applepay_button');
  var canShowButton = applePayMethodElement && ApplePaySession && ApplePaySession.canMakePayments();

  if (canShowButton) {
    applePayMethodElement.style.display = "block";
  }

  document.querySelector('#mollie_applepay_button').addEventListener('click', function (evt) {
    applePaySession();
  });
});

/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/applePayRequest.js":
/*!********************************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/applePayRequest.js ***!
  \********************************************************************/
/***/ (() => {

function request(countryCode, currencyCode, totalLabel, subtotal) {
  return {
    countryCode: countryCode,
    currencyCode: currencyCode,
    supportedNetworks: ['amex', 'maestro', 'masterCard', 'visa', 'vPay'],
    merchantCapabilities: ['supports3DS'],
    shippingType: 'shipping',
    requiredBillingContactFields: ['postalAddress', 'email'],
    requiredShippingContactFields: ['postalAddress', 'email'],
    total: {
      label: totalLabel,
      amount: subtotal,
      type: 'final'
    }
  };
}

/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/main.js":
/*!*********************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/main.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../../src/Resources/assets/shop/js/mollie/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _applePayDirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applePayDirect */ "../../src/Resources/assets/shop/js/mollie/applePayDirect.js");
/* harmony import */ var _applePayDirect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_applePayDirect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applePayRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applePayRequest */ "../../src/Resources/assets/shop/js/mollie/applePayRequest.js");
/* harmony import */ var _applePayRequest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_applePayRequest__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../src/Resources/assets/shop/scss/main.scss":
/*!******************************************************!*\
  !*** ../../src/Resources/assets/shop/scss/main.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ../../src/Resources/assets/shop/entry.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "../../src/Resources/assets/shop/scss/main.scss");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "../../src/Resources/assets/shop/js/main.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheURpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qcyJdLCJuYW1lcyI6WyIkIiwic2VsZWN0ZWRWYWx1ZSIsIm1vbGxpZURhdGEiLCJpbml0aWFsT3JkZXJUb3RhbCIsInRleHQiLCJjYXJkQWN0aXZlQ2xhc3MiLCJvcmRlclRvdGFsUm93IiwiY29tcG9uZW50cyIsIkJvb2xlYW4iLCJkYXRhIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZXN0b3JlT3JkZXJUb3RhbFZhbHVlIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiY3VycmVudEl0ZW0iLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwidmFsdWUiLCJnZXRQYXltZW50RmVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicGF5bWVudEZlZVJvdyIsImxlbmd0aCIsInZpZXciLCJyZXBsYWNlV2l0aCIsIm9yZGVyVG90YWwiLCJiZWZvcmUiLCJpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyIsImVudmlyb25tZW50IiwidGVzdG1vZGUiLCJtb2xsaWUiLCJNb2xsaWUiLCJsb2NhbGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZvcm1FcnJvciIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnV0dG9uIiwidG9rZW5GaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkSG9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwibW91bnQiLCJjYXJkSG9sZGVyRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJlcnJvciIsInRvdWNoZWQiLCJ0ZXh0Q29udGVudCIsImNhcmROdW1iZXIiLCJjYXJkTnVtYmVyRXJyb3IiLCJleHBpcnlEYXRlIiwiZXhwaXJ5RGF0ZUVycm9yIiwidmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGVFcnJvciIsImRpc2FibGVGb3JtIiwiZGlzYWJsZWQiLCJlbmFibGVGb3JtIiwidmFsIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUb2tlbiIsInRva2VuIiwibWVzc2FnZSIsInJlbW92ZSIsInRva2VuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJhcHBsZVBheSIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImNhbk1ha2VQYXltZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImFwcGxlUGF5U2Vzc2lvbiIsInZlcnNpb24iLCJkaXZpZGVyIiwiYXBwbGVQYXlCdXR0b24iLCJiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsIiwiZ2V0QXR0cmlidXRlIiwiYml0YmFnTW9sbGllUGF5bWVudFVybCIsImJpdGJhZ01vbGxpZUN1cnJlbmN5IiwiYml0YmFnTW9sbGllTWVyY2hhbnROYW1lIiwiYml0YmFnTW9sbGllVG90YWxPcmRlciIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInJlcXVlc3QiLCJvbnZhbGlkYXRlbWVyY2hhbnQiLCJhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudCIsImpRdWVyeSIsImFqYXgiLCJtZXRob2QiLCJ2YWxpZGF0aW9uVXJsIiwidmFsaWRhdGlvblVSTCIsInN1Y2Nlc3MiLCJtZXJjaGFudFNlc3Npb24iLCJjb21wbGV0ZU1lcmNoYW50VmFsaWRhdGlvbiIsIkpTT04iLCJwYXJzZSIsImFib3J0IiwiWEhSIiwic3RhdHVzIiwib25wYXltZW50YXV0aG9yaXplZCIsIkFwcGxlUGF5UGF5bWVudCIsInBheW1lbnQiLCJzaGlwcGluZ0NvbnRhY3QiLCJiaWxsaW5nQ29udGFjdCIsImF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJyZWRpcmVjdGlvblVybCIsImNvbXBsZXRlUGF5bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImJlZ2luIiwiYXBwbGVQYXlNZXRob2RFbGVtZW50IiwiY2FuU2hvd0J1dHRvbiIsImV2dCIsImNvdW50cnlDb2RlIiwiY3VycmVuY3lDb2RlIiwidG90YWxMYWJlbCIsInN1YnRvdGFsIiwic3VwcG9ydGVkTmV0d29ya3MiLCJtZXJjaGFudENhcGFiaWxpdGllcyIsInNoaXBwaW5nVHlwZSIsInJlcXVpcmVkQmlsbGluZ0NvbnRhY3RGaWVsZHMiLCJyZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkcyIsInRvdGFsIiwibGFiZWwiLCJhbW91bnQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUNWLE1BQUlDLGFBQWEsR0FBRyxLQUFwQjtBQUNBLE1BQUlDLFVBQVUsR0FBR0YsQ0FBQyxDQUFDLG1DQUFELENBQWxCO0FBQ0EsTUFBTUcs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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQSIsImZpbGUiOiJwbHVnaW4tc2hvcC1lbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG1vbGxpZURhdGEgPSAkKFwiLm9ubGluZS1vbmxpbmUtcGF5bWVudF9fY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluaXRpYWxPcmRlclRvdGFsID0gJCgnI3N5bGl1cy1zdW1tYXJ5LWdyYW5kLXRvdGFsJykudGV4dCgpO1xuICAgIGNvbnN0IGNhcmRBY3RpdmVDbGFzcyA9IFwib25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZVwiO1xuICAgIGNvbnN0IG9yZGVyVG90YWxSb3cgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKTtcbiAgICBjb25zdCBjb21wb25lbnRzID0gQm9vbGVhbihtb2xsaWVEYXRhLmRhdGEoJ2NvbXBvbmVudHMnKSk7XG5cbiAgICAkKCdpbnB1dFtpZCo9XCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRfXCJdW3R5cGU9cmFkaW9dJykub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9sbGllLXBheW1lbnRzJykpIHtcbiAgICAgICAgICAgIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKVxuICAgICAgICAgICAgJChgLiR7Y2FyZEFjdGl2ZUNsYXNzfSBpbnB1dFt0eXBlPVwicmFkaW9cIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9YCkucmVtb3ZlQ2xhc3MoY2FyZEFjdGl2ZUNsYXNzKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCIub25saW5lLXBheW1lbnRfX2lucHV0XCIpLm9uKCdjaGFuZ2UnLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoY3VycmVudFRhcmdldCkucGFyZW50KCcub25saW5lLXBheW1lbnRfX2l0ZW0nKTtcbiAgICAgICAgY3VycmVudEl0ZW0uc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoISQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSkge1xuICAgICAgICAgICAgZ2V0UGF5bWVudEZlZShjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFBheW1lbnRGZWUodXJsKSB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRGZWVSb3cgPSAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bWVudEZlZVJvdy5sZW5ndGggJiYgZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRGZWVSb3cucmVwbGFjZVdpdGgoZGF0YS52aWV3KVxuICAgICAgICAgICAgICAgICAgICBvcmRlclRvdGFsUm93LnRleHQoZGF0YS5vcmRlclRvdGFsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzeWxpdXMtY2hlY2tvdXQtc3VidG90YWwgLnVpLmxhcmdlLmhlYWRlcicpLmJlZm9yZShkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKCkge1xuICAgICAgICAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93JykucmVwbGFjZVdpdGgoJycpXG4gICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChpbml0aWFsT3JkZXJUb3RhbClcbiAgICB9XG5cbiAgICBpZiAobW9sbGllRGF0YS5sZW5ndGggPiAwICYmIHRydWUgPT09IGNvbXBvbmVudHMpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IG1vbGxpZURhdGEuZGF0YSgnZW52aXJvbm1lbnQnKTtcbiAgICAgICAgbGV0IHRlc3Rtb2RlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZW52aXJvbm1lbnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRlc3Rtb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2xsaWUgPSBNb2xsaWUoXG4gICAgICAgICAgICBtb2xsaWVEYXRhLmRhdGEoJ3Byb2ZpbGVfaWQnKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG1vbGxpZURhdGEuZGF0YSgnbG9jYWxlJyksXG4gICAgICAgICAgICAgICAgdGVzdG1vZGU6IHRlc3Rtb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwic3lsaXVzX2NoZWNrb3V0X3NlbGVjdF9wYXltZW50XCIpWzBdO1xuXG4gICAgICAgIGNvbnN0IGZvcm1FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1lcnJvclwiKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXN0ZXBcIikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXMtcGF5LWxpbmtcIik7XG4gICAgICAgIGNvbnN0IHRva2VuRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiX2RldGFpbHNfY2FydFRva2VuXCJdJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkSG9sZGVyXCIpO1xuXG4gICAgICAgIGNhcmRIb2xkZXIubW91bnQoXCIjY2FyZC1ob2xkZXJcIik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlci1lcnJvclwiKTtcbiAgICAgICAgY2FyZEhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRIb2xkZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiY2FyZE51bWJlclwiKTtcbiAgICAgICAgY2FyZE51bWJlci5tb3VudChcIiNjYXJkLW51bWJlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtbnVtYmVyLWVycm9yXCIpO1xuXG4gICAgICAgIGNhcmROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImV4cGlyeURhdGVcIik7XG4gICAgICAgIGV4cGlyeURhdGUubW91bnQoXCIjZXhwaXJ5LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcnktZGF0ZS1lcnJvclwiKTtcblxuICAgICAgICBleHBpcnlEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwaXJ5RGF0ZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZSA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJ2ZXJpZmljYXRpb25Db2RlXCIpO1xuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLm1vdW50KFwiI3ZlcmlmaWNhdGlvbi1jb2RlXCIpO1xuXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZpY2F0aW9uLWNvZGUtZXJyb3JcIik7XG5cbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVGb3JtKCkge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXQ6Y2hlY2tlZFwiKS52YWwoKSA9PT0gJ2NyZWRpdGNhcmQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNhYmxlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b2tlbiwgZXJyb3J9ID0gYXdhaXQgbW9sbGllLmNyZWF0ZVRva2VuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgdG9rZW5JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2tlbik7XG5cbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRva2VuSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRva2VuRmllbGQudmFsdWUgPSB0b2tlbjtcblxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBsZXBheVwiKTtcblxuICAgIGlmIChhcHBsZVBheSkge1xuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbiB8fCBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpIHtcbiAgICAgICAgICAgIGFwcGxlUGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcHBsZVBheVNlc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAzO1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gMTAwO1xuXG4gICAgICAgIGNvbnN0IGFwcGxlUGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbGxpZV9hcHBsZXBheV9idXR0b24nKTtcblxuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC12YWxpZGF0ZScpO1xuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVQYXltZW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC1wYXltZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZUN1cnJlbmN5ID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5LW9yZGVyJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tZXJjaGFudC1uYW1lJyk7XG5cbiAgICAgICAgbGV0IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtb3JkZXInKTtcbiAgICAgICAgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgLyBkaXZpZGVyO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlci50b1N0cmluZygpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBuZXcgQXBwbGVQYXlTZXNzaW9uKHZlcnNpb24sIHJlcXVlc3QoXG4gICAgICAgICAgICAnVVMnLFxuICAgICAgICAgICAgYml0YmFnTW9sbGllQ3VycmVuY3ksXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyXG4gICAgICAgICkpO1xuXG4gICAgICAgIHNlc3Npb24ub252YWxpZGF0ZW1lcmNoYW50ID0gKGFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblVybDogYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQudmFsaWRhdGlvblVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChtZXJjaGFudFNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lcmNoYW50U2Vzc2lvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uKEpTT04ucGFyc2UobWVyY2hhbnRTZXNzaW9uLmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5vbnBheW1lbnRhdXRob3JpemVkID0gKEFwcGxlUGF5UGF5bWVudCkgPT4ge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYml0YmFnTW9sbGllUGF5bWVudFVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBBcHBsZVBheVBheW1lbnQucGF5bWVudC50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5zaGlwcGluZ0NvbnRhY3QsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5iaWxsaW5nQ29udGFjdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGF1dGhvcml6YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF1dGhvcml6YXRpb24uZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdGlvblVybCA9IHJlc3VsdFsncmV0dXJuVXJsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHRbJ3Jlc3BvbnNlVG9BcHBsZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdGlvblVybFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKFhIUiwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5iZWdpbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5TWV0aG9kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2xsaWVfYXBwbGVwYXlfYnV0dG9uJylcblxuICAgIGNvbnN0IGNhblNob3dCdXR0b24gPSBhcHBsZVBheU1ldGhvZEVsZW1lbnQgJiYgKEFwcGxlUGF5U2Vzc2lvbiAmJiBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpXG4gICAgaWYgKGNhblNob3dCdXR0b24pIHtcbiAgICAgICAgYXBwbGVQYXlNZXRob2RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgYXBwbGVQYXlTZXNzaW9uKClcbiAgICB9KVxufSk7XG4iLCJmdW5jdGlvbiByZXF1ZXN0KGNvdW50cnlDb2RlLCBjdXJyZW5jeUNvZGUsIHRvdGFsTGFiZWwsIHN1YnRvdGFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxuICAgICAgICBjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSxcbiAgICAgICAgc3VwcG9ydGVkTmV0d29ya3M6IFsnYW1leCcsICdtYWVzdHJvJywgJ21hc3RlckNhcmQnLCAndmlzYScsICd2UGF5J10sXG4gICAgICAgIG1lcmNoYW50Q2FwYWJpbGl0aWVzOiBbJ3N1cHBvcnRzM0RTJ10sXG4gICAgICAgIHNoaXBwaW5nVHlwZTogJ3NoaXBwaW5nJyxcbiAgICAgICAgcmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICByZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgbGFiZWw6IHRvdGFsTGFiZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHN1YnRvdGFsLFxuICAgICAgICAgICAgdHlwZTogJ2ZpbmFsJ1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL2FwcCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlEaXJlY3QnO1xuaW1wb3J0ICcuL2FwcGxlUGF5UmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9qcy9tYWluJztcbiJdLCJzb3VyY2VSb290IjoiIn0=