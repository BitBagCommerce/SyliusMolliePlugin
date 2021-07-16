/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../src/Resources/assets/admin/js/main.js":
/*!***************************************************!*\
  !*** ../../src/Resources/assets/admin/js/main.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _molliePayments_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molliePayments/main */ "../../src/Resources/assets/admin/js/molliePayments/main.js");
/* harmony import */ var _onboardingWizard_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboardingWizard/main */ "../../src/Resources/assets/admin/js/onboardingWizard/main.js");



/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/app.js":
/*!*****************************************************************!*\
  !*** ../../src/Resources/assets/admin/js/molliePayments/app.js ***!
  \*****************************************************************/
/***/ (() => {

$(function () {
  var mollieFormIncluded = document.getElementById("mollie-payment-form");

  if (!mollieFormIncluded) {
    return;
  }

  $("#get_methods").on('click', function () {
    var form = $(".ui.form");
    form.addClass('loading');
    $.ajax({
      type: "GET",
      url: $(this).data('url'),
      success: function success(data) {
        location.reload();
      },
      error: function error() {
        location.reload();
      }
    });
  });
  $('.ui.dropdown').dropdown();
  $(".form_button--delete-img").each(function (index, value) {
    $(this).on('click', function () {
      var form = $(".ui.form");
      var value = $(this).data('value');
      form.addClass('loading');
      $.ajax({
        data: {
          method: value
        },
        type: "DELETE",
        url: $(this).data('url'),
        success: function success(data) {
          location.reload();
        },
        error: function error() {
          form.removeClass('loading');
        }
      });
    });
  });
  $(".bitbag-mollie-components").change(function () {
    if ($(this).is(':checked')) {
      $('.bitbag-single-click-payment').prop('checked', !$(this).is(':checked'));
    }
  });
  $(".bitbag-single-click-payment").change(function () {
    if ($(this).is(':checked')) {
      $('.bitbag-mollie-components').prop('checked', !$(this).is(':checked'));
    }
  });
  $('[id$="_paymentType"]').each(function (index) {
    setPaymentDescription($(this), index);
    $(this).on('change', function (event) {
      setPaymentDescription($(event.target), index);
    });
  });

  function setPaymentDescription(select) {
    var $targetMethod = select.closest('.js-draggable');
    var $inputOrderNumber = $targetMethod.find('[id$="_paymentDescription"]');
    var $descriptionOrderNumber = $targetMethod.find('[id^="payment_description_"]');

    if (select.find(':selected').val() === 'PAYMENT_API') {
      $inputOrderNumber.show();
      $descriptionOrderNumber.show();
    } else {
      $inputOrderNumber.hide();
      $descriptionOrderNumber.hide();
    }
  }

  $('[id$="_paymentSurchargeFee_type"]').each(function (index) {
    var value = $(this).find(":selected").val();
    setPaymentFeeFields(value, index);
    $(this).on('change', function () {
      var value = $(this).val();
      setPaymentFeeFields(value, index);
    });
  });

  function setPaymentFeeFields(value, index) {
    var fixedAmount = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_' + index + '_paymentSurchargeFee_fixedAmount';
    var percentage = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_' + index + '_paymentSurchargeFee_percentage';
    var surchargeLimit = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_' + index + '_paymentSurchargeFee_surchargeLimit';

    if (value === 'no_fee') {
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').hide();
      $('label[for=' + percentage + '], input#' + percentage + '').hide();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').hide();
    }

    if (value === 'percentage') {
      $('label[for=' + percentage + '], input#' + percentage + '').show();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').show();
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').hide();
    }

    if (value === 'fixed_fee') {
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').show();
      $('label[for=' + percentage + '], input#' + percentage + '').hide();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').hide();
    }

    if (value === 'fixed_fee_and_percentage') {
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').show();
      $('label[for=' + percentage + '], input#' + percentage + '').show();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').show();
    }
  }

  $('[id$="_country_restriction"]').each(function (index) {
    var value = $(this).find(":selected").val();
    setCountryRestriction(value, index);
    $(this).on('change', function () {
      var value = $(this).val();
      setCountryRestriction(value, index);
    });
  });

  function setCountryRestriction(value, index) {
    var excludeCountries = $('#country-excluded_' + index);
    var allowCountries = $('#country-allowed_' + index);

    if (value === 'ALL_COUNTRIES') {
      excludeCountries.show();
      allowCountries.hide();
    }

    if (value === 'SELECTED_COUNTRIES') {
      excludeCountries.hide();
      allowCountries.show();
    }
  }
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/main.js":
/*!******************************************************************!*\
  !*** ../../src/Resources/assets/admin/js/molliePayments/main.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../../src/Resources/assets/admin/js/molliePayments/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _showHideApiKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHideApiKeys */ "../../src/Resources/assets/admin/js/molliePayments/showHideApiKeys.js");
/* harmony import */ var _showHideApiKeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_showHideApiKeys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortable */ "../../src/Resources/assets/admin/js/molliePayments/sortable.js");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sortable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _testApiKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testApiKeys */ "../../src/Resources/assets/admin/js/molliePayments/testApiKeys.js");
/* harmony import */ var _testApiKeys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_testApiKeys__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/showHideApiKeys.js":
/*!*****************************************************************************!*\
  !*** ../../src/Resources/assets/admin/js/molliePayments/showHideApiKeys.js ***!
  \*****************************************************************************/
/***/ (() => {

$(function () {
  var testApiKeyButton = document.getElementById("api_key_test");
  var liveApiKeyButton = document.getElementById("api_key_live");
  $(testApiKeyButton).on('click', function (event) {
    var testApiKeyInput = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_test");

    if (testApiKeyInput.type === 'password') {
      testApiKeyInput.type = 'text';
      return;
    }

    testApiKeyInput.type = 'password';
  });
  $(liveApiKeyButton).on('click', function (event) {
    var liveApiKeyInput = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_live");

    if (liveApiKeyInput.type === 'password') {
      liveApiKeyInput.type = 'text';
      return;
    }

    liveApiKeyInput.type = 'password';
  });
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/sortable.js":
/*!**********************************************************************!*\
  !*** ../../src/Resources/assets/admin/js/molliePayments/sortable.js ***!
  \**********************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(function () {
  var container = document.querySelector('.js-sortable');

  if (!container) {
    return;
  }

  var draggables = document.querySelectorAll('.js-draggable');
  draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', function () {
      draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', function () {
      draggable.classList.remove('dragging');
      var payload = getPaymentMethodPositions();
      changePositionAjaxAction(payload);
    });
  });
  container.addEventListener('dragover', function (event) {
    event.preventDefault();
    var afterElement = getDragAfterElement(container, event.clientY);
    var draggable = document.querySelector('.dragging');

    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });

  function getPaymentMethodPositions() {
    var draggables = _toConsumableArray(container.querySelectorAll('.js-draggable'));

    var updatedPositions = [];
    draggables.map(function (item, index) {
      var paymentMethod = item.dataset.paymentMethod;
      updatedPositions.push({
        id: index,
        name: paymentMethod
      });
    });
    return updatedPositions;
  }

  function getDragAfterElement(container, y) {
    var draggableElements = _toConsumableArray(container.querySelectorAll('.js-draggable:not(.dragging)'));

    return draggableElements.reduce(function (closest, child) {
      var box = child.getBoundingClientRect();
      var offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return {
          offset: offset,
          element: child
        };
      } else {
        return closest;
      }
    }, {
      offset: Number.NEGATIVE_INFINITY
    }).element;
  }

  function changePositionAjaxAction(data) {
    var url = document.getElementById("payment_methods").getAttribute('data-ajax-url');
    $.ajax({
      type: "GET",
      url: url,
      data: {
        'data': data
      },
      success: function success(data) {},
      error: function error() {}
    });
  }
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/testApiKeys.js":
/*!*************************************************************************!*\
  !*** ../../src/Resources/assets/admin/js/molliePayments/testApiKeys.js ***!
  \*************************************************************************/
/***/ (() => {

$(function () {
  var testApiKeyButton = document.getElementsByClassName(" test-api-key-button");
  $(testApiKeyButton).on('click', function (event) {
    var testApiDataDiv = document.getElementsByClassName("test-api-key-div");
    var testApiKey = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_test");
    var liveApiKey = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_live");
    $(this).addClass('loading');
    $(this).attr('disabled', true);
    $.ajax({
      type: "GET",
      url: $(this).data('url'),
      data: {
        api_key_test: $(testApiKey).val(),
        api_key_live: $(liveApiKey).val()
      },
      success: function success(data) {
        $(testApiDataDiv).removeClass('message red');
        $(testApiKeyButton).removeClass('loading');
        $(testApiKeyButton).removeAttr('disabled');
        $(testApiDataDiv).html(data);
      },
      error: function error(_error) {}
    });
  });
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/main.js":
/*!********************************************************************!*\
  !*** ../../src/Resources/assets/admin/js/onboardingWizard/main.js ***!
  \********************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/main.js: Invalid left-hand side in assignment expression. (5:8)\n\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[90m// tour.initTour();\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mconst\u001b[39m handleTour \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 |\u001b[39m     \u001b[36mif\u001b[39m (getTourCompletitionInfo() \u001b[33m=\u001b[39m \u001b[32m'dupa'\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m         tour\u001b[33m.\u001b[39minitTour\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 8 |\u001b[39m     \u001b[36melse\u001b[39m {\u001b[0m\n    at Parser._raise (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:816:17)\n    at Parser.raiseWithData (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:809:17)\n    at Parser.raise (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:770:17)\n    at Parser.checkLVal (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:10472:16)\n    at Parser.parseMaybeAssign (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:10655:12)\n    at Parser.parseExpressionBase (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:10573:23)\n    at /Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:10567:39\n    at Parser.allowInAnd (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:12334:12)\n    at Parser.parseExpression (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:10567:17)\n    at Parser.parseHeaderExpression (/Users/admin/Desktop/PRACA/SyliusMolliePlugin/tests/Application/node_modules/@babel/parser/lib/index.js:12803:22)");

/***/ }),

/***/ "../../src/Resources/assets/admin/css/main.scss":
/*!******************************************************!*\
  !*** ../../src/Resources/assets/admin/css/main.scss ***!
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
/*!*************************************************!*\
  !*** ../../src/Resources/assets/admin/entry.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "../../src/Resources/assets/admin/css/main.scss");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "../../src/Resources/assets/admin/js/main.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvYXBwLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9tb2xsaWVQYXltZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9tb2xsaWVQYXltZW50cy9zaG93SGlkZUFwaUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21vbGxpZVBheW1lbnRzL3NvcnRhYmxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9tb2xsaWVQYXltZW50cy90ZXN0QXBpS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2VudHJ5LmpzIl0sIm5hbWVzIjpbIiQiLCJtb2xsaWVGb3JtSW5jbHVkZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib24iLCJmb3JtIiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImRyb3Bkb3duIiwiZWFjaCIsImluZGV4IiwidmFsdWUiLCJtZXRob2QiLCJyZW1vdmVDbGFzcyIsImNoYW5nZSIsImlzIiwicHJvcCIsInNldFBheW1lbnREZXNjcmlwdGlvbiIsImV2ZW50IiwidGFyZ2V0Iiwic2VsZWN0IiwiJHRhcmdldE1ldGhvZCIsImNsb3Nlc3QiLCIkaW5wdXRPcmRlck51bWJlciIsImZpbmQiLCIkZGVzY3JpcHRpb25PcmRlck51bWJlciIsInZhbCIsInNob3ciLCJoaWRlIiwic2V0UGF5bWVudEZlZUZpZWxkcyIsImZpeGVkQW1vdW50IiwicGVyY2VudGFnZSIsInN1cmNoYXJnZUxpbWl0Iiwic2V0Q291bnRyeVJlc3RyaWN0aW9uIiwiZXhjbHVkZUNvdW50cmllcyIsImFsbG93Q291bnRyaWVzIiwidGVzdEFwaUtleUJ1dHRvbiIsImxpdmVBcGlLZXlCdXR0b24iLCJ0ZXN0QXBpS2V5SW5wdXQiLCJsaXZlQXBpS2V5SW5wdXQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZHJhZ2dhYmxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJhZ2dhYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBheWxvYWQiLCJnZXRQYXltZW50TWV0aG9kUG9zaXRpb25zIiwiY2hhbmdlUG9zaXRpb25BamF4QWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZnRlckVsZW1lbnQiLCJnZXREcmFnQWZ0ZXJFbGVtZW50IiwiY2xpZW50WSIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwidXBkYXRlZFBvc2l0aW9ucyIsIm1hcCIsIml0ZW0iLCJwYXltZW50TWV0aG9kIiwiZGF0YXNldCIsInB1c2giLCJpZCIsIm5hbWUiLCJ5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJyZWR1Y2UiLCJjaGlsZCIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsImVsZW1lbnQiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsImdldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZXN0QXBpRGF0YURpdiIsInRlc3RBcGlLZXkiLCJsaXZlQXBpS2V5IiwiYXR0ciIsImFwaV9rZXlfdGVzdCIsImFwaV9rZXlfbGl2ZSIsInJlbW92ZUF0dHIiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQ0FBLENBQUMsQ0FBQyxZQUFZO0FBQ1YsTUFBTUMsa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBM0I7O0FBRUEsTUFBSSxDQUFDRixrQkFBTCxFQUF5QjtBQUNyQjtBQUNIOztBQUVERCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSSxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDLFFBQUlDLElBQUksR0FBR0wsQ0FBQyxDQUFDLFVBQUQsQ0FBWjtBQUNBSyxRQUFJLENBQUNDLFFBQUwsQ0FBYyxTQUFkO0FBRUFOLEtBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0hDLFVBQUksRUFBRSxLQURIO0FBRUhDLFNBQUcsRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsS0FBYixDQUZGO0FBR0hDLGFBQU8sRUFBRSxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQkUsZ0JBQVEsQ0FBQ0MsTUFBVDtBQUNILE9BTEU7QUFNSEMsV0FBSyxFQUFFLGlCQUFZO0FBQ2ZGLGdCQUFRLENBQUNDLE1BQVQ7QUFDSDtBQVJFLEtBQVA7QUFVSCxHQWREO0FBZ0JBYixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCZSxRQUFsQjtBQUVBZixHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdCLElBQTlCLENBQW1DLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3ZEbEIsS0FBQyxDQUFDLElB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QWlCLENBQ3ZCO0FBZkUsS0FBUDtBQWlCSCxHQXpCRDtBQTBCSCxDQTdCQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05BIiwiZmlsZSI6InBsdWdpbi1hZG1pbi1lbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tb2xsaWVQYXltZW50cy9tYWluJztcbmltcG9ydCAnLi9vbmJvYXJkaW5nV2l6YXJkL21haW4nO1xuIiwiXG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtb2xsaWVGb3JtSW5jbHVkZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbGxpZS1wYXltZW50LWZvcm1cIik7XG5cbiAgICBpZiAoIW1vbGxpZUZvcm1JbmNsdWRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJChcIiNnZXRfbWV0aG9kc1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBmb3JtID0gJChcIi51aS5mb3JtXCIpO1xuICAgICAgICBmb3JtLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLnVpLmRyb3Bkb3duJykuZHJvcGRvd24oKTtcblxuICAgICQoXCIuZm9ybV9idXR0b24tLWRlbGV0ZS1pbWdcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGZvcm0gPSAkKFwiLnVpLmZvcm1cIik7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBmb3JtLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YToge21ldGhvZDogdmFsdWV9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgJChcIi5iaXRiYWctbW9sbGllLWNvbXBvbmVudHNcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoJy5iaXRiYWctc2luZ2xlLWNsaWNrLXBheW1lbnQnKS5wcm9wKCdjaGVja2VkJywgISQodGhpcykuaXMoJzpjaGVja2VkJykpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCIuYml0YmFnLXNpbmdsZS1jbGljay1wYXltZW50XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKCcuYml0YmFnLW1vbGxpZS1jb21wb25lbnRzJykucHJvcCgnY2hlY2tlZCcsICEkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCdbaWQkPVwiX3BheW1lbnRUeXBlXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc2V0UGF5bWVudERlc2NyaXB0aW9uKCQodGhpcyksIGluZGV4KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHNldFBheW1lbnREZXNjcmlwdGlvbigkKGV2ZW50LnRhcmdldCksIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldFBheW1lbnREZXNjcmlwdGlvbihzZWxlY3QpIHtcbiAgICAgICAgY29uc3QgJHRhcmdldE1ldGhvZCA9IHNlbGVjdC5jbG9zZXN0KCcuanMtZHJhZ2dhYmxlJyk7XG4gICAgICAgIGNvbnN0ICRpbnB1dE9yZGVyTnVtYmVyID0gJHRhcmdldE1ldGhvZC5maW5kKCdbaWQkPVwiX3BheW1lbnREZXNjcmlwdGlvblwiXScpO1xuICAgICAgICBjb25zdCAkZGVzY3JpcHRpb25PcmRlck51bWJlciA9ICR0YXJnZXRNZXRob2QuZmluZCgnW2lkXj1cInBheW1lbnRfZGVzY3JpcHRpb25fXCJdJyk7XG5cbiAgICAgICAgaWYgKHNlbGVjdC5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKSA9PT0gJ1BBWU1FTlRfQVBJJykge1xuICAgICAgICAgICAgJGlucHV0T3JkZXJOdW1iZXIuc2hvdygpO1xuICAgICAgICAgICAgJGRlc2NyaXB0aW9uT3JkZXJOdW1iZXIuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGlucHV0T3JkZXJOdW1iZXIuaGlkZSgpO1xuICAgICAgICAgICAgJGRlc2NyaXB0aW9uT3JkZXJOdW1iZXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAkKCdbaWQkPVwiX3BheW1lbnRTdXJjaGFyZ2VGZWVfdHlwZVwiXScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBzZXRQYXltZW50RmVlRmllbGRzKHZhbHVlLCBpbmRleCk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgc2V0UGF5bWVudEZlZUZpZWxkcyh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2V0UGF5bWVudEZlZUZpZWxkcyh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZml4ZWRBbW91bnQgPSAnc3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfbW9sbGllR2F0ZXdheUNvbmZpZ18nKyBpbmRleCArJ19wYXltZW50U3VyY2hhcmdlRmVlX2ZpeGVkQW1vdW50JztcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICdzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19tb2xsaWVHYXRld2F5Q29uZmlnXycrIGluZGV4ICsnX3BheW1lbnRTdXJjaGFyZ2VGZWVfcGVyY2VudGFnZSc7XG4gICAgICAgIGNvbnN0IHN1cmNoYXJnZUxpbWl0ID0gJ3N5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX21vbGxpZUdhdGV3YXlDb25maWdfJysgaW5kZXggKydfcGF5bWVudFN1cmNoYXJnZUZlZV9zdXJjaGFyZ2VMaW1pdCc7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnbm9fZmVlJykge1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrZml4ZWRBbW91bnQrJ10sIGlucHV0IycrZml4ZWRBbW91bnQrJycpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3BlcmNlbnRhZ2UrJ10sIGlucHV0IycrcGVyY2VudGFnZSsnJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrc3VyY2hhcmdlTGltaXQrJ10sIGlucHV0Iycrc3VyY2hhcmdlTGltaXQrJycpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09ICdwZXJjZW50YWdlJykge1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrcGVyY2VudGFnZSsnXSwgaW5wdXQjJytwZXJjZW50YWdlKycnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytzdXJjaGFyZ2VMaW1pdCsnXSwgaW5wdXQjJytzdXJjaGFyZ2VMaW1pdCsnJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrZml4ZWRBbW91bnQrJ10sIGlucHV0IycrZml4ZWRBbW91bnQrJycpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09ICdmaXhlZF9mZWUnKSB7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytmaXhlZEFtb3VudCsnXSwgaW5wdXQjJytmaXhlZEFtb3VudCsnJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrcGVyY2VudGFnZSsnXSwgaW5wdXQjJytwZXJjZW50YWdlKycnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytzdXJjaGFyZ2VMaW1pdCsnXSwgaW5wdXQjJytzdXJjaGFyZ2VMaW1pdCsnJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ2ZpeGVkX2ZlZV9hbmRfcGVyY2VudGFnZScpIHtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK2ZpeGVkQW1vdW50KyddLCBpbnB1dCMnK2ZpeGVkQW1vdW50KycnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytwZXJjZW50YWdlKyddLCBpbnB1dCMnK3BlcmNlbnRhZ2UrJycpLnNob3coKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3N1cmNoYXJnZUxpbWl0KyddLCBpbnB1dCMnK3N1cmNoYXJnZUxpbWl0KycnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkKCdbaWQkPVwiX2NvdW50cnlfcmVzdHJpY3Rpb25cIl0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgc2V0Q291bnRyeVJlc3RyaWN0aW9uKHZhbHVlLCBpbmRleCk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgc2V0Q291bnRyeVJlc3RyaWN0aW9uKHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2V0Q291bnRyeVJlc3RyaWN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBleGNsdWRlQ291bnRyaWVzID0gJCgnI2NvdW50cnktZXhjbHVkZWRfJyArIGluZGV4KTtcbiAgICAgICAgY29uc3QgYWxsb3dDb3VudHJpZXMgPSAkKCcjY291bnRyeS1hbGxvd2VkXycgKyBpbmRleCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnQUxMX0NPVU5UUklFUycpIHtcbiAgICAgICAgICAgIGV4Y2x1ZGVDb3VudHJpZXMuc2hvdygpO1xuICAgICAgICAgICAgYWxsb3dDb3VudHJpZXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1NFTEVDVEVEX0NPVU5UUklFUycpIHtcbiAgICAgICAgICAgIGV4Y2x1ZGVDb3VudHJpZXMuaGlkZSgpO1xuICAgICAgICAgICAgYWxsb3dDb3VudHJpZXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgJy4vYXBwJztcbmltcG9ydCAnLi9zaG93SGlkZUFwaUtleXMnO1xuaW1wb3J0ICcuL3NvcnRhYmxlJztcbmltcG9ydCAnLi90ZXN0QXBpS2V5cyc7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0ZXN0QXBpS2V5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcGlfa2V5X3Rlc3RcIik7XG4gICAgY29uc3QgbGl2ZUFwaUtleUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpX2tleV9saXZlXCIpO1xuXG4gICAgJCh0ZXN0QXBpS2V5QnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGVzdEFwaUtleUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19jb25maWdfYXBpX2tleV90ZXN0XCIpO1xuXG4gICAgICAgIGlmICh0ZXN0QXBpS2V5SW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgdGVzdEFwaUtleUlucHV0LnR5cGUgPSAndGV4dCc7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRlc3RBcGlLZXlJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICB9KTtcblxuICAgICQobGl2ZUFwaUtleUJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxpdmVBcGlLZXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfY29uZmlnX2FwaV9rZXlfbGl2ZVwiKTtcblxuICAgICAgICBpZiAobGl2ZUFwaUtleUlucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgIGxpdmVBcGlLZXlJbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsaXZlQXBpS2V5SW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgfSk7XG59KTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc29ydGFibGUnKTtcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZHJhZ2dhYmxlJyk7XG5cbiAgZHJhZ2dhYmxlcy5mb3JFYWNoKGRyYWdnYWJsZSA9PiB7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIH0pXG5cbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgICAgY29uc3QgcGF5bG9hZCA9IGdldFBheW1lbnRNZXRob2RQb3NpdGlvbnMoKTtcbiAgICAgIGNoYW5nZVBvc2l0aW9uQWpheEFjdGlvbihwYXlsb2FkKTtcbiAgICB9KTtcbiAgfSlcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFmdGVyRWxlbWVudCA9IGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICBpZiAoYWZ0ZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZSwgYWZ0ZXJFbGVtZW50KTtcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0UGF5bWVudE1ldGhvZFBvc2l0aW9ucyAoKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRyYWdnYWJsZScpXTtcbiAgICBjb25zdCB1cGRhdGVkUG9zaXRpb25zID0gW107XG5cbiAgICBkcmFnZ2FibGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF5bWVudE1ldGhvZCB9ID0gaXRlbS5kYXRhc2V0O1xuICAgICAgdXBkYXRlZFBvc2l0aW9ucy5wdXNoKHsgaWQ6IGluZGV4LCBuYW1lOiBwYXltZW50TWV0aG9kIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXBkYXRlZFBvc2l0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB5KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kcmFnZ2FibGU6bm90KC5kcmFnZ2luZyknKV07XG5cbiAgICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSB5IC0gYm94LnRvcCAtIGJveC5oZWlnaHQgLyAyO1xuICAgICAgaWYgKG9mZnNldCA8IDAgJiYgb2Zmc2V0ID4gY2xvc2VzdC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0OiBvZmZzZXQsIGVsZW1lbnQ6IGNoaWxkIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgICAgfVxuXG4gICAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbkFqYXhBY3Rpb24oZGF0YSkge1xuICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5bWVudF9tZXRob2RzXCIpLmdldEF0dHJpYnV0ZSgnZGF0YS1hamF4LXVybCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IHsnZGF0YSc6IGRhdGF9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHt9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGVzdEFwaUtleUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCIgdGVzdC1hcGkta2V5LWJ1dHRvblwiKTtcblxuICAgICQodGVzdEFwaUtleUJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRlc3RBcGlEYXRhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRlc3QtYXBpLWtleS1kaXZcIilcbiAgICAgICAgY29uc3QgdGVzdEFwaUtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfY29uZmlnX2FwaV9rZXlfdGVzdFwiKVxuICAgICAgICBjb25zdCBsaXZlQXBpS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19jb25maWdfYXBpX2tleV9saXZlXCIpXG5cbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuZGF0YSgndXJsJyksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYXBpX2tleV90ZXN0OiAkKHRlc3RBcGlLZXkpLnZhbCgpLFxuICAgICAgICAgICAgICAgIGFwaV9rZXlfbGl2ZTogJChsaXZlQXBpS2V5KS52YWwoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICQodGVzdEFwaURhdGFEaXYpLnJlbW92ZUNsYXNzKCdtZXNzYWdlIHJlZCcpO1xuXG4gICAgICAgICAgICAgICAgJCh0ZXN0QXBpS2V5QnV0dG9uKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICQodGVzdEFwaUtleUJ1dHRvbikucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkKHRlc3RBcGlEYXRhRGl2KS5odG1sKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vanMvbWFpbic7XG4iXSwic291cmNlUm9vdCI6IiJ9