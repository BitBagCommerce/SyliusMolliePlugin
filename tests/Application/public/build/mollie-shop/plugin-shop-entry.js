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

$(function () {
  let selectedValue = false;
  let mollieData = $(".online-online-payment__container");
  const initialOrderTotal = $('#sylius-summary-grand-total').text();
  const cardActiveClass = "online-payment__item--active";
  const orderTotalRow = $('#sylius-summary-grand-total');
  const components = Boolean(mollieData.data('components'));
  $('input[id*="sylius_checkout_select_payment_"][type=radio]').on('change', ({
    currentTarget
  }) => {
    if (!currentTarget.classList.contains('mollie-payments')) {
      restoreOrderTotalValue();
      $(`.${cardActiveClass} input[type="radio"]`).prop('checked', false);
      $(`.${cardActiveClass}`).removeClass(cardActiveClass);
    }
  });
  $(".online-payment__input").on('change', ({
    currentTarget
  }) => {
    let currentItem = $(currentTarget).parent('.online-payment__item');
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
    fetch(url).then(response => response.json()).then(data => {
      const paymentFeeRow = $('#bitbag-paymentFee-row');

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
    const environment = mollieData.data('environment');
    let testmode = true;

    if (environment === 1) {
      testmode = false;
    }

    const mollie = Mollie(mollieData.data('profile_id'), {
      locale: mollieData.data('locale'),
      testmode: testmode
    });
    const form = document.getElementsByName("sylius_checkout_select_payment")[0];
    const formError = document.getElementById("form-error");
    const submitButton = document.getElementById("next-step") || document.getElementById("sylius-pay-link");
    const tokenField = document.querySelector('[id*="_details_cartToken"]');
    const cardHolder = mollie.createComponent("cardHolder");
    cardHolder.mount("#card-holder");
    const cardHolderError = document.getElementById("card-holder-error");
    cardHolder.addEventListener("change", event => {
      if (event.error && event.touched) {
        cardHolderError.textContent = event.error;
      } else {
        cardHolderError.textContent = "";
      }
    });
    const cardNumber = mollie.createComponent("cardNumber");
    cardNumber.mount("#card-number");
    const cardNumberError = document.getElementById("card-number-error");
    cardNumber.addEventListener("change", event => {
      if (event.error && event.touched) {
        cardNumberError.textContent = event.error;
      } else {
        cardNumberError.textContent = "";
      }
    });
    const expiryDate = mollie.createComponent("expiryDate");
    expiryDate.mount("#expiry-date");
    const expiryDateError = document.getElementById("expiry-date-error");
    expiryDate.addEventListener("change", event => {
      if (event.error && event.touched) {
        expiryDateError.textContent = event.error;
      } else {
        expiryDateError.textContent = "";
      }
    });
    const verificationCode = mollie.createComponent("verificationCode");
    verificationCode.mount("#verification-code");
    const verificationCodeError = document.getElementById("verification-code-error");
    verificationCode.addEventListener("change", event => {
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

    form.addEventListener("submit", async event => {
      if ($(".online-payment__input:checked").val() === 'creditcard') {
        event.preventDefault();
        disableForm();
        formError.textContent = "";
        const {
          token,
          error
        } = await mollie.createToken();

        if (error) {
          enableForm();
          formError.textContent = error.message;
          form.classList.remove('loading');
          return;
        }

        const tokenInput = document.createElement("input");
        tokenInput.setAttribute("name", "token");
        tokenInput.setAttribute("type", "hidden");
        tokenInput.setAttribute("value", token);
        form.appendChild(tokenInput);
        tokenField.value = token;
        form.submit();
      }
    });
  }

  const applePay = document.getElementById("applepay");

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
  let applePaySession = () => {
    const version = 3;
    const divider = 100;
    const applePayButton = document.getElementById('mollie_applepay_button');
    const bitbagMollieValidateMerchantUrl = applePayButton.getAttribute('data-url-validate');
    const bitbagMolliePaymentUrl = applePayButton.getAttribute('data-url-payment');
    const bitbagMollieCurrency = applePayButton.getAttribute('data-currency-order');
    const bitbagMollieMerchantName = applePayButton.getAttribute('data-merchant-name');
    let bitbagMollieTotalOrder = applePayButton.getAttribute('data-total-order');
    bitbagMollieTotalOrder = bitbagMollieTotalOrder / divider;
    bitbagMollieTotalOrder = bitbagMollieTotalOrder.toString();
    const session = new ApplePaySession(version, request('US', bitbagMollieCurrency, bitbagMollieMerchantName, bitbagMollieTotalOrder));

    session.onvalidatemerchant = applePayValidateMerchantEvent => {
      jQuery.ajax({
        url: bitbagMollieValidateMerchantUrl,
        method: 'POST',
        data: {
          validationUrl: applePayValidateMerchantEvent.validationURL
        },
        success: merchantSession => {
          if (merchantSession.success === true) {
            session.completeMerchantValidation(JSON.parse(merchantSession.data));
          } else {
            session.abort();
          }
        },
        error: (XHR, status, error) => {
          session.abort();
        }
      });
    };

    session.onpaymentauthorized = ApplePayPayment => {
      jQuery.ajax({
        url: bitbagMolliePaymentUrl,
        method: 'POST',
        data: {
          token: ApplePayPayment.payment.token,
          shippingContact: ApplePayPayment.payment.shippingContact,
          billingContact: ApplePayPayment.payment.billingContact
        },
        success: authorization => {
          let result = authorization.data;

          if (authorization.success === true) {
            redirectionUrl = result['returnUrl'];
            session.completePayment(result['responseToApple']);
            window.location.href = redirectionUrl;
          } else {
            session.completePayment(result);
          }
        },
        error: (XHR, status, error) => {
          session.abort();
        }
      });
    };

    session.begin();
  };

  const applePayMethodElement = document.querySelector('#mollie_applepay_button');
  const canShowButton = applePayMethodElement && ApplePaySession && ApplePaySession.canMakePayments();

  if (canShowButton) {
    applePayMethodElement.style.display = "block";
  }

  document.querySelector('#mollie_applepay_button').addEventListener('click', evt => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheURpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qcyJdLCJuYW1lcyI6WyIkIiwic2VsZWN0ZWRWYWx1ZSIsIm1vbGxpZURhdGEiLCJpbml0aWFsT3JkZXJUb3RhbCIsInRleHQiLCJjYXJkQWN0aXZlQ2xhc3MiLCJvcmRlclRvdGFsUm93IiwiY29tcG9uZW50cyIsIkJvb2xlYW4iLCJkYXRhIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZXN0b3JlT3JkZXJUb3RhbFZhbHVlIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiY3VycmVudEl0ZW0iLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwidmFsdWUiLCJnZXRQYXltZW50RmVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicGF5bWVudEZlZVJvdyIsImxlbmd0aCIsInZpZXciLCJyZXBsYWNlV2l0aCIsIm9yZGVyVG90YWwiLCJiZWZvcmUiLCJpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyIsImVudmlyb25tZW50IiwidGVzdG1vZGUiLCJtb2xsaWUiLCJNb2xsaWUiLCJsb2NhbGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZvcm1FcnJvciIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnV0dG9uIiwidG9rZW5GaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkSG9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwibW91bnQiLCJjYXJkSG9sZGVyRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJlcnJvciIsInRvdWNoZWQiLCJ0ZXh0Q29udGVudCIsImNhcmROdW1iZXIiLCJjYXJkTnVtYmVyRXJyb3IiLCJleHBpcnlEYXRlIiwiZXhwaXJ5RGF0ZUVycm9yIiwidmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGVFcnJvciIsImRpc2FibGVGb3JtIiwiZGlzYWJsZWQiLCJlbmFibGVGb3JtIiwidmFsIiwicHJldmVudERlZmF1bHQiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwibWVzc2FnZSIsInJlbW92ZSIsInRva2VuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJhcHBsZVBheSIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImNhbk1ha2VQYXltZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImFwcGxlUGF5U2Vzc2lvbiIsInZlcnNpb24iLCJkaXZpZGVyIiwiYXBwbGVQYXlCdXR0b24iLCJiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsIiwiZ2V0QXR0cmlidXRlIiwiYml0YmFnTW9sbGllUGF5bWVudFVybCIsImJpdGJhZ01vbGxpZUN1cnJlbmN5IiwiYml0YmFnTW9sbGllTWVyY2hhbnROYW1lIiwiYml0YmFnTW9sbGllVG90YWxPcmRlciIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInJlcXVlc3QiLCJvbnZhbGlkYXRlbWVyY2hhbnQiLCJhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudCIsImpRdWVyeSIsImFqYXgiLCJtZXRob2QiLCJ2YWxpZGF0aW9uVXJsIiwidmFsaWRhdGlvblVSTCIsInN1Y2Nlc3MiLCJtZXJjaGFudFNlc3Npb24iLCJjb21wbGV0ZU1lcmNoYW50VmFsaWRhdGlvbiIsIkpTT04iLCJwYXJzZSIsImFib3J0IiwiWEhSIiwic3RhdHVzIiwib25wYXltZW50YXV0aG9yaXplZCIsIkFwcGxlUGF5UGF5bWVudCIsInBheW1lbnQiLCJzaGlwcGluZ0NvbnRhY3QiLCJiaWxsaW5nQ29udGFjdCIsImF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJyZWRpcmVjdGlvblVybCIsImNvbXBsZXRlUGF5bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImJlZ2luIiwiYXBwbGVQYXlNZXRob2RFbGVtZW50IiwiY2FuU2hvd0J1dHRvbiIsImV2dCIsImNvdW50cnlDb2RlIiwiY3VycmVuY3lDb2RlIiwidG90YWxMYWJlbCIsInN1YnRvdGFsIiwic3VwcG9ydGVkTmV0d29ya3MiLCJtZXJjaGFudENhcGFiaWxpdGllcyIsInNoaXBwaW5nVHlwZSIsInJlcXVpcmVkQmlsbGluZ0NvbnRhY3RGaWVsZHMiLCJyZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkcyIsInRvdGFsIiwibGFiZWwiLCJhbW91bnQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFZO0FBQ1YsTUFBSUMsYUFBYSxHQUFHLEtBQXBCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHRixDQUFDLENBQUMsbUNBQUQsQ0FBbEI7QUFDQSxRQUFNRyxpQkFB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V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05BIiwiZmlsZSI6InBsdWdpbi1zaG9wLWVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgbW9sbGllRGF0YSA9ICQoXCIub25saW5lLW9ubGluZS1wYXltZW50X19jb250YWluZXJcIik7XG4gICAgY29uc3QgaW5pdGlhbE9yZGVyVG90YWwgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKS50ZXh0KCk7XG4gICAgY29uc3QgY2FyZEFjdGl2ZUNsYXNzID0gXCJvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlXCI7XG4gICAgY29uc3Qgb3JkZXJUb3RhbFJvdyA9ICQoJyNzeWxpdXMtc3VtbWFyeS1ncmFuZC10b3RhbCcpO1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBCb29sZWFuKG1vbGxpZURhdGEuZGF0YSgnY29tcG9uZW50cycpKTtcblxuICAgICQoJ2lucHV0W2lkKj1cInN5bGl1c19jaGVja291dF9zZWxlY3RfcGF5bWVudF9cIl1bdHlwZT1yYWRpb10nKS5vbignY2hhbmdlJywgKHtjdXJyZW50VGFyZ2V0fSkgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2xsaWUtcGF5bWVudHMnKSkge1xuICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9IGlucHV0W3R5cGU9XCJyYWRpb1wiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICQoYC4ke2NhcmRBY3RpdmVDbGFzc31gKS5yZW1vdmVDbGFzcyhjYXJkQWN0aXZlQ2xhc3MpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXRcIikub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gJChjdXJyZW50VGFyZ2V0KS5wYXJlbnQoJy5vbmxpbmUtcGF5bWVudF9faXRlbScpO1xuICAgICAgICBjdXJyZW50SXRlbS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBjdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmICghJCgnLm1vbGxpZS1wYXltZW50cycpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCgnLm1vbGxpZS1wYXltZW50cycpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmRhdGEoJ2ZlZXVybCcpKSB7XG4gICAgICAgICAgICBnZXRQYXltZW50RmVlKGN1cnJlbnRJdGVtLmRhdGEoJ2ZlZXVybCcpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGF5bWVudEZlZSh1cmwpIHtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudEZlZVJvdyA9ICQoJyNiaXRiYWctcGF5bWVudEZlZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXltZW50RmVlUm93Lmxlbmd0aCAmJiBkYXRhLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudEZlZVJvdy5yZXBsYWNlV2l0aChkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N5bGl1cy1jaGVja291dC1zdWJ0b3RhbCAudWkubGFyZ2UuaGVhZGVyJykuYmVmb3JlKGRhdGEudmlldylcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGRhdGEub3JkZXJUb3RhbClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKSB7XG4gICAgICAgICQoJyNiaXRiYWctcGF5bWVudEZlZS1yb3cnKS5yZXBsYWNlV2l0aCgnJylcbiAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGluaXRpYWxPcmRlclRvdGFsKVxuICAgIH1cblxuICAgIGlmIChtb2xsaWVEYXRhLmxlbmd0aCA+IDAgJiYgdHJ1ZSA9PT0gY29tcG9uZW50cykge1xuICAgICAgICBpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyhzZWxlY3RlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyhzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbW9sbGllRGF0YS5kYXRhKCdlbnZpcm9ubWVudCcpO1xuICAgICAgICBsZXQgdGVzdG1vZGUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChlbnZpcm9ubWVudCA9PT0gMSkge1xuICAgICAgICAgICAgdGVzdG1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vbGxpZSA9IE1vbGxpZShcbiAgICAgICAgICAgIG1vbGxpZURhdGEuZGF0YSgncHJvZmlsZV9pZCcpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogbW9sbGllRGF0YS5kYXRhKCdsb2NhbGUnKSxcbiAgICAgICAgICAgICAgICB0ZXN0bW9kZTogdGVzdG1vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRcIilbMF07XG5cbiAgICAgICAgY29uc3QgZm9ybUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWVycm9yXCIpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtc3RlcFwiKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1cy1wYXktbGlua1wiKTtcbiAgICAgICAgY29uc3QgdG9rZW5GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJfZGV0YWlsc19jYXJ0VG9rZW5cIl0nKTtcblxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImNhcmRIb2xkZXJcIik7XG5cbiAgICAgICAgY2FyZEhvbGRlci5tb3VudChcIiNjYXJkLWhvbGRlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaG9sZGVyLWVycm9yXCIpO1xuICAgICAgICBjYXJkSG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkSG9sZGVyRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkTnVtYmVyXCIpO1xuICAgICAgICBjYXJkTnVtYmVyLm1vdW50KFwiI2NhcmQtbnVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXJFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1udW1iZXItZXJyb3JcIik7XG5cbiAgICAgICAgY2FyZE51bWJlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZE51bWJlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyeURhdGUgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiZXhwaXJ5RGF0ZVwiKTtcbiAgICAgICAgZXhwaXJ5RGF0ZS5tb3VudChcIiNleHBpcnktZGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGlyeS1kYXRlLWVycm9yXCIpO1xuXG4gICAgICAgIGV4cGlyeURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGV4cGlyeURhdGVFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Db2RlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcInZlcmlmaWNhdGlvbkNvZGVcIik7XG4gICAgICAgIHZlcmlmaWNhdGlvbkNvZGUubW91bnQoXCIjdmVyaWZpY2F0aW9uLWNvZGVcIik7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJpZmljYXRpb24tY29kZS1lcnJvclwiKTtcblxuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25Db2RlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlRm9ybSgpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICgkKFwiLm9ubGluZS1wYXltZW50X19pbnB1dDpjaGVja2VkXCIpLnZhbCgpID09PSAnY3JlZGl0Y2FyZCcpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRpc2FibGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qge3Rva2VuLCBlcnJvcn0gPSBhd2FpdCBtb2xsaWUuY3JlYXRlVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1FcnJvci50ZXh0Q29udGVudCA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRva2VuXCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRva2VuKTtcblxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9rZW5JbnB1dCk7XG4gICAgICAgICAgICAgICAgdG9rZW5GaWVsZC52YWx1ZSA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwbGVQYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGxlcGF5XCIpO1xuXG4gICAgaWYgKGFwcGxlUGF5KSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uIHx8IEFwcGxlUGF5U2Vzc2lvbi5jYW5NYWtlUGF5bWVudHMoKSkge1xuICAgICAgICAgICAgYXBwbGVQYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFwcGxlUGF5U2Vzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IDM7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSAxMDA7XG5cbiAgICAgICAgY29uc3QgYXBwbGVQYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsLXZhbGlkYXRlJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZVBheW1lbnRVcmwgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsLXBheW1lbnQnKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllQ3VycmVuY3kgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVuY3ktb3JkZXInKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllTWVyY2hhbnROYW1lID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLW1lcmNoYW50LW5hbWUnKTtcblxuICAgICAgICBsZXQgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1vcmRlcicpO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlciAvIGRpdmlkZXI7XG4gICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG5ldyBBcHBsZVBheVNlc3Npb24odmVyc2lvbiwgcmVxdWVzdChcbiAgICAgICAgICAgICdVUycsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVDdXJyZW5jeSxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXJcbiAgICAgICAgKSk7XG5cbiAgICAgICAgc2Vzc2lvbi5vbnZhbGlkYXRlbWVyY2hhbnQgPSAoYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVXJsOiBhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudC52YWxpZGF0aW9uVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKG1lcmNoYW50U2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVyY2hhbnRTZXNzaW9uLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVNZXJjaGFudFZhbGlkYXRpb24oSlNPTi5wYXJzZShtZXJjaGFudFNlc3Npb24uZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChYSFIsIHN0YXR1cywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXNzaW9uLm9ucGF5bWVudGF1dGhvcml6ZWQgPSAoQXBwbGVQYXlQYXltZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVQYXltZW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0NvbnRhY3Q6IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LnNoaXBwaW5nQ29udGFjdCxcbiAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0NvbnRhY3Q6IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LmJpbGxpbmdDb250YWN0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoYXV0aG9yaXphdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXV0aG9yaXphdGlvbi5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRob3JpemF0aW9uLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0aW9uVXJsID0gcmVzdWx0WydyZXR1cm5VcmwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVQYXltZW50KHJlc3VsdFsncmVzcG9uc2VUb0FwcGxlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0aW9uVXJsXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXNzaW9uLmJlZ2luKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwbGVQYXlNZXRob2RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKVxuXG4gICAgY29uc3QgY2FuU2hvd0J1dHRvbiA9IGFwcGxlUGF5TWV0aG9kRWxlbWVudCAmJiAoQXBwbGVQYXlTZXNzaW9uICYmIEFwcGxlUGF5U2Vzc2lvbi5jYW5NYWtlUGF5bWVudHMoKSlcbiAgICBpZiAoY2FuU2hvd0J1dHRvbikge1xuICAgICAgICBhcHBsZVBheU1ldGhvZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICBhcHBsZVBheVNlc3Npb24oKVxuICAgIH0pXG59KTtcbiIsImZ1bmN0aW9uIHJlcXVlc3QoY291bnRyeUNvZGUsIGN1cnJlbmN5Q29kZSwgdG90YWxMYWJlbCwgc3VidG90YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb3VudHJ5Q29kZTogY291bnRyeUNvZGUsXG4gICAgICAgIGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlLFxuICAgICAgICBzdXBwb3J0ZWROZXR3b3JrczogWydhbWV4JywgJ21hZXN0cm8nLCAnbWFzdGVyQ2FyZCcsICd2aXNhJywgJ3ZQYXknXSxcbiAgICAgICAgbWVyY2hhbnRDYXBhYmlsaXRpZXM6IFsnc3VwcG9ydHMzRFMnXSxcbiAgICAgICAgc2hpcHBpbmdUeXBlOiAnc2hpcHBpbmcnLFxuICAgICAgICByZXF1aXJlZEJpbGxpbmdDb250YWN0RmllbGRzOiBbXG4gICAgICAgICAgICAncG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgICAnZW1haWwnXG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVpcmVkU2hpcHBpbmdDb250YWN0RmllbGRzOiBbXG4gICAgICAgICAgICAncG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgICAnZW1haWwnXG4gICAgICAgIF0sXG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICBsYWJlbDogdG90YWxMYWJlbCxcbiAgICAgICAgICAgIGFtb3VudDogc3VidG90YWwsXG4gICAgICAgICAgICB0eXBlOiAnZmluYWwnXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYXBwJztcbmltcG9ydCAnLi9hcHBsZVBheURpcmVjdCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0ICcuL2pzL21haW4nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==