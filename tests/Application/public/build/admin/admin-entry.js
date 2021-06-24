/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/admin/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/Resources/assets/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/Resources/assets/css/main.scss":
/*!****************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/css/main.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../src/Resources/assets/entry.js":
/*!***********************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/entry.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "../../src/Resources/assets/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "../../src/Resources/assets/js/main.js");



/***/ }),

/***/ "../../src/Resources/assets/js/main.js":
/*!*************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/main.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onboardingWizard_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboardingWizard/main */ "../../src/Resources/assets/js/onboardingWizard/main.js");


/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/OnboardingWizard.js":
/*!******************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/OnboardingWizard.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onboardingWizard; });
/* harmony import */ var shepherd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shepherd.js */ "./node_modules/shepherd.js/dist/js/shepherd.esm.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/steps */ "../../src/Resources/assets/js/onboardingWizard/config/steps.js");
/* harmony import */ var _config_shepherdConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/shepherdConfig */ "../../src/Resources/assets/js/onboardingWizard/config/shepherdConfig.js");
/* harmony import */ var _helpers_stepFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/stepFactory */ "../../src/Resources/assets/js/onboardingWizard/helpers/stepFactory.js");
/* harmony import */ var _config_wizardTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/wizardTranslations */ "../../src/Resources/assets/js/onboardingWizard/config/wizardTranslations.js");






class onboardingWizard {
  constructor(tourSteps = _config_steps__WEBPACK_IMPORTED_MODULE_2__["steps"], tourConfig = _config_shepherdConfig__WEBPACK_IMPORTED_MODULE_3__["default"], tourQuitConfirmation = _config_steps__WEBPACK_IMPORTED_MODULE_2__["stepQuitConfirmation"]) {
    this.steps = Object(_helpers_stepFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(tourSteps);
    this.stepQuitConfirmation = Object(_helpers_stepFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(tourQuitConfirmation)[0];
    this.tourConfig = tourConfig;
    this.navbar = document.querySelector('.js-onboarding-wizard');
    this.navBarItems = [...this.navbar.querySelectorAll('.js-onboarding-wizard-progress')];
    this.previousStepIndex = 0;
  }

  modalCollapseHandler() {
    const currentStep = this.tour.currentStep.el;
    const buttonCollapse = currentStep.querySelector('.js-tour-collapse');
    const isCollapsed = [...currentStep.classList].includes('shepherd-element--collapsed');
    const expandButton = document.createElement('span');
    expandButton.classList.add('shepherd-button__open');
    expandButton.classList.add('js-shepherd-expand');
    expandButton.textContent = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_5__["default"], 'common.open');
    const textOpen = buttonCollapse.querySelector('.js-shepherd-expand');

    if (isCollapsed) {
      buttonCollapse.removeChild(textOpen);
    } else {
      buttonCollapse.appendChild(expandButton);
    }

    currentStep.classList.toggle('shepherd-element--collapsed', !isCollapsed);
    currentStep.setAttribute('aria-hidden', !isCollapsed);
  }

  handleQuitConfirmation() {
    const returnStepIndex = this.previousStepIndex;
    this.tour.addStep({ ...this.stepQuitConfirmation,
      buttons: this.stepQuitConfirmation.stepButtons(this, returnStepIndex)
    });
    this.tour.show('step-quit-confirmation', true);
  }

  navbarVisibilityHandler(isActive) {
    this.navbar.classList.toggle('d-none', !isActive);
    this.navbar.setAttribute('aria-hidden', !isActive);
  }

  navbarProgressHandler() {
    const currentStepProgress = this.tour.getCurrentStep().options.highlightClass;
    this.navBarItems.forEach(navBarItem => {
      if (navBarItem.getAttribute('data-navigation-step') === currentStepProgress) {
        navBarItem.classList.add('onboarding-wizard__step--current');
      } else {
        navBarItem.classList.remove('onboarding-wizard__step--current');
      }
    });
  }

  restartTourListener() {
    const restartTourTrigger = document.querySelector('.js-restart-tour');
    restartTourTrigger.addEventListener('click', () => {
      this.tour.start();
      this.navbar.classList.toggle('d-none');
    });
  }

  initTour() {
    if (this.navbar) {
      this.tour = new shepherd_js__WEBPACK_IMPORTED_MODULE_0__["default"].Tour({ ...this.tourConfig
      });
      this.steps.forEach((step, stepIndex) => {
        this.tour.addStep({ ...step,
          buttons: step.stepButtons(this, stepIndex),
          when: {
            show: () => {
              this.previousStepIndex = this.tour.getCurrentStep().id;
              this.navbarProgressHandler();
            }
          }
        });
      });
      this.tour.on('complete', () => {
        this.navbarVisibilityHandler(false);
      });
      this.tour.start();
      this.restartTourListener();
    }
  }

}

/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/config/shepherdConfig.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/config/shepherdConfig.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  useModalOverlay: true,
  confirmCancel: false,
  keyboardNavigation: false,
  exitOnEsc: false,
  defaultStepOptions: {
    class: 'onboardingWizard-popup',
    arrow: false,
    cancelIcon: {
      enabled: false
    },
    scrollTo: {
      behavior: 'smooth',
      block: 'center'
    },
    modalOverlayOpeningRadius: 4
  }
});

/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/config/steps.js":
/*!**************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/config/steps.js ***!
  \**************************************************************************************************************/
/*! exports provided: stepPaymentType, stepPaymentDescription, stepOrderApi, stepQuitConfirmation, steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepPaymentType", function() { return stepPaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepPaymentDescription", function() { return stepPaymentDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepOrderApi", function() { return stepOrderApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepQuitConfirmation", function() { return stepQuitConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var _helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/filterMethod */ "../../src/Resources/assets/js/onboardingWizard/helpers/filterMethod.js");

const paymentMethodPaymentApi = 'PAYMENT_API';
const paymentMethodOrderApi = 'ORDER_API';
const enviromentTest = '0';
const enviromentLive = '1';
const stepPaymentType = {
  id: 'step-payment-type',
  text: 'stepPaymentType.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'payment-settings',
  attachTo: {
    element: '.js-onboardingWizard-paymentType',
    on: 'top-start'
  },
  btnNextClass: 'shepherd-button--arrow-down'
};
const stepPaymentDescription = {
  id: 'step-payment-description',
  text: 'stepPaymentDescription.text',
  classes: 'shepherd-element--align-right',
  attachTo: {
    element: '.js-onboardingWizard-paymentDescription',
    on: 'top-start'
  },
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down'
};
const stepOrderApi = {
  id: 'step-order-api',
  highlightClass: 'payment-settings',
  classes: 'shepherd-element--align-right',
  text: 'stepOrderApi.text',
  attachTo: {
    element: '.js-onboardingWizard-paymentType',
    on: 'top-start'
  },
  btnNextClass: 'shepherd-button--arrow-down'
};
const stepQuitConfirmation = [{
  id: 'step-quit-confirmation',
  title: 'stepQuitConfirmation.title',
  text: 'stepQuitConfirmation.text',
  highlightClass: 'intro',
  customButtons: [{
    text: 'stepButtons.quitConfirm',
    action: onboardingWizard => {
      onboardingWizard.tour.removeStep('step-quit-confirmation');
      onboardingWizard.tour.complete();
    },
    secondary: true
  }, {
    text: 'stepButtons.quitCancel',
    action: (onboardingWizard, stepIndex) => {
      onboardingWizard.tour.show(stepIndex, true);
      onboardingWizard.tour.removeStep('step-quit-confirmation');
    }
  }]
}];
const steps = [{
  id: 'step-start',
  title: 'stepStart.title',
  text: 'stepStart.text',
  classes: 'shepherd-element--first',
  highlightClass: 'intro',
  btnBackText: 'stepButtons.skipWizard',
  btnNextText: 'stepButtons.startWizard',
  btnCollapseClass: 'd-none',
  btnCloseClass: 'd-none'
}, {
  id: 'step-mollie-connect',
  title: 'stepMollieConnect.title',
  text: 'stepMollieConnect.text',
  highlightClass: 'intro',
  btnBackText: 'stepButtons.loginMollieAccount',
  btnNextText: 'stepButtons.createMollieAccount',
  btnCollapseClass: 'd-none',
  urlMollie: 'https://www.mollie.com/dashboard'
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-environment', '.pushable');
    return true;
  },
  id: 'step-env',
  text: 'stepEnv.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'api-settings',
  attachTo: {
    element: '.js-onboardingWizard-environment',
    on: 'top-start'
  },
  btnNextClass: 'shepherd-button--arrow-down'
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-two-fields-test .required.field', '.pushable');
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('.js-onboardingWizard-environment', enviromentTest);
  },
  id: 'step-api-key-test',
  text: 'stepApiKey.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'api-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-profile-api',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-profile-api', '.pushable');
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('.js-onboardingWizard-environment', enviromentLive);
  },
  id: 'step-api-key-live',
  text: 'stepApiKey.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'api-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-profile-api',
    on: 'top-start'
  }
}, {
  id: 'step-checkout-config',
  text: 'stepCheckoutConfig.text',
  classes: 'step-6 shepherd-element--align-right',
  highlightClass: 'store-settings',
  btnNextText: 'stepButtons.next'
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-mollieComponents', '.pushable');
    return true;
  },
  id: 'step-mollie-components',
  text: 'stepMollieComponents.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'store-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-mollieComponents',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-singleClick', '.pushable');
    return true;
  },
  id: 'step-mollie-payments',
  text: 'stepMolliePayments.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'store-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-singleClick',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-load-methods', '.pushable');
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["methodLoadIndicator"])('.js-payment-method-not-loaded', '.pushable');
    return true;
  },
  id: 'step-payments-api',
  text: 'stepMethodConfig.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextText: 'stepButtons.next',
  attachTo: {
    element: '.js-onboardingWizard-load-methods',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-paymentName', '.pushable');
    return true;
  },
  id: 'step-payment-title',
  text: 'stepPaymentTitle.text',
  classes: 'step-9 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-paymentName',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-customizeMethodImage', '.pushable');
    return true;
  },
  id: 'step-image-upload',
  text: 'stepImageUpload.text',
  classes: 'step-14 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-customizeMethodImage input',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-countryRestriction', '.pushable');
    return true;
  },
  id: 'step-country-restriction',
  text: 'stepCountryRestriction.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-countryRestrictions',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-PaymentMethod', '.pushable');
    return true;
  },
  id: 'step-payment-method',
  text: 'stepPaymentMethod.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-PaymentMethod',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-order-number', '.pushable');
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType', paymentMethodPaymentApi);
  },
  id: 'step-order-number',
  text: 'stepOrderNumber.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-order-number',
    on: 'top-start'
  }
}, {
  showOn: function () {
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType', paymentMethodOrderApi);
  },
  id: 'step-order-api',
  text: 'stepOrdersAPI.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-PaymentMethod',
    on: 'top-start'
  }
}, {
  id: 'step-fees',
  text: 'stepFees.text',
  classes: 'step-13 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-paymentFee',
    on: 'top-start'
  }
}, {
  id: 'save',
  text: 'stepSave.text',
  classes: 'step-13 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.ui.buttons:not(.js-header-btn)',
    on: 'top-start'
  }
}, {
  id: 'step-finish-wizard',
  title: 'stepFinishWizard.title',
  text: 'stepFinishWizard.text',
  highlightClass: 'payment-settings',
  btnBackClass: 'd-none',
  btnNextClass: 'mr-auto',
  btnNextText: 'stepButtons.finishWizard',
  btnCollapseClass: 'd-none',
  btnCloseClass: 'd-none'
}];

/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/config/wizardTranslations.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/config/wizardTranslations.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  stepStart: {
    title: 'Let me help you',
    text: 'Thank you for installing Mollie for payment services. This guide will take you through the configuration set-up.'
  },
  stepMollieConnect: {
    title: 'Connect to your Mollie account',
    text: "To sync the Mollie plugin to your webshop you'll need Mollie API keys and Profile ID."
  },
  stepEnv: {
    text: "Now that you're connected to Mollie we will configure the environment and credentials.<br><br>Test will be the default environment in the plugin.<br><br>You only need to do the configuration once to have TEST + LIVE environments available. Try easily togging between the two."
  },
  stepApiKey: {
    text: 'Fill in your correct details and click "TEST API Key" this will return a successful or failed result for both the LIVE and TEST environments'
  },
  stepCheckoutConfig: {
    text: "Next, we'll set-up key settings for the checkout screen display on your webshop."
  },
  stepMollieComponents: {
    text: `Enabling components, allows you to add the fields needed for credit card holder data to your own checkout.<br><br>If you select NO, customers will be redirected to the Mollie checkout page.<br><br>Learn more about Mollie components <a target="_blank" class="mollie-link" href="https://www.mollie.com/en/news/post/better-checkout-flows-with-mollie-components">here</a>.`
  },
  stepMolliePayments: {
    text: `Enabling single click payments remembers your consumer's payment preferences in order to expedite follow-up payments. Your consumer does not have to perform any additional actions to enjoy quick and easy payments.<br><br>Learn more about single click payments <a target="_blank" class="mollie-link" href="https://help.mollie.com/hc/en-us/articles/115000671249-What-are-single-click-payments-and-how-does-it-work-">here</a>.`
  },
  stepMethodConfig: {
    text: "Now it's time to customize features for individual payment methods.<br><br>First, select the load methods button. Only the methods that are enabled in your Mollie account will display here.<br><br>Then you use the enable/disable selector to control which will show on your webshop checkout.<br><br>NOTE: It is not possible to continue the guided onboarding without loading payment methods. "
  },
  stepMethodRequired: {
    text: 'The loaded methods are required to complete onboard wizard and move forward, please load methods by clicking "Load Methods" button and come back to complete this tutorial'
  },
  stepErrorTitle: {
    text: 'Onboarding Assistant Wizard - Ended Up'
  },
  stepErrorDescription: {
    text: 'The required action was not performed'
  },
  stepPaymentTitle: {
    text: 'For each method, you can enter a custom title here. It will be displayed on your webshop checkout page.'
  },
  stepImageUpload: {
    text: 'Try uploading a custom image for the payment method icon. This will be shown in the webshop checkout page.'
  },
  stepCountryRestriction: {
    text: 'Here you can create filters for country specific payment methods - for example, if you want iDEAL only to show for Netherlands customers you choose "Select Countries" and select Netherlands.'
  },
  stepPaymentMethod: {
    text: 'Per method, you can select which Mollie API to use to create payments. Click <a target="_blank" class="mollie-link" href="https://docs.mollie.com/orders/why-use-orders">here</a> to read about the differences between Orders and Payments API.'
  },
  stepOrderNumber: {
    text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provided in the text below'
  },
  stepOrdersAPI: {
    text: 'This is Mollie suggested API to use for webshops because it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.'
  },
  stepPaymentsAPI: {
    text: 'Payments API <br>Note: Payments API can not be used for methods such as Klarna'
  },
  stepFees: {
    text: 'In case you have fees that you are passing on to the consumer, you can add them <a target="_blank" class="mollie-link" href="https://help.mollie.com/hc/en-us/articles/360012564454-Can-I-pass-over-the-costs-for-the-use-of-a-payment-method-to-my-customers-">here</a>'
  },
  stepSave: {
    text: 'Remeber to save your configurations. '
  },
  stepFinishWizard: {
    title: '<i class="icon check circle"></i> You\'re all set!',
    text: "You can now attempt a customer order on your website."
  },
  stepQuitConfirmation: {
    title: 'Are you sure you want to quit ?',
    text: "You're all done, you can now attempt a consumer order or your website"
  },
  stepPaymentType: {
    text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provide in the text below'
  },
  stepPaymentDescription: {
    text: 'Choose Payments API Learn about the difference between Orders API or the Payments API'
  },
  stepOrderApi: {
    text: 'Select Orders API - this is Mollie\n' + 'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.'
  },
  stepButtons: {
    goBack: 'Go back',
    skipWizard: 'Skip this, I know how it works',
    startWizard: 'Start onboarding assistant <i class="icon angle right"></i>',
    loginMollieAccount: 'Login to my account',
    nextWithArrow: 'Next <i class="icon angle right"></i>',
    next: 'Next',
    createMollieAccount: 'Create a Mollie account <i class="icon angle right"></i>',
    finishWizard: 'Start using Mollie <i class="icon angle right"></i>',
    quitConfirm: 'Quit the onboarding assistant',
    quitCancel: 'Continue onboarding <i class="icon angle right"></i>'
  },
  common: {
    open: 'Open'
  }
});

/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/helpers/filterMethod.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/helpers/filterMethod.js ***!
  \**********************************************************************************************************************/
/*! exports provided: paymentTypeIndicator, methodLoadIndicator, validateFields, currentStepValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentTypeIndicator", function() { return paymentTypeIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "methodLoadIndicator", function() { return methodLoadIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFields", function() { return validateFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentStepValidator", function() { return currentStepValidator; });
const paymentTypeIndicator = (item, expectedValue) => {
  const indicatedItem = document.querySelector(item);
  const indicatedItemValue = indicatedItem.value;
  return indicatedItemValue === expectedValue;
};
const methodLoadIndicator = (item, messageContainer) => {
  const indicatedItem = document.querySelector(item);
  const messageWindow = document.querySelector(messageContainer);

  if (indicatedItem) {
    messageWindow.classList.add('step-next-disabled');
  } else {
    messageWindow.classList.remove('step-next-disabled');
  }
};
const validateFields = (elements, messageContainer) => {
  const errors = [];
  elements.forEach(item => {
    if (!item.value) {
      errors.push(item);
    }
  });

  if (errors.every(el => el === null)) {
    messageContainer.classList.remove('step-next-disabled');
  } else {
    messageContainer.classList.add('step-next-disabled');
  }
};
const currentStepValidator = (element, popup) => {
  const validationContainer = document.querySelector(element);
  const validationElements = validationContainer.parentNode.querySelectorAll(`input:not([type="file"]):not([type="submit"]):not(disabled):not([style*="display: none"]),
		select:not(disabled):not([style*="display: none;"])`);
  const messageWindow = document.querySelector(popup);

  if (validationElements && validationElements.length != 0) {
    validateFields(validationElements, messageWindow);
    validationElements.forEach(el => {
      el.addEventListener('input', () => {
        validateFields(validationElements, messageWindow);
      });
    });
  }
};

/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/helpers/stepFactory.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/helpers/stepFactory.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/steps */ "../../src/Resources/assets/js/onboardingWizard/config/steps.js");
/* harmony import */ var _config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/wizardTranslations */ "../../src/Resources/assets/js/onboardingWizard/config/wizardTranslations.js");




const handleStepButtons = (onboardingWizard, stepIndex, step) => {
  if (step.customButtons) {
    return step.customButtons.map(customButton => ({ ...customButton,
      text: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], customButton.text),
      action: () => customButton.action(onboardingWizard, stepIndex)
    }));
  }

  return [{
    text: '<i class="close icon"></i>',
    action: () => {
      onboardingWizard.handleQuitConfirmation();
    },
    classes: `shepherd-button--close ${step.btnCloseClass || ''}`
  }, {
    text: '<i class="arrow down icon"></i>',
    action: () => onboardingWizard.modalCollapseHandler(),
    classes: `shepherd-button--collapse js-tour-collapse ${step.btnCollapseClass || ''}`
  }, {
    text: step.btnBackText ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.btnBackText) : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], 'stepButtons.goBack'),
    secondary: true,
    classes: `${step.btnBackClass || ''}`,

    action() {
      const tour = onboardingWizard.tour;

      if (stepIndex === 0) {
        tour.complete();
      } else {
        if (step.urlMollie) {
          window.open(`${step.urlMollie}/signin`, '_blank');
          tour.next();
          return;
        }

        tour.back();
      }
    }

  }, {
    text: step.btnNextText ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.btnNextText) : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], 'stepButtons.nextWithArrow'),
    classes: `${step.btnNextClass || ''}`,

    action() {
      const tour = onboardingWizard.tour;

      if (stepIndex === onboardingWizard.steps.length - 1) {
        tour.complete();
      } else {
        if (step.urlMollie) {
          window.open(`${step.urlMollie}/signup`, '_blank');
        }

        tour.next();
      }
    }

  }];
};

/* harmony default export */ __webpack_exports__["default"] = ((steps = []) => steps.map(step => ({ ...step,
  title: step.title ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.title) : null,
  text: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.text),
  stepButtons: (onboardingWizard, stepIndex) => handleStepButtons(onboardingWizard, stepIndex, step)
})));

/***/ }),

/***/ "../../src/Resources/assets/js/onboardingWizard/main.js":
/*!******************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/js/onboardingWizard/main.js ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OnboardingWizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnboardingWizard */ "../../src/Resources/assets/js/onboardingWizard/OnboardingWizard.js");

const tour = new _OnboardingWizard__WEBPACK_IMPORTED_MODULE_0__["default"]();
tour.initTour();

/***/ }),

/***/ "./node_modules/lodash.get/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.get/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/shepherd.js/dist/js/shepherd.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/shepherd.js/dist/js/shepherd.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! shepherd.js 8.3.1 */

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

/**
 * Checks if `value` is classified as an `Element`.
 * @param {*} value The param to check if it is an Element
 */
function isElement$1(value) {
  return value instanceof Element;
}
/**
 * Checks if `value` is classified as an `HTMLElement`.
 * @param {*} value The param to check if it is an HTMLElement
 */

function isHTMLElement$1(value) {
  return value instanceof HTMLElement;
}
/**
 * Checks if `value` is classified as a `Function` object.
 * @param {*} value The param to check if it is a function
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Checks if `value` is classified as a `String` object.
 * @param {*} value The param to check if it is a string
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * Checks if `value` is undefined.
 * @param {*} value The param to check if it is undefined
 */

function isUndefined(value) {
  return value === undefined;
}

class Evented {
  on(event, handler, ctx, once = false) {
    if (isUndefined(this.bindings)) {
      this.bindings = {};
    }

    if (isUndefined(this.bindings[event])) {
      this.bindings[event] = [];
    }

    this.bindings[event].push({
      handler,
      ctx,
      once
    });
    return this;
  }

  once(event, handler, ctx) {
    return this.on(event, handler, ctx, true);
  }

  off(event, handler) {
    if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
      return this;
    }

    if (isUndefined(handler)) {
      delete this.bindings[event];
    } else {
      this.bindings[event].forEach((binding, index) => {
        if (binding.handler === handler) {
          this.bindings[event].splice(index, 1);
        }
      });
    }

    return this;
  }

  trigger(event, ...args) {
    if (!isUndefined(this.bindings) && this.bindings[event]) {
      this.bindings[event].forEach((binding, index) => {
        const {
          ctx,
          handler,
          once
        } = binding;
        const context = ctx || this;
        handler.apply(context, args);

        if (once) {
          this.bindings[event].splice(index, 1);
        }
      });
    }

    return this;
  }

}

/**
 * Binds all the methods on a JS Class to the `this` context of the class.
 * Adapted from https://github.com/sindresorhus/auto-bind
 * @param {object} self The `this` context of the class
 * @return {object} The `this` context of the class
 */
function autoBind(self) {
  const keys = Object.getOwnPropertyNames(self.constructor.prototype);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = self[key];

    if (key !== 'constructor' && typeof val === 'function') {
      self[key] = val.bind(self);
    }
  }

  return self;
}

/**
 * Sets up the handler to determine if we should advance the tour
 * @param {string} selector
 * @param {Step} step The step instance
 * @return {Function}
 * @private
 */

function _setupAdvanceOnHandler(selector, step) {
  return event => {
    if (step.isOpen()) {
      const targetIsEl = step.el && event.currentTarget === step.el;
      const targetIsSelector = !isUndefined(selector) && event.currentTarget.matches(selector);

      if (targetIsSelector || targetIsEl) {
        step.tour.next();
      }
    }
  };
}
/**
 * Bind the event handler for advanceOn
 * @param {Step} step The step instance
 */


function bindAdvance(step) {
  // An empty selector matches the step element
  const {
    event,
    selector
  } = step.options.advanceOn || {};

  if (event) {
    const handler = _setupAdvanceOnHandler(selector, step); // TODO: this should also bind/unbind on show/hide


    let el;

    try {
      el = document.querySelector(selector);
    } catch (e) {// TODO
    }

    if (!isUndefined(selector) && !el) {
      return console.error(`No element was found for the selector supplied to advanceOn: ${selector}`);
    } else if (el) {
      el.addEventListener(event, handler);
      step.on('destroy', () => {
        return el.removeEventListener(event, handler);
      });
    } else {
      document.body.addEventListener(event, handler, true);
      step.on('destroy', () => {
        return document.body.removeEventListener(event, handler, true);
      });
    }
  } else {
    return console.error('advanceOn was defined, but no event name was passed.');
  }
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _getCenteredStylePopperModifier() {
  return [{
    name: 'applyStyles',

    fn({
      state
    }) {
      Object.keys(state.elements).forEach(name => {
        if (name !== 'popper') {
          return;
        }

        const style = {
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        };
        const attributes = state.attributes[name] || {};
        const element = state.elements[name];
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(name => {
          const value = attributes[name];

          if (value === false) {
            element.removeAttribute(name);
          } else {
            element.setAttribute(name, value === true ? '' : value);
          }
        });
      });
    }

  }, {
    name: 'computeStyles',
    options: {
      adaptive: false
    }
  }];
}
/**
 * Generates the array of options for a tooltip that doesn't have a
 * target element in the DOM -- and thus is positioned in the center
 * of the view
 *
 * @param {Step} step The step instance
 * @return {Object} The final Popper options object
 */


function makeCenteredPopper(step) {
  const centeredStylePopperModifier = _getCenteredStylePopperModifier();

  let popperOptions = {
    placement: 'top',
    strategy: 'fixed',
    modifiers: [{
      name: 'focusAfterRender',
      enabled: true,
      phase: 'afterWrite',

      fn() {
        setTimeout(() => {
          if (step.el) {
            step.el.focus();
          }
        }, 300);
      }

    }]
  };
  popperOptions = _extends({}, popperOptions, {
    modifiers: Array.from(new Set([...popperOptions.modifiers, ...centeredStylePopperModifier]))
  });
  return popperOptions;
}

/**
 * Ensure class prefix ends in `-`
 * @param {string} prefix The prefix to prepend to the class names generated by nano-css
 * @return {string} The prefix ending in `-`
 */

function normalizePrefix(prefix) {
  if (!isString(prefix) || prefix === '') {
    return '';
  }

  return prefix.charAt(prefix.length - 1) !== '-' ? `${prefix}-` : prefix;
}
/**
 * Checks if options.attachTo.element is a string, and if so, tries to find the element
 * @param {Step} step The step instance
 * @returns {{element, on}}
 * `element` is a qualified HTML Element
 * `on` is a string position value
 */

function parseAttachTo(step) {
  const options = step.options.attachTo || {};
  const returnOpts = Object.assign({}, options);

  if (isString(options.element)) {
    // Can't override the element in user opts reference because we can't
    // guarantee that the element will exist in the future.
    try {
      returnOpts.element = document.querySelector(options.element);
    } catch (e) {// TODO
    }

    if (!returnOpts.element) {
      console.error(`The element for this Shepherd step was not found ${options.element}`);
    }
  }

  return returnOpts;
}
/**
 * Determines options for the tooltip and initializes
 * `step.tooltip` as a Popper instance.
 * @param {Step} step The step instance
 */

function setupTooltip(step) {
  if (step.tooltip) {
    step.tooltip.destroy();
  }

  const attachToOptions = parseAttachTo(step);
  let target = attachToOptions.element;
  const popperOptions = getPopperOptions(attachToOptions, step);

  if (step.isCentered()) {
    target = document.body;
    const content = step.shepherdElementComponent.getElement();
    content.classList.add('shepherd-centered');
  }

  step.tooltip = createPopper(target, step.el, popperOptions);
  step.target = attachToOptions.element;
  return popperOptions;
}
/**
 * Create a unique id for steps, tours, modals, etc
 * @return {string}
 */

function uuid() {
  let d = Date.now();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
/**
 * Gets the `Popper` options from a set of base `attachTo` options
 * @param attachToOptions
 * @param {Step} step The step instance
 * @return {Object}
 * @private
 */

function getPopperOptions(attachToOptions, step) {
  let popperOptions = {
    modifiers: [{
      name: 'preventOverflow',
      options: {
        altAxis: true,
        tether: false
      }
    }, {
      name: 'focusAfterRender',
      enabled: true,
      phase: 'afterWrite',

      fn() {
        setTimeout(() => {
          if (step.el) {
            step.el.focus();
          }
        }, 300);
      }

    }],
    strategy: 'absolute'
  };

  if (step.isCentered()) {
    popperOptions = makeCenteredPopper(step);
  } else {
    popperOptions.placement = attachToOptions.on;
  }

  const defaultStepOptions = step.tour && step.tour.options && step.tour.options.defaultStepOptions;

  if (defaultStepOptions) {
    popperOptions = _mergeModifiers(defaultStepOptions, popperOptions);
  }

  popperOptions = _mergeModifiers(step.options, popperOptions);
  return popperOptions;
}

function _mergeModifiers(stepOptions, popperOptions) {
  if (stepOptions.popperOptions) {
    let mergedPopperOptions = Object.assign({}, popperOptions, stepOptions.popperOptions);

    if (stepOptions.popperOptions.modifiers && stepOptions.popperOptions.modifiers.length > 0) {
      const names = stepOptions.popperOptions.modifiers.map(mod => mod.name);
      const filteredModifiers = popperOptions.modifiers.filter(mod => !names.includes(mod.name));
      mergedPopperOptions.modifiers = Array.from(new Set([...filteredModifiers, ...stepOptions.popperOptions.modifiers]));
    }

    return mergedPopperOptions;
  }

  return popperOptions;
}

function noop() {}

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function children(element) {
  return Array.from(element.childNodes);
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

let current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function create_component(block) {
  block && block.c();
}

function mount_component(component, target, anchor, customElement) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }

  set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

/* src/js/components/shepherd-button.svelte generated by Svelte v3.37.0 */

function create_fragment$8(ctx) {
  let button;
  let button_aria_label_value;
  let button_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      attr(button, "aria-label", button_aria_label_value =
      /*label*/
      ctx[3] ?
      /*label*/
      ctx[3] : null);
      attr(button, "class", button_class_value = `${
      /*classes*/
      ctx[1] || ""} shepherd-button ${
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""}`);
      button.disabled =
      /*disabled*/
      ctx[2];
      attr(button, "tabindex", "0");
    },

    m(target, anchor) {
      insert(target, button, anchor);
      button.innerHTML =
      /*text*/
      ctx[5];

      if (!mounted) {
        dispose = listen(button, "click", function () {
          if (is_function(
          /*action*/
          ctx[0]))
            /*action*/
            ctx[0].apply(this, arguments);
        });
        mounted = true;
      }
    },

    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty &
      /*text*/
      32) button.innerHTML =
      /*text*/
      ctx[5];

      if (dirty &
      /*label*/
      8 && button_aria_label_value !== (button_aria_label_value =
      /*label*/
      ctx[3] ?
      /*label*/
      ctx[3] : null)) {
        attr(button, "aria-label", button_aria_label_value);
      }

      if (dirty &
      /*classes, secondary*/
      18 && button_class_value !== (button_class_value = `${
      /*classes*/
      ctx[1] || ""} shepherd-button ${
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""}`)) {
        attr(button, "class", button_class_value);
      }

      if (dirty &
      /*disabled*/
      4) {
        button.disabled =
        /*disabled*/
        ctx[2];
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }

  };
}

function instance$8($$self, $$props, $$invalidate) {
  let {
    config
  } = $$props,
      {
    step
  } = $$props;
  let action, classes, disabled, label, secondary, text;

  function getDisabled(disabled) {
    if (isFunction(disabled)) {
      return disabled = disabled.call(step);
    }

    return disabled;
  }

  $$self.$$set = $$props => {
    if ("config" in $$props) $$invalidate(6, config = $$props.config);
    if ("step" in $$props) $$invalidate(7, step = $$props.step);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*config, step*/
    192) {
      {
        $$invalidate(0, action = config.action ? config.action.bind(step.tour) : null);
        $$invalidate(1, classes = config.classes);
        $$invalidate(2, disabled = config.disabled ? getDisabled(config.disabled) : false);
        $$invalidate(3, label = config.label);
        $$invalidate(4, secondary = config.secondary);
        $$invalidate(5, text = config.text);
      }
    }
  };

  return [action, classes, disabled, label, secondary, text, config, step];
}

class Shepherd_button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      config: 6,
      step: 7
    });
  }

}

/* src/js/components/shepherd-footer.svelte generated by Svelte v3.37.0 */

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (24:4) {#if buttons}


function create_if_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value =
  /*buttons*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = empty();
    },

    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      if (dirty &
      /*buttons, step*/
      3) {
        each_value =
        /*buttons*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }
    },

    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },

    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },

    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }

  };
} // (25:8) {#each buttons as config}


function create_each_block(ctx) {
  let shepherdbutton;
  let current;
  shepherdbutton = new Shepherd_button({
    props: {
      config:
      /*config*/
      ctx[2],
      step:
      /*step*/
      ctx[0]
    }
  });
  return {
    c() {
      create_component(shepherdbutton.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdbutton, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdbutton_changes = {};
      if (dirty &
      /*buttons*/
      2) shepherdbutton_changes.config =
      /*config*/
      ctx[2];
      if (dirty &
      /*step*/
      1) shepherdbutton_changes.step =
      /*step*/
      ctx[0];
      shepherdbutton.$set(shepherdbutton_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdbutton.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdbutton.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdbutton, detaching);
    }

  };
}

function create_fragment$7(ctx) {
  let footer;
  let current;
  let if_block =
  /*buttons*/
  ctx[1] && create_if_block$3(ctx);
  return {
    c() {
      footer = element("footer");
      if (if_block) if_block.c();
      attr(footer, "class", "shepherd-footer");
    },

    m(target, anchor) {
      insert(target, footer, anchor);
      if (if_block) if_block.m(footer, null);
      current = true;
    },

    p(ctx, [dirty]) {
      if (
      /*buttons*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*buttons*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(footer, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(footer);
      if (if_block) if_block.d();
    }

  };
}

function instance$7($$self, $$props, $$invalidate) {
  let buttons;
  let {
    step
  } = $$props;

  $$self.$$set = $$props => {
    if ("step" in $$props) $$invalidate(0, step = $$props.step);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*step*/
    1) {
      $$invalidate(1, buttons = step.options.buttons);
    }
  };

  return [step, buttons];
}

class Shepherd_footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      step: 0
    });
  }

}

/* src/js/components/shepherd-cancel-icon.svelte generated by Svelte v3.37.0 */

function create_fragment$6(ctx) {
  let button;
  let span;
  let button_aria_label_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      span = element("span");
      span.textContent = "×";
      attr(span, "aria-hidden", "true");
      attr(button, "aria-label", button_aria_label_value =
      /*cancelIcon*/
      ctx[0].label ?
      /*cancelIcon*/
      ctx[0].label : "Close Tour");
      attr(button, "class", "shepherd-cancel-icon");
      attr(button, "type", "button");
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, span);

      if (!mounted) {
        dispose = listen(button, "click",
        /*handleCancelClick*/
        ctx[1]);
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*cancelIcon*/
      1 && button_aria_label_value !== (button_aria_label_value =
      /*cancelIcon*/
      ctx[0].label ?
      /*cancelIcon*/
      ctx[0].label : "Close Tour")) {
        attr(button, "aria-label", button_aria_label_value);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }

  };
}

function instance$6($$self, $$props, $$invalidate) {
  let {
    cancelIcon
  } = $$props,
      {
    step
  } = $$props;
  /**
  * Add a click listener to the cancel link that cancels the tour
  */

  const handleCancelClick = e => {
    e.preventDefault();
    step.cancel();
  };

  $$self.$$set = $$props => {
    if ("cancelIcon" in $$props) $$invalidate(0, cancelIcon = $$props.cancelIcon);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [cancelIcon, handleCancelClick, step];
}

class Shepherd_cancel_icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      cancelIcon: 0,
      step: 2
    });
  }

}

/* src/js/components/shepherd-title.svelte generated by Svelte v3.37.0 */

function create_fragment$5(ctx) {
  let h3;
  return {
    c() {
      h3 = element("h3");
      attr(h3, "id",
      /*labelId*/
      ctx[1]);
      attr(h3, "class", "shepherd-title");
    },

    m(target, anchor) {
      insert(target, h3, anchor);
      /*h3_binding*/

      ctx[3](h3);
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*labelId*/
      2) {
        attr(h3, "id",
        /*labelId*/
        ctx[1]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(h3);
      /*h3_binding*/

      ctx[3](null);
    }

  };
}

function instance$5($$self, $$props, $$invalidate) {
  let {
    labelId
  } = $$props,
      {
    element
  } = $$props,
      {
    title
  } = $$props;
  afterUpdate(() => {
    if (isFunction(title)) {
      $$invalidate(2, title = title());
    }

    $$invalidate(0, element.innerHTML = title, element);
  });

  function h3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
  };

  return [element, labelId, title, h3_binding];
}

class Shepherd_title extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      labelId: 1,
      element: 0,
      title: 2
    });
  }

}

/* src/js/components/shepherd-header.svelte generated by Svelte v3.37.0 */

function create_if_block_1$1(ctx) {
  let shepherdtitle;
  let current;
  shepherdtitle = new Shepherd_title({
    props: {
      labelId:
      /*labelId*/
      ctx[0],
      title:
      /*title*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdtitle.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdtitle, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdtitle_changes = {};
      if (dirty &
      /*labelId*/
      1) shepherdtitle_changes.labelId =
      /*labelId*/
      ctx[0];
      if (dirty &
      /*title*/
      4) shepherdtitle_changes.title =
      /*title*/
      ctx[2];
      shepherdtitle.$set(shepherdtitle_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdtitle.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdtitle.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdtitle, detaching);
    }

  };
} // (39:4) {#if cancelIcon && cancelIcon.enabled}


function create_if_block$2(ctx) {
  let shepherdcancelicon;
  let current;
  shepherdcancelicon = new Shepherd_cancel_icon({
    props: {
      cancelIcon:
      /*cancelIcon*/
      ctx[3],
      step:
      /*step*/
      ctx[1]
    }
  });
  return {
    c() {
      create_component(shepherdcancelicon.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdcancelicon, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdcancelicon_changes = {};
      if (dirty &
      /*cancelIcon*/
      8) shepherdcancelicon_changes.cancelIcon =
      /*cancelIcon*/
      ctx[3];
      if (dirty &
      /*step*/
      2) shepherdcancelicon_changes.step =
      /*step*/
      ctx[1];
      shepherdcancelicon.$set(shepherdcancelicon_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdcancelicon.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdcancelicon.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdcancelicon, detaching);
    }

  };
}

function create_fragment$4(ctx) {
  let header;
  let t;
  let current;
  let if_block0 =
  /*title*/
  ctx[2] && create_if_block_1$1(ctx);
  let if_block1 =
  /*cancelIcon*/
  ctx[3] &&
  /*cancelIcon*/
  ctx[3].enabled && create_if_block$2(ctx);
  return {
    c() {
      header = element("header");
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      attr(header, "class", "shepherd-header");
    },

    m(target, anchor) {
      insert(target, header, anchor);
      if (if_block0) if_block0.m(header, null);
      append(header, t);
      if (if_block1) if_block1.m(header, null);
      current = true;
    },

    p(ctx, [dirty]) {
      if (
      /*title*/
      ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*title*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*cancelIcon*/
      ctx[3] &&
      /*cancelIcon*/
      ctx[3].enabled) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*cancelIcon*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(header, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(header);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }

  };
}

function instance$4($$self, $$props, $$invalidate) {
  let {
    labelId
  } = $$props,
      {
    step
  } = $$props;
  let title, cancelIcon;

  $$self.$$set = $$props => {
    if ("labelId" in $$props) $$invalidate(0, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(1, step = $$props.step);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*step*/
    2) {
      {
        $$invalidate(2, title = step.options.title);
        $$invalidate(3, cancelIcon = step.options.cancelIcon);
      }
    }
  };

  return [labelId, step, title, cancelIcon];
}

class Shepherd_header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      labelId: 0,
      step: 1
    });
  }

}

/* src/js/components/shepherd-text.svelte generated by Svelte v3.37.0 */

function create_fragment$3(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "shepherd-text");
      attr(div, "id",
      /*descriptionId*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      /*div_binding*/

      ctx[3](div);
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*descriptionId*/
      2) {
        attr(div, "id",
        /*descriptionId*/
        ctx[1]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
      /*div_binding*/

      ctx[3](null);
    }

  };
}

function instance$3($$self, $$props, $$invalidate) {
  let {
    descriptionId
  } = $$props,
      {
    element
  } = $$props,
      {
    step
  } = $$props;
  afterUpdate(() => {
    let {
      text
    } = step.options;

    if (isFunction(text)) {
      text = text.call(step);
    }

    if (isHTMLElement$1(text)) {
      element.appendChild(text);
    } else {
      $$invalidate(0, element.innerHTML = text, element);
    }
  });

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("descriptionId" in $$props) $$invalidate(1, descriptionId = $$props.descriptionId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [element, descriptionId, step, div_binding];
}

class Shepherd_text extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      descriptionId: 1,
      element: 0,
      step: 2
    });
  }

}

/* src/js/components/shepherd-content.svelte generated by Svelte v3.37.0 */

function create_if_block_2(ctx) {
  let shepherdheader;
  let current;
  shepherdheader = new Shepherd_header({
    props: {
      labelId:
      /*labelId*/
      ctx[1],
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdheader.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdheader, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdheader_changes = {};
      if (dirty &
      /*labelId*/
      2) shepherdheader_changes.labelId =
      /*labelId*/
      ctx[1];
      if (dirty &
      /*step*/
      4) shepherdheader_changes.step =
      /*step*/
      ctx[2];
      shepherdheader.$set(shepherdheader_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdheader.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdheader.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdheader, detaching);
    }

  };
} // (28:2) {#if !isUndefined(step.options.text)}


function create_if_block_1(ctx) {
  let shepherdtext;
  let current;
  shepherdtext = new Shepherd_text({
    props: {
      descriptionId:
      /*descriptionId*/
      ctx[0],
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdtext.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdtext, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdtext_changes = {};
      if (dirty &
      /*descriptionId*/
      1) shepherdtext_changes.descriptionId =
      /*descriptionId*/
      ctx[0];
      if (dirty &
      /*step*/
      4) shepherdtext_changes.step =
      /*step*/
      ctx[2];
      shepherdtext.$set(shepherdtext_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdtext.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdtext.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdtext, detaching);
    }

  };
} // (35:2) {#if Array.isArray(step.options.buttons) && step.options.buttons.length}


function create_if_block$1(ctx) {
  let shepherdfooter;
  let current;
  shepherdfooter = new Shepherd_footer({
    props: {
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdfooter.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdfooter, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdfooter_changes = {};
      if (dirty &
      /*step*/
      4) shepherdfooter_changes.step =
      /*step*/
      ctx[2];
      shepherdfooter.$set(shepherdfooter_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdfooter.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdfooter.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdfooter, detaching);
    }

  };
}

function create_fragment$2(ctx) {
  let div;
  let show_if_2 = !isUndefined(
  /*step*/
  ctx[2].options.title) ||
  /*step*/
  ctx[2].options.cancelIcon &&
  /*step*/
  ctx[2].options.cancelIcon.enabled;
  let t0;
  let show_if_1 = !isUndefined(
  /*step*/
  ctx[2].options.text);
  let t1;
  let show_if = Array.isArray(
  /*step*/
  ctx[2].options.buttons) &&
  /*step*/
  ctx[2].options.buttons.length;
  let current;
  let if_block0 = show_if_2 && create_if_block_2(ctx);
  let if_block1 = show_if_1 && create_if_block_1(ctx);
  let if_block2 = show_if && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      if (if_block2) if_block2.c();
      attr(div, "class", "shepherd-content");
    },

    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block0) if_block0.m(div, null);
      append(div, t0);
      if (if_block1) if_block1.m(div, null);
      append(div, t1);
      if (if_block2) if_block2.m(div, null);
      current = true;
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*step*/
      4) show_if_2 = !isUndefined(
      /*step*/
      ctx[2].options.title) ||
      /*step*/
      ctx[2].options.cancelIcon &&
      /*step*/
      ctx[2].options.cancelIcon.enabled;

      if (show_if_2) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      if (dirty &
      /*step*/
      4) show_if_1 = !isUndefined(
      /*step*/
      ctx[2].options.text);

      if (show_if_1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }

      if (dirty &
      /*step*/
      4) show_if = Array.isArray(
      /*step*/
      ctx[2].options.buttons) &&
      /*step*/
      ctx[2].options.buttons.length;

      if (show_if) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$1(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }

  };
}

function instance$2($$self, $$props, $$invalidate) {
  let {
    descriptionId
  } = $$props,
      {
    labelId
  } = $$props,
      {
    step
  } = $$props;

  $$self.$$set = $$props => {
    if ("descriptionId" in $$props) $$invalidate(0, descriptionId = $$props.descriptionId);
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [descriptionId, labelId, step];
}

class Shepherd_content extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      descriptionId: 0,
      labelId: 1,
      step: 2
    });
  }

}

/* src/js/components/shepherd-element.svelte generated by Svelte v3.37.0 */

function create_if_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "shepherd-arrow");
      attr(div, "data-popper-arrow", "");
    },

    m(target, anchor) {
      insert(target, div, anchor);
    },

    d(detaching) {
      if (detaching) detach(div);
    }

  };
}

function create_fragment$1(ctx) {
  let div;
  let t;
  let shepherdcontent;
  let div_aria_describedby_value;
  let div_aria_labelledby_value;
  let current;
  let mounted;
  let dispose;
  let if_block =
  /*step*/
  ctx[4].options.arrow &&
  /*step*/
  ctx[4].options.attachTo &&
  /*step*/
  ctx[4].options.attachTo.element &&
  /*step*/
  ctx[4].options.attachTo.on && create_if_block();
  shepherdcontent = new Shepherd_content({
    props: {
      descriptionId:
      /*descriptionId*/
      ctx[2],
      labelId:
      /*labelId*/
      ctx[3],
      step:
      /*step*/
      ctx[4]
    }
  });
  let div_levels = [{
    "aria-describedby": div_aria_describedby_value = !isUndefined(
    /*step*/
    ctx[4].options.text) ?
    /*descriptionId*/
    ctx[2] : null
  }, {
    "aria-labelledby": div_aria_labelledby_value =
    /*step*/
    ctx[4].options.title ?
    /*labelId*/
    ctx[3] : null
  },
  /*dataStepId*/
  ctx[1], {
    role: "dialog"
  }, {
    tabindex: "0"
  }];
  let div_data = {};

  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  return {
    c() {
      div = element("div");
      if (if_block) if_block.c();
      t = space();
      create_component(shepherdcontent.$$.fragment);
      set_attributes(div, div_data);
      toggle_class(div, "shepherd-has-cancel-icon",
      /*hasCancelIcon*/
      ctx[5]);
      toggle_class(div, "shepherd-has-title",
      /*hasTitle*/
      ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block) if_block.m(div, null);
      append(div, t);
      mount_component(shepherdcontent, div, null);
      /*div_binding*/

      ctx[13](div);
      current = true;

      if (!mounted) {
        dispose = listen(div, "keydown",
        /*handleKeyDown*/
        ctx[7]);
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (
      /*step*/
      ctx[4].options.arrow &&
      /*step*/
      ctx[4].options.attachTo &&
      /*step*/
      ctx[4].options.attachTo.element &&
      /*step*/
      ctx[4].options.attachTo.on) {
        if (if_block) ; else {
          if_block = create_if_block();
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      const shepherdcontent_changes = {};
      if (dirty &
      /*descriptionId*/
      4) shepherdcontent_changes.descriptionId =
      /*descriptionId*/
      ctx[2];
      if (dirty &
      /*labelId*/
      8) shepherdcontent_changes.labelId =
      /*labelId*/
      ctx[3];
      if (dirty &
      /*step*/
      16) shepherdcontent_changes.step =
      /*step*/
      ctx[4];
      shepherdcontent.$set(shepherdcontent_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [(!current || dirty &
      /*step, descriptionId*/
      20 && div_aria_describedby_value !== (div_aria_describedby_value = !isUndefined(
      /*step*/
      ctx[4].options.text) ?
      /*descriptionId*/
      ctx[2] : null)) && {
        "aria-describedby": div_aria_describedby_value
      }, (!current || dirty &
      /*step, labelId*/
      24 && div_aria_labelledby_value !== (div_aria_labelledby_value =
      /*step*/
      ctx[4].options.title ?
      /*labelId*/
      ctx[3] : null)) && {
        "aria-labelledby": div_aria_labelledby_value
      }, dirty &
      /*dataStepId*/
      2 &&
      /*dataStepId*/
      ctx[1], {
        role: "dialog"
      }, {
        tabindex: "0"
      }]));
      toggle_class(div, "shepherd-has-cancel-icon",
      /*hasCancelIcon*/
      ctx[5]);
      toggle_class(div, "shepherd-has-title",
      /*hasTitle*/
      ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdcontent.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdcontent.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      destroy_component(shepherdcontent);
      /*div_binding*/

      ctx[13](null);
      mounted = false;
      dispose();
    }

  };
}

const KEY_TAB = 9;
const KEY_ESC = 27;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

function getClassesArray(classes) {
  return classes.split(" ").filter(className => !!className.length);
}

function instance$1($$self, $$props, $$invalidate) {
  let {
    classPrefix
  } = $$props,
      {
    element
  } = $$props,
      {
    descriptionId
  } = $$props,
      {
    firstFocusableElement
  } = $$props,
      {
    focusableElements
  } = $$props,
      {
    labelId
  } = $$props,
      {
    lastFocusableElement
  } = $$props,
      {
    step
  } = $$props,
      {
    dataStepId
  } = $$props;
  let hasCancelIcon, hasTitle, classes;

  const getElement = () => element;

  onMount(() => {
    // Get all elements that are focusable
    $$invalidate(1, dataStepId = {
      [`data-${classPrefix}shepherd-step-id`]: step.id
    });
    $$invalidate(9, focusableElements = element.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex=\"0\"]"));
    $$invalidate(8, firstFocusableElement = focusableElements[0]);
    $$invalidate(10, lastFocusableElement = focusableElements[focusableElements.length - 1]);
  });
  afterUpdate(() => {
    if (classes !== step.options.classes) {
      updateDynamicClasses();
    }
  });

  function updateDynamicClasses() {
    removeClasses(classes);
    classes = step.options.classes;
    addClasses(classes);
  }

  function removeClasses(classes) {
    if (isString(classes)) {
      const oldClasses = getClassesArray(classes);

      if (oldClasses.length) {
        element.classList.remove(...oldClasses);
      }
    }
  }

  function addClasses(classes) {
    if (isString(classes)) {
      const newClasses = getClassesArray(classes);

      if (newClasses.length) {
        element.classList.add(...newClasses);
      }
    }
  }
  /**
  * Setup keydown events to allow closing the modal with ESC
  *
  * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
  *
  * @private
  */


  const handleKeyDown = e => {
    const {
      tour
    } = step;

    switch (e.keyCode) {
      case KEY_TAB:
        if (focusableElements.length === 0) {
          e.preventDefault();
          break;
        } // Backward tab


        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement || document.activeElement.classList.contains("shepherd-element")) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }

        break;

      case KEY_ESC:
        if (tour.options.exitOnEsc) {
          step.cancel();
        }

        break;

      case LEFT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.back();
        }

        break;

      case RIGHT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.next();
        }

        break;
    }
  };

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("classPrefix" in $$props) $$invalidate(11, classPrefix = $$props.classPrefix);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("descriptionId" in $$props) $$invalidate(2, descriptionId = $$props.descriptionId);
    if ("firstFocusableElement" in $$props) $$invalidate(8, firstFocusableElement = $$props.firstFocusableElement);
    if ("focusableElements" in $$props) $$invalidate(9, focusableElements = $$props.focusableElements);
    if ("labelId" in $$props) $$invalidate(3, labelId = $$props.labelId);
    if ("lastFocusableElement" in $$props) $$invalidate(10, lastFocusableElement = $$props.lastFocusableElement);
    if ("step" in $$props) $$invalidate(4, step = $$props.step);
    if ("dataStepId" in $$props) $$invalidate(1, dataStepId = $$props.dataStepId);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*step*/
    16) {
      {
        $$invalidate(5, hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled);
        $$invalidate(6, hasTitle = step.options && step.options.title);
      }
    }
  };

  return [element, dataStepId, descriptionId, labelId, step, hasCancelIcon, hasTitle, handleKeyDown, firstFocusableElement, focusableElements, lastFocusableElement, classPrefix, getElement, div_binding];
}

class Shepherd_element extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      classPrefix: 11,
      element: 0,
      descriptionId: 2,
      firstFocusableElement: 8,
      focusableElements: 9,
      labelId: 3,
      lastFocusableElement: 10,
      step: 4,
      dataStepId: 1,
      getElement: 12
    });
  }

  get getElement() {
    return this.$$.ctx[12];
  }

}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {

    function polyfill() {
      // aliases
      var w = window;
      var d = document; // return if scroll behavior is supported and polyfill is not forced

      if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
      } // globals


      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468; // object gathering original scroll methods

      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      }; // define timing method

      var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */

      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }
      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */


      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */

      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }
      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */


      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */


      function shouldBailOut(firstArg) {
        if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        } // throw error when behavior is not supported


        throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
      }
      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }
      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
      }
      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
      }
      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */


      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }
      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */


      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

        elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */


      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now(); // define scroll context

        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        } // scroll looping over a frame


        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      } // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo


      w.scroll = w.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
      }; // w.scrollBy


      w.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
      }; // Element.prototype.scroll and Element.prototype.scrollTo


      Element.prototype.scroll = Element.prototype.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
      }; // Element.prototype.scrollBy


      Element.prototype.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      }; // Element.prototype.scrollIntoView


      Element.prototype.scrollIntoView = function () {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = {
        polyfill: polyfill
      };
    }
  })();
});
smoothscroll.polyfill;

smoothscroll.polyfill();
/**
 * A class representing steps to be added to a tour.
 * @extends {Evented}
 */

class Step extends Evented {
  /**
   * Create a step
   * @param {Tour} tour The tour for the step
   * @param {object} options The options for the step
   * @param {boolean} options.arrow Whether to display the arrow for the tooltip or not. Defaults to `true`.
   * @param {object} options.attachTo The element the step should be attached to on the page.
   * An object with properties `element` and `on`.
   *
   * ```js
   * const step = new Step(tour, {
   *   attachTo: { element: '.some .selector-path', on: 'left' },
   *   ...moreOptions
   * });
   * ```
   *
   * If you don’t specify an attachTo the element will appear in the middle of the screen.
   * If you omit the `on` portion of `attachTo`, the element will still be highlighted, but the tooltip will appear
   * in the middle of the screen, without an arrow pointing to the target.
   * @param {HTMLElement|string} options.attachTo.element An element selector string or a DOM element.
   * @param {string} options.attachTo.on The optional direction to place the Popper tooltip relative to the element.
   *   - Possible string values: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
   * @param {Object} options.advanceOn An action on the page which should advance shepherd to the next step.
   * It should be an object with a string `selector` and an `event` name
   * ```js
   * const step = new Step(tour, {
   *   advanceOn: { selector: '.some .selector-path', event: 'click' },
   *   ...moreOptions
   * });
   * ```
   * `event` doesn’t have to be an event inside the tour, it can be any event fired on any element on the page.
   * You can also always manually advance the Tour by calling `myTour.next()`.
   * @param {function} options.beforeShowPromise A function that returns a promise.
   * When the promise resolves, the rest of the `show` code for the step will execute.
   * @param {Object[]} options.buttons An array of buttons to add to the step. These will be rendered in a
   * footer below the main body text.
   * @param {function} options.buttons.button.action A function executed when the button is clicked on.
   * It is automatically bound to the `tour` the step is associated with, so things like `this.next` will
   * work inside the action.
   * You can use action to skip steps or navigate to specific steps, with something like:
   * ```js
   * action() {
   *   return this.show('some_step_name');
   * }
   * ```
   * @param {string} options.buttons.button.classes Extra classes to apply to the `<a>`
   * @param {boolean} options.buttons.button.disabled Should the button be disabled?
   * @param {string} options.buttons.button.label The aria-label text of the button
   * @param {boolean} options.buttons.button.secondary If true, a shepherd-button-secondary class is applied to the button
   * @param {string} options.buttons.button.text The HTML text of the button
   * @param {boolean} options.canClickTarget A boolean, that when set to false, will set `pointer-events: none` on the target
   * @param {object} options.cancelIcon Options for the cancel icon
   * @param {boolean} options.cancelIcon.enabled Should a cancel “✕” be shown in the header of the step?
   * @param {string} options.cancelIcon.label The label to add for `aria-label`
   * @param {string} options.classes A string of extra classes to add to the step's content element.
   * @param {string} options.highlightClass An extra class to apply to the `attachTo` element when it is
   * highlighted (that is, when its step is active). You can then target that selector in your CSS.
   * @param {string} options.id The string to use as the `id` for the step.
   * @param {number} options.modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
   * @param {number} options.modalOverlayOpeningRadius An amount of border radius to add around the modal overlay opening
   * @param {object} options.popperOptions Extra options to pass to Popper
   * @param {boolean|Object} options.scrollTo Should the element be scrolled to when this step is shown? If true, uses the default `scrollIntoView`,
   * if an object, passes that object as the params to `scrollIntoView` i.e. `{behavior: 'smooth', block: 'center'}`
   * @param {function} options.scrollToHandler A function that lets you override the default scrollTo behavior and
   * define a custom action to do the scrolling, and possibly other logic.
   * @param {function} options.showOn A function that, when it returns `true`, will show the step.
   * If it returns false, the step will be skipped.
   * @param {string} options.text The text in the body of the step. It can be one of three types:
   * ```
   * - HTML string
   * - `HTMLElement` object
   * - `Function` to be executed when the step is built. It must return one the two options above.
   * ```
   * @param {string} options.title The step's title. It becomes an `h3` at the top of the step. It can be one of two types:
   * ```
   * - HTML string
   * - `Function` to be executed when the step is built. It must return HTML string.
   * ```
   * @param {object} options.when You can define `show`, `hide`, etc events inside `when`. For example:
   * ```js
   * when: {
   *   show: function() {
   *     window.scrollTo(0, 0);
   *   }
   * }
   * ```
   * @return {Step} The newly created Step instance
   */
  constructor(tour, options = {}) {
    super(tour, options);
    this.tour = tour;
    this.classPrefix = this.tour.options ? normalizePrefix(this.tour.options.classPrefix) : '';
    this.styles = tour.styles;
    autoBind(this);

    this._setOptions(options);

    return this;
  }
  /**
   * Cancel the tour
   * Triggers the `cancel` event
   */


  cancel() {
    this.tour.cancel();
    this.trigger('cancel');
  }
  /**
   * Complete the tour
   * Triggers the `complete` event
   */


  complete() {
    this.tour.complete();
    this.trigger('complete');
  }
  /**
   * Remove the step, delete the step's element, and destroy the Popper instance for the step.
   * Triggers `destroy` event
   */


  destroy() {
    if (this.tooltip) {
      this.tooltip.destroy();
      this.tooltip = null;
    }

    if (isHTMLElement$1(this.el) && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
      this.el = null;
    }

    this._updateStepTargetOnHide();

    this.trigger('destroy');
  }
  /**
   * Returns the tour for the step
   * @return {Tour} The tour instance
   */


  getTour() {
    return this.tour;
  }
  /**
   * Hide the step
   */


  hide() {
    this.tour.modal.hide();
    this.trigger('before-hide');

    if (this.el) {
      this.el.hidden = true;
    }

    this._updateStepTargetOnHide();

    this.trigger('hide');
  }
  /**
   * Checks if the step should be centered or not
   * @return {boolean} True if the step is centered
   */


  isCentered() {
    const attachToOptions = parseAttachTo(this);
    return !attachToOptions.element || !attachToOptions.on;
  }
  /**
   * Check if the step is open and visible
   * @return {boolean} True if the step is open and visible
   */


  isOpen() {
    return Boolean(this.el && !this.el.hidden);
  }
  /**
   * Wraps `_show` and ensures `beforeShowPromise` resolves before calling show
   * @return {*|Promise}
   */


  show() {
    if (isFunction(this.options.beforeShowPromise)) {
      const beforeShowPromise = this.options.beforeShowPromise();

      if (!isUndefined(beforeShowPromise)) {
        return beforeShowPromise.then(() => this._show());
      }
    }

    this._show();
  }
  /**
   * Updates the options of the step.
   *
   * @param {Object} options The options for the step
   */


  updateStepOptions(options) {
    Object.assign(this.options, options);

    if (this.shepherdElementComponent) {
      this.shepherdElementComponent.$set({
        step: this
      });
    }
  }
  /**
   * Returns the element for the step
   * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if it has been destroyed
   */


  getElement() {
    return this.el;
  }
  /**
   * Returns the target for the step
   * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if query string has not been found
   */


  getTarget() {
    return this.target;
  }
  /**
   * Creates Shepherd element for step based on options
   *
   * @return {Element} The DOM element for the step tooltip
   * @private
   */


  _createTooltipContent() {
    const descriptionId = `${this.id}-description`;
    const labelId = `${this.id}-label`;
    this.shepherdElementComponent = new Shepherd_element({
      target: this.tour.options.stepsContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        descriptionId,
        labelId,
        step: this,
        styles: this.styles
      }
    });
    return this.shepherdElementComponent.getElement();
  }
  /**
   * If a custom scrollToHandler is defined, call that, otherwise do the generic
   * scrollIntoView call.
   *
   * @param {boolean|Object} scrollToOptions If true, uses the default `scrollIntoView`,
   * if an object, passes that object as the params to `scrollIntoView` i.e. `{ behavior: 'smooth', block: 'center' }`
   * @private
   */


  _scrollTo(scrollToOptions) {
    const {
      element
    } = parseAttachTo(this);

    if (isFunction(this.options.scrollToHandler)) {
      this.options.scrollToHandler(element);
    } else if (isElement$1(element) && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView(scrollToOptions);
    }
  }
  /**
   * _getClassOptions gets all possible classes for the step
   * @param {Object} stepOptions The step specific options
   * @returns {String} unique string from array of classes
   * @private
   */


  _getClassOptions(stepOptions) {
    const defaultStepOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
    const stepClasses = stepOptions.classes ? stepOptions.classes : '';
    const defaultStepOptionsClasses = defaultStepOptions && defaultStepOptions.classes ? defaultStepOptions.classes : '';
    const allClasses = [...stepClasses.split(' '), ...defaultStepOptionsClasses.split(' ')];
    const uniqClasses = new Set(allClasses);
    return Array.from(uniqClasses).join(' ').trim();
  }
  /**
   * Sets the options for the step, maps `when` to events, sets up buttons
   * @param {Object} options The options for the step
   * @private
   */


  _setOptions(options = {}) {
    let tourOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
    tourOptions = cjs({}, tourOptions || {});
    this.options = Object.assign({
      arrow: true
    }, tourOptions, options);
    const {
      when
    } = this.options;
    this.options.classes = this._getClassOptions(options);
    this.destroy();
    this.id = this.options.id || `step-${uuid()}`;

    if (when) {
      Object.keys(when).forEach(event => {
        this.on(event, when[event], this);
      });
    }
  }
  /**
   * Create the element and set up the Popper instance
   * @private
   */


  _setupElements() {
    if (!isUndefined(this.el)) {
      this.destroy();
    }

    this.el = this._createTooltipContent();

    if (this.options.advanceOn) {
      bindAdvance(this);
    }

    setupTooltip(this);
  }
  /**
   * Triggers `before-show`, generates the tooltip DOM content,
   * sets up a Popper instance for the tooltip, then triggers `show`.
   * @private
   */


  _show() {
    this.trigger('before-show');

    this._setupElements();

    if (!this.tour.modal) {
      this.tour._setupModal();
    }

    this.tour.modal.setupForStep(this);

    this._styleTargetElementForStep(this);

    this.el.hidden = false; // start scrolling to target before showing the step

    if (this.options.scrollTo) {
      setTimeout(() => {
        this._scrollTo(this.options.scrollTo);
      });
    }

    this.el.hidden = false;
    const content = this.shepherdElementComponent.getElement();
    const target = this.target || document.body;
    target.classList.add(`${this.classPrefix}shepherd-enabled`);
    target.classList.add(`${this.classPrefix}shepherd-target`);
    content.classList.add('shepherd-enabled');
    this.trigger('show');
  }
  /**
   * Modulates the styles of the passed step's target element, based on the step's options and
   * the tour's `modal` option, to visually emphasize the element
   *
   * @param step The step object that attaches to the element
   * @private
   */


  _styleTargetElementForStep(step) {
    const targetElement = step.target;

    if (!targetElement) {
      return;
    }

    if (step.options.highlightClass) {
      targetElement.classList.add(step.options.highlightClass);
    }

    if (step.options.canClickTarget === false) {
      targetElement.classList.add('shepherd-target-click-disabled');
    }
  }
  /**
   * When a step is hidden, remove the highlightClass and 'shepherd-enabled'
   * and 'shepherd-target' classes
   * @private
   */


  _updateStepTargetOnHide() {
    const target = this.target || document.body;

    if (this.options.highlightClass) {
      target.classList.remove(this.options.highlightClass);
    }

    target.classList.remove('shepherd-target-click-disabled', `${this.classPrefix}shepherd-enabled`, `${this.classPrefix}shepherd-target`);
  }

}

/**
 * Cleanup the steps and set pointerEvents back to 'auto'
 * @param tour The tour object
 */
function cleanupSteps(tour) {
  if (tour) {
    const {
      steps
    } = tour;
    steps.forEach(step => {
      if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
        if (step.target instanceof HTMLElement) {
          step.target.classList.remove('shepherd-target-click-disabled');
        }
      }
    });
  }
}

/**
 * Generates the svg path data for a rounded rectangle overlay
 * @param {Object} dimension - Dimensions of rectangle.
 * @param {number} width - Width.
 * @param {number} height - Height.
 * @param {number} [x=0] - Offset from top left corner in x axis. default 0.
 * @param {number} [y=0] - Offset from top left corner in y axis. default 0.
 * @param {number} [r=0] - Corner Radius. Keep this smaller than  half of width or height.
 * @returns {string} - Rounded rectangle overlay path data.
 */
function makeOverlayPath({
  width,
  height,
  x = 0,
  y = 0,
  r = 0
}) {
  const {
    innerWidth: w,
    innerHeight: h
  } = window;
  return `M${w},${h}\
H0\
V0\
H${w}\
V${h}\
Z\
M${x + r},${y}\
a${r},${r},0,0,0-${r},${r}\
V${height + y - r}\
a${r},${r},0,0,0,${r},${r}\
H${width + x - r}\
a${r},${r},0,0,0,${r}-${r}\
V${y + r}\
a${r},${r},0,0,0-${r}-${r}\
Z`;
}

/* src/js/components/shepherd-modal.svelte generated by Svelte v3.37.0 */

function create_fragment(ctx) {
  let svg;
  let path;
  let svg_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "d",
      /*pathDefinition*/
      ctx[2]);
      attr(svg, "class", svg_class_value = `${
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`);
    },

    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      /*svg_binding*/

      ctx[11](svg);

      if (!mounted) {
        dispose = listen(svg, "touchmove",
        /*_preventModalOverlayTouch*/
        ctx[3]);
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*pathDefinition*/
      4) {
        attr(path, "d",
        /*pathDefinition*/
        ctx[2]);
      }

      if (dirty &
      /*modalIsVisible*/
      2 && svg_class_value !== (svg_class_value = `${
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`)) {
        attr(svg, "class", svg_class_value);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(svg);
      /*svg_binding*/

      ctx[11](null);
      mounted = false;
      dispose();
    }

  };
}

function _getScrollParent(element) {
  if (!element) {
    return null;
  }

  const isHtmlElement = element instanceof HTMLElement;
  const overflowY = isHtmlElement && window.getComputedStyle(element).overflowY;
  const isScrollable = overflowY !== "hidden" && overflowY !== "visible";

  if (isScrollable && element.scrollHeight >= element.clientHeight) {
    return element;
  }

  return _getScrollParent(element.parentElement);
}
/**
 * Get the visible height of the target element relative to its scrollParent.
 * If there is no scroll parent, the height of the element is returned.
 *
 * @param {HTMLElement} element The target element
 * @param {HTMLElement} [scrollParent] The scrollable parent element
 * @returns {{y: number, height: number}}
 * @private
 */


function _getVisibleHeight(element, scrollParent) {
  const elementRect = element.getBoundingClientRect();
  let top = elementRect.y || elementRect.top;
  let bottom = elementRect.bottom || top + elementRect.height;

  if (scrollParent) {
    const scrollRect = scrollParent.getBoundingClientRect();
    const scrollTop = scrollRect.y || scrollRect.top;
    const scrollBottom = scrollRect.bottom || scrollTop + scrollRect.height;
    top = Math.max(top, scrollTop);
    bottom = Math.min(bottom, scrollBottom);
  }

  const height = Math.max(bottom - top, 0); // Default to 0 if height is negative

  return {
    y: top,
    height
  };
}

function instance($$self, $$props, $$invalidate) {
  let {
    element
  } = $$props,
      {
    openingProperties
  } = $$props;
  uuid();
  let modalIsVisible = false;
  let rafId = undefined;
  let pathDefinition;
  closeModalOpening();

  const getElement = () => element;

  function closeModalOpening() {
    $$invalidate(4, openingProperties = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      r: 0
    });
  }

  function hide() {
    $$invalidate(1, modalIsVisible = false); // Ensure we cleanup all event listeners when we hide the modal

    _cleanupStepEventListeners();
  }

  function positionModal(modalOverlayOpeningPadding = 0, modalOverlayOpeningRadius = 0, scrollParent, targetElement) {
    if (targetElement) {
      const {
        y,
        height
      } = _getVisibleHeight(targetElement, scrollParent);

      const {
        x,
        width,
        left
      } = targetElement.getBoundingClientRect(); // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top

      $$invalidate(4, openingProperties = {
        width: width + modalOverlayOpeningPadding * 2,
        height: height + modalOverlayOpeningPadding * 2,
        x: (x || left) - modalOverlayOpeningPadding,
        y: y - modalOverlayOpeningPadding,
        r: modalOverlayOpeningRadius
      });
    } else {
      closeModalOpening();
    }
  }

  function setupForStep(step) {
    // Ensure we move listeners from the previous step, before we setup new ones
    _cleanupStepEventListeners();

    if (step.tour.options.useModalOverlay) {
      _styleForStep(step);

      show();
    } else {
      hide();
    }
  }

  function show() {
    $$invalidate(1, modalIsVisible = true);
  }

  const _preventModalBodyTouch = e => {
    e.preventDefault();
  };

  const _preventModalOverlayTouch = e => {
    e.stopPropagation();
  };
  /**
  * Add touchmove event listener
  * @private
  */


  function _addStepEventListeners() {
    // Prevents window from moving on touch.
    window.addEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  /**
  * Cancel the requestAnimationFrame loop and remove touchmove event listeners
  * @private
  */


  function _cleanupStepEventListeners() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = undefined;
    }

    window.removeEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  /**
  * Style the modal for the step
  * @param {Step} step The step to style the opening for
  * @private
  */


  function _styleForStep(step) {
    const {
      modalOverlayOpeningPadding,
      modalOverlayOpeningRadius
    } = step.options;

    const scrollParent = _getScrollParent(step.target); // Setup recursive function to call requestAnimationFrame to update the modal opening position


    const rafLoop = () => {
      rafId = undefined;
      positionModal(modalOverlayOpeningPadding, modalOverlayOpeningRadius, scrollParent, step.target);
      rafId = requestAnimationFrame(rafLoop);
    };

    rafLoop();

    _addStepEventListeners();
  }

  function svg_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("openingProperties" in $$props) $$invalidate(4, openingProperties = $$props.openingProperties);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*openingProperties*/
    16) {
      $$invalidate(2, pathDefinition = makeOverlayPath(openingProperties));
    }
  };

  return [element, modalIsVisible, pathDefinition, _preventModalOverlayTouch, openingProperties, getElement, closeModalOpening, hide, positionModal, setupForStep, show, svg_binding];
}

class Shepherd_modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      element: 0,
      openingProperties: 4,
      getElement: 5,
      closeModalOpening: 6,
      hide: 7,
      positionModal: 8,
      setupForStep: 9,
      show: 10
    });
  }

  get getElement() {
    return this.$$.ctx[5];
  }

  get closeModalOpening() {
    return this.$$.ctx[6];
  }

  get hide() {
    return this.$$.ctx[7];
  }

  get positionModal() {
    return this.$$.ctx[8];
  }

  get setupForStep() {
    return this.$$.ctx[9];
  }

  get show() {
    return this.$$.ctx[10];
  }

}

const Shepherd = new Evented();
/**
 * Class representing the site tour
 * @extends {Evented}
 */

class Tour extends Evented {
  /**
   * @param {Object} options The options for the tour
   * @param {boolean} options.confirmCancel If true, will issue a `window.confirm` before cancelling
   * @param {string} options.confirmCancelMessage The message to display in the confirm dialog
   * @param {string} options.classPrefix The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
   * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
   * @param {boolean} options.exitOnEsc Exiting the tour with the escape key will be enabled unless this is explicitly
   * set to false.
   * @param {boolean} options.keyboardNavigation Navigating the tour via left and right arrow keys will be enabled
   * unless this is explicitly set to false.
   * @param {HTMLElement} options.stepsContainer An optional container element for the steps.
   * If not set, the steps will be appended to `document.body`.
   * @param {HTMLElement} options.modalContainer An optional container element for the modal.
   * If not set, the modal will be appended to `document.body`.
   * @param {object[] | Step[]} options.steps An array of step options objects or Step instances to initialize the tour with
   * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
   * dynamically generated `id` property -- which is also set on the `body` element as the `data-shepherd-active-tour` attribute
   * whenever the tour becomes active.
   * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
   * modal overlay. If true, the overlay will create an opening around the target element so that it
   * can remain interactive
   * @returns {Tour}
   */
  constructor(options = {}) {
    super(options);
    autoBind(this);
    const defaultTourOptions = {
      exitOnEsc: true,
      keyboardNavigation: true
    };
    this.options = Object.assign({}, defaultTourOptions, options);
    this.classPrefix = normalizePrefix(this.options.classPrefix);
    this.steps = [];
    this.addSteps(this.options.steps); // Pass these events onto the global Shepherd object

    const events = ['active', 'cancel', 'complete', 'inactive', 'show', 'start'];
    events.map(event => {
      (e => {
        this.on(e, opts => {
          opts = opts || {};
          opts.tour = this;
          Shepherd.trigger(e, opts);
        });
      })(event);
    });

    this._setTourID();

    return this;
  }
  /**
   * Adds a new step to the tour
   * @param {Object|Step} options An object containing step options or a Step instance
   * @param {number} index The optional index to insert the step at. If undefined, the step
   * is added to the end of the array.
   * @return {Step} The newly added step
   */


  addStep(options, index) {
    let step = options;

    if (!(step instanceof Step)) {
      step = new Step(this, step);
    } else {
      step.tour = this;
    }

    if (!isUndefined(index)) {
      this.steps.splice(index, 0, step);
    } else {
      this.steps.push(step);
    }

    return step;
  }
  /**
   * Add multiple steps to the tour
   * @param {Array<object> | Array<Step>} steps The steps to add to the tour
   */


  addSteps(steps) {
    if (Array.isArray(steps)) {
      steps.forEach(step => {
        this.addStep(step);
      });
    }

    return this;
  }
  /**
   * Go to the previous step in the tour
   */


  back() {
    const index = this.steps.indexOf(this.currentStep);
    this.show(index - 1, false);
  }
  /**
   * Calls _done() triggering the 'cancel' event
   * If `confirmCancel` is true, will show a window.confirm before cancelling
   */


  cancel() {
    if (this.options.confirmCancel) {
      const cancelMessage = this.options.confirmCancelMessage || 'Are you sure you want to stop the tour?';
      const stopTour = window.confirm(cancelMessage);

      if (stopTour) {
        this._done('cancel');
      }
    } else {
      this._done('cancel');
    }
  }
  /**
   * Calls _done() triggering the `complete` event
   */


  complete() {
    this._done('complete');
  }
  /**
   * Gets the step from a given id
   * @param {Number|String} id The id of the step to retrieve
   * @return {Step} The step corresponding to the `id`
   */


  getById(id) {
    return this.steps.find(step => {
      return step.id === id;
    });
  }
  /**
   * Gets the current step
   * @returns {Step|null}
   */


  getCurrentStep() {
    return this.currentStep;
  }
  /**
   * Hide the current step
   */


  hide() {
    const currentStep = this.getCurrentStep();

    if (currentStep) {
      return currentStep.hide();
    }
  }
  /**
   * Check if the tour is active
   * @return {boolean}
   */


  isActive() {
    return Shepherd.activeTour === this;
  }
  /**
   * Go to the next step in the tour
   * If we are at the end, call `complete`
   */


  next() {
    const index = this.steps.indexOf(this.currentStep);

    if (index === this.steps.length - 1) {
      this.complete();
    } else {
      this.show(index + 1, true);
    }
  }
  /**
   * Removes the step from the tour
   * @param {String} name The id for the step to remove
   */


  removeStep(name) {
    const current = this.getCurrentStep(); // Find the step, destroy it and remove it from this.steps

    this.steps.some((step, i) => {
      if (step.id === name) {
        if (step.isOpen()) {
          step.hide();
        }

        step.destroy();
        this.steps.splice(i, 1);
        return true;
      }
    });

    if (current && current.id === name) {
      this.currentStep = undefined; // If we have steps left, show the first one, otherwise just cancel the tour

      this.steps.length ? this.show(0) : this.cancel();
    }
  }
  /**
   * Show a specific step in the tour
   * @param {Number|String} key The key to look up the step by
   * @param {Boolean} forward True if we are going forward, false if backward
   */


  show(key = 0, forward = true) {
    const step = isString(key) ? this.getById(key) : this.steps[key];

    if (step) {
      this._updateStateBeforeShow();

      const shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn(); // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal

      if (shouldSkipStep) {
        this._skipStep(step, forward);
      } else {
        this.trigger('show', {
          step,
          previous: this.currentStep
        });
        this.currentStep = step;
        step.show();
      }
    }
  }
  /**
   * Start the tour
   */


  start() {
    this.trigger('start'); // Save the focused element before the tour opens

    this.focusedElBeforeOpen = document.activeElement;
    this.currentStep = null;

    this._setupModal();

    this._setupActiveTour();

    this.next();
  }
  /**
   * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
   * @param {String} event The event name to trigger
   * @private
   */


  _done(event) {
    const index = this.steps.indexOf(this.currentStep);

    if (Array.isArray(this.steps)) {
      this.steps.forEach(step => step.destroy());
    }

    cleanupSteps(this);
    this.trigger(event, {
      index
    });
    Shepherd.activeTour = null;
    this.trigger('inactive', {
      tour: this
    });

    if (this.modal) {
      this.modal.hide();
    }

    if (event === 'cancel' || event === 'complete') {
      if (this.modal) {
        const modalContainer = document.querySelector('.shepherd-modal-overlay-container');

        if (modalContainer) {
          modalContainer.remove();
        }
      }
    } // Focus the element that was focused before the tour started


    if (isHTMLElement$1(this.focusedElBeforeOpen)) {
      this.focusedElBeforeOpen.focus();
    }
  }
  /**
   * Make this tour "active"
   * @private
   */


  _setupActiveTour() {
    this.trigger('active', {
      tour: this
    });
    Shepherd.activeTour = this;
  }
  /**
   * _setupModal create the modal container and instance
   * @private
   */


  _setupModal() {
    this.modal = new Shepherd_modal({
      target: this.options.modalContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        styles: this.styles
      }
    });
  }
  /**
   * Called when `showOn` evaluates to false, to skip the step
   * @param {Step} step The step to skip
   * @param {Boolean} forward True if we are going forward, false if backward
   * @private
   */


  _skipStep(step, forward) {
    const index = this.steps.indexOf(step);
    const nextIndex = forward ? index + 1 : index - 1;
    this.show(nextIndex, forward);
  }
  /**
   * Before showing, hide the current step and if the tour is not
   * already active, call `this._setupActiveTour`.
   * @private
   */


  _updateStateBeforeShow() {
    if (this.currentStep) {
      this.currentStep.hide();
    }

    if (!this.isActive()) {
      this._setupActiveTour();
    }
  }
  /**
   * Sets this.id to `${tourName}--${uuid}`
   * @private
   */


  _setTourID() {
    const tourName = this.options.tourName || 'tour';
    this.id = `${tourName}--${uuid()}`;
  }

}

Object.assign(Shepherd, {
  Tour,
  Step
});

/* harmony default export */ __webpack_exports__["default"] = (Shepherd);
//# sourceMappingURL=shepherd.esm.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9jc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvanMvb25ib2FyZGluZ1dpemFyZC9PbmJvYXJkaW5nV2l6YXJkLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvanMvb25ib2FyZGluZ1dpemFyZC9jb25maWcvc2hlcGhlcmRDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9qcy9vbmJvYXJkaW5nV2l6YXJkL2NvbmZpZy9zdGVwcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2pzL29uYm9hcmRpbmdXaXphcmQvY29uZmlnL3dpemFyZFRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2pzL29uYm9hcmRpbmdXaXphcmQvaGVscGVycy9maWx0ZXJNZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9qcy9vbmJvYXJkaW5nV2l6YXJkL2hlbHBlcnMvc3RlcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9qcy9vbmJvYXJkaW5nV2l6YXJkL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5nZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoZXBoZXJkLmpzL2Rpc3QvanMvc2hlcGhlcmQuZXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsib25ib2FyZGluZ1dpemFyZCIsImNvbnN0cnVjdG9yIiwidG91clN0ZXBzIiwic3RlcHMiLCJ0b3VyQ29uZmlnIiwic2hlcGhlcmRDb25maWciLCJ0b3VyUXVpdENvbmZpcm1hdGlvbiIsInN0ZXBRdWl0Q29uZmlybWF0aW9uIiwic3RlcEZhY3RvcnkiLCJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZCYXJJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2aW91c1N0ZXBJbmRleCIsIm1vZGFsQ29sbGFwc2VIYW5kbGVyIiwiY3VycmVudFN0ZXAiLCJ0b3VyIiwiZWwiLCJidXR0b25Db2xsYXBzZSIsImlzQ29sbGFwc2VkIiwiY2xhc3NMaXN0IiwiaW5jbHVkZXMiLCJleHBhbmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwidGV4dENvbnRlbnQiLCJfZ2V0Iiwid2l6YXJkVHJhbnNsYXRpb25zIiwidGV4dE9wZW4iLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwidG9nZ2xlIiwic2V0QXR0cmlidXRlIiwiaGFuZGxlUXVpdENvbmZpcm1hdGlvbiIsInJldHVyblN0ZXBJbmRleCIsImFkZFN0ZXAiLCJidXR0b25zIiwic3RlcEJ1dHRvbnMiLCJzaG93IiwibmF2YmFyVmlzaWJpbGl0eUhhbmRsZXIiLCJpc0FjdGl2ZSIsIm5hdmJhclByb2dyZXNzSGFuZGxlciIsImN1cnJlbnRTdGVwUHJvZ3Jlc3MiLCJnZXRDdXJyZW50U3RlcCIsIm9wdGlvbnMiLCJoaWdobGlnaHRDbGFzcyIsImZvckVhY2giLCJuYXZCYXJJdGVtIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwicmVzdGFydFRvdXJMaXN0ZW5lciIsInJlc3RhcnRUb3VyVHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydCIsImluaXRUb3VyIiwiU2hlcGhlcmQiLCJUb3VyIiwic3RlcCIsInN0ZXBJbmRleCIsIndoZW4iLCJpZCIsIm9uIiwidXNlTW9kYWxPdmVybGF5IiwiY29uZmlybUNhbmNlbCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImV4aXRPbkVzYyIsImRlZmF1bHRTdGVwT3B0aW9ucyIsImNsYXNzIiwiYXJyb3ciLCJjYW5jZWxJY29uIiwiZW5hYmxlZCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJibG9jayIsIm1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXMiLCJwYXltZW50TWV0aG9kUGF5bWVudEFwaSIsInBheW1lbnRNZXRob2RPcmRlckFwaSIsImVudmlyb21lbnRUZXN0IiwiZW52aXJvbWVudExpdmUiLCJzdGVwUGF5bWVudFR5cGUiLCJ0ZXh0IiwiY2xhc3NlcyIsImF0dGFjaFRvIiwiZWxlbWVudCIsImJ0bk5leHRDbGFzcyIsInN0ZXBQYXltZW50RGVzY3JpcHRpb24iLCJzdGVwT3JkZXJBcGkiLCJ0aXRsZSIsImN1c3RvbUJ1dHRvbnMiLCJhY3Rpb24iLCJyZW1vdmVTdGVwIiwiY29tcGxldGUiLCJzZWNvbmRhcnkiLCJidG5CYWNrVGV4dCIsImJ0bk5leHRUZXh0IiwiYnRuQ29sbGFwc2VDbGFzcyIsImJ0bkNsb3NlQ2xhc3MiLCJ1cmxNb2xsaWUiLCJzaG93T24iLCJjdXJyZW50U3RlcFZhbGlkYXRvciIsInBheW1lbnRUeXBlSW5kaWNhdG9yIiwibWV0aG9kTG9hZEluZGljYXRvciIsImJ0bkJhY2tDbGFzcyIsInN0ZXBTdGFydCIsInN0ZXBNb2xsaWVDb25uZWN0Iiwic3RlcEVudiIsInN0ZXBBcGlLZXkiLCJzdGVwQ2hlY2tvdXRDb25maWciLCJzdGVwTW9sbGllQ29tcG9uZW50cyIsInN0ZXBNb2xsaWVQYXltZW50cyIsInN0ZXBNZXRob2RDb25maWciLCJzdGVwTWV0aG9kUmVxdWlyZWQiLCJzdGVwRXJyb3JUaXRsZSIsInN0ZXBFcnJvckRlc2NyaXB0aW9uIiwic3RlcFBheW1lbnRUaXRsZSIsInN0ZXBJbWFnZVVwbG9hZCIsInN0ZXBDb3VudHJ5UmVzdHJpY3Rpb24iLCJzdGVwUGF5bWVudE1ldGhvZCIsInN0ZXBPcmRlck51bWJlciIsInN0ZXBPcmRlcnNBUEkiLCJzdGVwUGF5bWVudHNBUEkiLCJzdGVwRmVlcyIsInN0ZXBTYXZlIiwic3RlcEZpbmlzaFdpemFyZCIsImdvQmFjayIsInNraXBXaXphcmQiLCJzdGFydFdpemFyZCIsImxvZ2luTW9sbGllQWNjb3VudCIsIm5leHRXaXRoQXJyb3ciLCJuZXh0IiwiY3JlYXRlTW9sbGllQWNjb3VudCIsImZpbmlzaFdpemFyZCIsInF1aXRDb25maXJtIiwicXVpdENhbmNlbCIsImNvbW1vbiIsIm9wZW4iLCJpdGVtIiwiZXhwZWN0ZWRWYWx1ZSIsImluZGljYXRlZEl0ZW0iLCJpbmRpY2F0ZWRJdGVtVmFsdWUiLCJ2YWx1ZSIsIm1lc3NhZ2VDb250YWluZXIiLCJtZXNzYWdlV2luZG93IiwidmFsaWRhdGVGaWVsZHMiLCJlbGVtZW50cyIsImVycm9ycyIsInB1c2giLCJldmVyeSIsInBvcHVwIiwidmFsaWRhdGlvbkNvbnRhaW5lciIsInZhbGlkYXRpb25FbGVtZW50cyIsInBhcmVudE5vZGUiLCJsZW5ndGgiLCJoYW5kbGVTdGVwQnV0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SUFBSSxDQUFDc0MsUUFBTCxHOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLFFBQVEsT0FBTyxTQUFTLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNsNkJBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMkRBQTJEOzs7QUFHM0Q7O0FBRUE7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjs7QUFFQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyxNQUFNOztBQUVQO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNIQUFzSDs7QUFFdEg7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJLEVBQUU7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7O0FBRUEseUJBQXlCLHFDQUFxQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLG1EQUFtRDtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHlDQUF5QyxrREFBa0Q7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNENBQTRDO0FBQzVDO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxzQ0FBc0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMERBQTBEO0FBQzFELDZGQUE2RjtBQUM3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1FQUFtRTtBQUNuRTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFD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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7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QUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFlBQVk7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFlBQVk7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsWUFBWTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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U0FBUyxJQUFJLEtBQUs7QUFDMUM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLElBQUksT0FBTztBQUNyQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHVFQUFRLEVBQUM7QUFDeEI7Ozs7Ozs7Ozs7OztBQ3Z4TEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImFkbWluLWVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYWRtaW4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uLy4uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2VudHJ5LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9jc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgXCIuL2pzL21haW5cIjtcbiIsImltcG9ydCAnLi9vbmJvYXJkaW5nV2l6YXJkL21haW4nO1xuIiwiaW1wb3J0IFNoZXBoZXJkIGZyb20gJ3NoZXBoZXJkLmpzJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuXG5pbXBvcnQge3N0ZXBzLCBzdGVwUXVpdENvbmZpcm1hdGlvbn0gZnJvbSAnLi9jb25maWcvc3RlcHMnO1xuaW1wb3J0IHNoZXBoZXJkQ29uZmlnIGZyb20gJy4vY29uZmlnL3NoZXBoZXJkQ29uZmlnJztcbmltcG9ydCBzdGVwRmFjdG9yeSBmcm9tICcuL2hlbHBlcnMvc3RlcEZhY3RvcnknO1xuaW1wb3J0IHdpemFyZFRyYW5zbGF0aW9ucyBmcm9tICcuL2NvbmZpZy93aXphcmRUcmFuc2xhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvbmJvYXJkaW5nV2l6YXJkIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0dG91clN0ZXBzID0gc3RlcHMsXG5cdFx0dG91ckNvbmZpZyA9IHNoZXBoZXJkQ29uZmlnLFxuXHRcdHRvdXJRdWl0Q29uZmlybWF0aW9uID0gc3RlcFF1aXRDb25maXJtYXRpb25cblx0KSB7XG5cdFx0dGhpcy5zdGVwcyA9IHN0ZXBGYWN0b3J5KHRvdXJTdGVwcyk7XG5cdFx0dGhpcy5zdGVwUXVpdENvbmZpcm1hdGlvbiA9IHN0ZXBGYWN0b3J5KHRvdXJRdWl0Q29uZmlybWF0aW9uKVswXTtcblx0XHR0aGlzLnRvdXJDb25maWcgPSB0b3VyQ29uZmlnO1xuXHRcdHRoaXMubmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW9uYm9hcmRpbmctd2l6YXJkJyk7XG5cdFx0dGhpcy5uYXZCYXJJdGVtcyA9IFtcblx0XHRcdC4uLnRoaXMubmF2YmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1vbmJvYXJkaW5nLXdpemFyZC1wcm9ncmVzcycpLFxuXHRcdF07XG5cdFx0dGhpcy5wcmV2aW91c1N0ZXBJbmRleCA9IDA7XG5cdH1cblxuXHRtb2RhbENvbGxhcHNlSGFuZGxlcigpIHtcblx0XHRjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMudG91ci5jdXJyZW50U3RlcC5lbDtcblx0XHRjb25zdCBidXR0b25Db2xsYXBzZSA9IGN1cnJlbnRTdGVwLnF1ZXJ5U2VsZWN0b3IoJy5qcy10b3VyLWNvbGxhcHNlJyk7XG5cdFx0Y29uc3QgaXNDb2xsYXBzZWQgPSBbLi4uY3VycmVudFN0ZXAuY2xhc3NMaXN0XS5pbmNsdWRlcyhcblx0XHRcdCdzaGVwaGVyZC1lbGVtZW50LS1jb2xsYXBzZWQnXG5cdFx0KTtcblxuXHRcdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2hlcGhlcmQtYnV0dG9uX19vcGVuJyk7XG5cdFx0ZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2pzLXNoZXBoZXJkLWV4cGFuZCcpO1xuXHRcdGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCAnY29tbW9uLm9wZW4nKTtcblxuXHRcdGNvbnN0IHRleHRPcGVuID0gYnV0dG9uQ29sbGFwc2UucXVlcnlTZWxlY3RvcignLmpzLXNoZXBoZXJkLWV4cGFuZCcpO1xuXG5cdFx0aWYgKGlzQ29sbGFwc2VkKSB7XG5cdFx0XHRidXR0b25Db2xsYXBzZS5yZW1vdmVDaGlsZCh0ZXh0T3Blbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkNvbGxhcHNlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cdFx0fVxuXG5cdFx0Y3VycmVudFN0ZXAuY2xhc3NMaXN0LnRvZ2dsZShcblx0XHRcdCdzaGVwaGVyZC1lbGVtZW50LS1jb2xsYXBzZWQnLFxuXHRcdFx0IWlzQ29sbGFwc2VkXG5cdFx0KTtcblx0XHRjdXJyZW50U3RlcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgIWlzQ29sbGFwc2VkKTtcblx0fTtcblxuXHRoYW5kbGVRdWl0Q29uZmlybWF0aW9uKCkge1xuXHRcdGNvbnN0IHJldHVyblN0ZXBJbmRleCA9IHRoaXMucHJldmlvdXNTdGVwSW5kZXg7XG5cblx0XHR0aGlzLnRvdXIuYWRkU3RlcCh7XG5cdFx0XHQuLi50aGlzLnN0ZXBRdWl0Q29uZmlybWF0aW9uLFxuXHRcdFx0YnV0dG9uczogdGhpcy5zdGVwUXVpdENvbmZpcm1hdGlvbi5zdGVwQnV0dG9ucyhcblx0XHRcdFx0dGhpcyxcblx0XHRcdFx0cmV0dXJuU3RlcEluZGV4XG5cdFx0XHQpLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy50b3VyLnNob3coJ3N0ZXAtcXVpdC1jb25maXJtYXRpb24nLCB0cnVlKTtcblx0fTtcblxuXHRuYXZiYXJWaXNpYmlsaXR5SGFuZGxlcihpc0FjdGl2ZSkge1xuXHRcdHRoaXMubmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScsICFpc0FjdGl2ZSk7XG5cdFx0dGhpcy5uYXZiYXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFpc0FjdGl2ZSk7XG5cdH07XG5cblx0bmF2YmFyUHJvZ3Jlc3NIYW5kbGVyKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRTdGVwUHJvZ3Jlc3MgPVxuXHRcdFx0dGhpcy50b3VyLmdldEN1cnJlbnRTdGVwKCkub3B0aW9ucy5oaWdobGlnaHRDbGFzcztcblxuXHRcdHRoaXMubmF2QmFySXRlbXMuZm9yRWFjaCgobmF2QmFySXRlbSkgPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuYXZCYXJJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uLXN0ZXAnKSA9PT1cblx0XHRcdFx0Y3VycmVudFN0ZXBQcm9ncmVzc1xuXHRcdFx0KSB7XG5cdFx0XHRcdG5hdkJhckl0ZW0uY2xhc3NMaXN0LmFkZCgnb25ib2FyZGluZy13aXphcmRfX3N0ZXAtLWN1cnJlbnQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5hdkJhckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb25ib2FyZGluZy13aXphcmRfX3N0ZXAtLWN1cnJlbnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRyZXN0YXJ0VG91ckxpc3RlbmVyKCkge1xuXHRcdGNvbnN0IHJlc3RhcnRUb3VyVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZXN0YXJ0LXRvdXInKTtcblxuXHRcdHJlc3RhcnRUb3VyVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMudG91ci5zdGFydCgpO1xuXHRcdFx0dGhpcy5uYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdFx0fSk7XG5cdH07XG5cblx0aW5pdFRvdXIoKSB7XG5cdFx0aWYgKHRoaXMubmF2YmFyKSB7XG5cdFx0XHR0aGlzLnRvdXIgPSBuZXcgU2hlcGhlcmQuVG91cih7XG5cdFx0XHRcdC4uLnRoaXMudG91ckNvbmZpZyxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXAsIHN0ZXBJbmRleCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdXIuYWRkU3RlcCh7XG5cdFx0XHRcdFx0Li4uc3RlcCxcblx0XHRcdFx0XHRidXR0b25zOiBzdGVwLnN0ZXBCdXR0b25zKHRoaXMsIHN0ZXBJbmRleCksXG5cdFx0XHRcdFx0d2hlbjoge1xuXHRcdFx0XHRcdFx0c2hvdzogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByZXZpb3VzU3RlcEluZGV4ID1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvdXIuZ2V0Q3VycmVudFN0ZXAoKS5pZDtcblx0XHRcdFx0XHRcdFx0dGhpcy5uYXZiYXJQcm9ncmVzc0hhbmRsZXIoKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50b3VyLm9uKCdjb21wbGV0ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5uYXZiYXJWaXNpYmlsaXR5SGFuZGxlcihmYWxzZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50b3VyLnN0YXJ0KCk7XG5cblx0XHRcdHRoaXMucmVzdGFydFRvdXJMaXN0ZW5lcigpO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHR1c2VNb2RhbE92ZXJsYXk6IHRydWUsXG5cdGNvbmZpcm1DYW5jZWw6IGZhbHNlLFxuXHRrZXlib2FyZE5hdmlnYXRpb246IGZhbHNlLFxuXHRleGl0T25Fc2M6IGZhbHNlLFxuXHRkZWZhdWx0U3RlcE9wdGlvbnM6IHtcblx0XHRjbGFzczogJ29uYm9hcmRpbmdXaXphcmQtcG9wdXAnLFxuXHRcdGFycm93OiBmYWxzZSxcblx0XHRjYW5jZWxJY29uOiB7XG5cdFx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHR9LFxuXHRcdHNjcm9sbFRvOiB7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcid9LFxuXHRcdG1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXM6IDQsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHtcblx0cGF5bWVudFR5cGVJbmRpY2F0b3IsXG5cdG1ldGhvZExvYWRJbmRpY2F0b3IsXG5cdGN1cnJlbnRTdGVwVmFsaWRhdG9yLFxufSBmcm9tICcuLi9oZWxwZXJzL2ZpbHRlck1ldGhvZCc7XG5cbmNvbnN0IHBheW1lbnRNZXRob2RQYXltZW50QXBpID0gJ1BBWU1FTlRfQVBJJztcbmNvbnN0IHBheW1lbnRNZXRob2RPcmRlckFwaSA9ICdPUkRFUl9BUEknO1xuY29uc3QgZW52aXJvbWVudFRlc3QgPSAnMCc7XG5jb25zdCBlbnZpcm9tZW50TGl2ZSA9ICcxJztcblxuZXhwb3J0IGNvbnN0IHN0ZXBQYXltZW50VHlwZSA9IHtcblx0aWQ6ICdzdGVwLXBheW1lbnQtdHlwZScsXG5cdHRleHQ6ICdzdGVwUGF5bWVudFR5cGUudGV4dCcsXG5cdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdGF0dGFjaFRvOiB7XG5cdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnRUeXBlJyxcblx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdH0sXG5cdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcFBheW1lbnREZXNjcmlwdGlvbiA9IHtcblx0aWQ6ICdzdGVwLXBheW1lbnQtZGVzY3JpcHRpb24nLFxuXHR0ZXh0OiAnc3RlcFBheW1lbnREZXNjcmlwdGlvbi50ZXh0Jyxcblx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0YXR0YWNoVG86IHtcblx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudERlc2NyaXB0aW9uJyxcblx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdH0sXG5cdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcE9yZGVyQXBpID0ge1xuXHRpZDogJ3N0ZXAtb3JkZXItYXBpJyxcblx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0dGV4dDogJ3N0ZXBPcmRlckFwaS50ZXh0Jyxcblx0YXR0YWNoVG86IHtcblx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudFR5cGUnLFxuXHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0fSxcblx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwUXVpdENvbmZpcm1hdGlvbiA9IFtcblx0e1xuXHRcdGlkOiAnc3RlcC1xdWl0LWNvbmZpcm1hdGlvbicsXG5cdFx0dGl0bGU6ICdzdGVwUXVpdENvbmZpcm1hdGlvbi50aXRsZScsXG5cdFx0dGV4dDogJ3N0ZXBRdWl0Q29uZmlybWF0aW9uLnRleHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnaW50cm8nLFxuXHRcdGN1c3RvbUJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ3N0ZXBCdXR0b25zLnF1aXRDb25maXJtJyxcblx0XHRcdFx0YWN0aW9uOiAob25ib2FyZGluZ1dpemFyZCkgPT4ge1xuXHRcdFx0XHRcdG9uYm9hcmRpbmdXaXphcmQudG91ci5yZW1vdmVTdGVwKCdzdGVwLXF1aXQtY29uZmlybWF0aW9uJyk7XG5cdFx0XHRcdFx0b25ib2FyZGluZ1dpemFyZC50b3VyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNlY29uZGFyeTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICdzdGVwQnV0dG9ucy5xdWl0Q2FuY2VsJyxcblx0XHRcdFx0YWN0aW9uOiAob25ib2FyZGluZ1dpemFyZCwgc3RlcEluZGV4KSA9PiB7XG5cdFx0XHRcdFx0b25ib2FyZGluZ1dpemFyZC50b3VyLnNob3coc3RlcEluZGV4LCB0cnVlKTtcblx0XHRcdFx0XHRvbmJvYXJkaW5nV2l6YXJkLnRvdXIucmVtb3ZlU3RlcCgnc3RlcC1xdWl0LWNvbmZpcm1hdGlvbicpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBzID0gW1xuXHR7XG5cdFx0aWQ6ICdzdGVwLXN0YXJ0Jyxcblx0XHR0aXRsZTogJ3N0ZXBTdGFydC50aXRsZScsXG5cdFx0dGV4dDogJ3N0ZXBTdGFydC50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tZmlyc3QnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnaW50cm8nLFxuXHRcdGJ0bkJhY2tUZXh0OiAnc3RlcEJ1dHRvbnMuc2tpcFdpemFyZCcsXG5cdFx0YnRuTmV4dFRleHQ6ICdzdGVwQnV0dG9ucy5zdGFydFdpemFyZCcsXG5cdFx0YnRuQ29sbGFwc2VDbGFzczogJ2Qtbm9uZScsXG5cdFx0YnRuQ2xvc2VDbGFzczogJ2Qtbm9uZScsXG5cdH0sXG5cdHtcblx0XHRpZDogJ3N0ZXAtbW9sbGllLWNvbm5lY3QnLFxuXHRcdHRpdGxlOiAnc3RlcE1vbGxpZUNvbm5lY3QudGl0bGUnLFxuXHRcdHRleHQ6ICdzdGVwTW9sbGllQ29ubmVjdC50ZXh0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2ludHJvJyxcblx0XHRidG5CYWNrVGV4dDogJ3N0ZXBCdXR0b25zLmxvZ2luTW9sbGllQWNjb3VudCcsXG5cdFx0YnRuTmV4dFRleHQ6ICdzdGVwQnV0dG9ucy5jcmVhdGVNb2xsaWVBY2NvdW50Jyxcblx0XHRidG5Db2xsYXBzZUNsYXNzOiAnZC1ub25lJyxcblx0XHR1cmxNb2xsaWU6ICdodHRwczovL3d3dy5tb2xsaWUuY29tL2Rhc2hib2FyZCcsXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtZW52aXJvbm1lbnQnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWVudicsXG5cdFx0dGV4dDogJ3N0ZXBFbnYudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2FwaS1zZXR0aW5ncycsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy10d28tZmllbGRzLXRlc3QgLnJlcXVpcmVkLmZpZWxkJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRcdGVudmlyb21lbnRUZXN0XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWFwaS1rZXktdGVzdCcsXG5cdFx0dGV4dDogJ3N0ZXBBcGlLZXkudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2FwaS1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXByb2ZpbGUtYXBpJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLXByb2ZpbGUtYXBpJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRcdGVudmlyb21lbnRMaXZlXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWFwaS1rZXktbGl2ZScsXG5cdFx0dGV4dDogJ3N0ZXBBcGlLZXkudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2FwaS1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXByb2ZpbGUtYXBpJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICdzdGVwLWNoZWNrb3V0LWNvbmZpZycsXG5cdFx0dGV4dDogJ3N0ZXBDaGVja291dENvbmZpZy50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC02IHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3N0b3JlLXNldHRpbmdzJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLm5leHQnLFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLW1vbGxpZUNvbXBvbmVudHMnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLW1vbGxpZS1jb21wb25lbnRzJyxcblx0XHR0ZXh0OiAnc3RlcE1vbGxpZUNvbXBvbmVudHMudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3N0b3JlLXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtbW9sbGllQ29tcG9uZW50cycsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1zaW5nbGVDbGljaycsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtbW9sbGllLXBheW1lbnRzJyxcblx0XHR0ZXh0OiAnc3RlcE1vbGxpZVBheW1lbnRzLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdzdG9yZS1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXNpbmdsZUNsaWNrJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLWxvYWQtbWV0aG9kcycsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0bWV0aG9kTG9hZEluZGljYXRvcignLmpzLXBheW1lbnQtbWV0aG9kLW5vdC1sb2FkZWQnLCAnLnB1c2hhYmxlJyk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1wYXltZW50cy1hcGknLFxuXHRcdHRleHQ6ICdzdGVwTWV0aG9kQ29uZmlnLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLm5leHQnLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtbG9hZC1tZXRob2RzJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnROYW1lJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1wYXltZW50LXRpdGxlJyxcblx0XHR0ZXh0OiAnc3RlcFBheW1lbnRUaXRsZS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC05IHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1wYXltZW50TmFtZScsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1jdXN0b21pemVNZXRob2RJbWFnZScsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtaW1hZ2UtdXBsb2FkJyxcblx0XHR0ZXh0OiAnc3RlcEltYWdlVXBsb2FkLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTE0IHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1jdXN0b21pemVNZXRob2RJbWFnZSBpbnB1dCcsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1jb3VudHJ5UmVzdHJpY3Rpb24nLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWNvdW50cnktcmVzdHJpY3Rpb24nLFxuXHRcdHRleHQ6ICdzdGVwQ291bnRyeVJlc3RyaWN0aW9uLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTEyIHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtY291bnRyeVJlc3RyaWN0aW9ucycsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1QYXltZW50TWV0aG9kJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1wYXltZW50LW1ldGhvZCcsXG5cdFx0dGV4dDogJ3N0ZXBQYXltZW50TWV0aG9kLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTEyIHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1QYXltZW50TWV0aG9kJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLW9yZGVyLW51bWJlcicsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHBheW1lbnRUeXBlSW5kaWNhdG9yKFxuXHRcdFx0XHQnI3N5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX21vbGxpZUdhdGV3YXlDb25maWdfMF9wYXltZW50VHlwZScsXG5cdFx0XHRcdHBheW1lbnRNZXRob2RQYXltZW50QXBpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLW9yZGVyLW51bWJlcicsXG5cdFx0dGV4dDogJ3N0ZXBPcmRlck51bWJlci50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC0xMiBzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtb3JkZXItbnVtYmVyJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcjc3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfbW9sbGllR2F0ZXdheUNvbmZpZ18wX3BheW1lbnRUeXBlJyxcblx0XHRcdFx0cGF5bWVudE1ldGhvZE9yZGVyQXBpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLW9yZGVyLWFwaScsXG5cdFx0dGV4dDogJ3N0ZXBPcmRlcnNBUEkudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTIgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLVBheW1lbnRNZXRob2QnLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cblx0e1xuXHRcdGlkOiAnc3RlcC1mZWVzJyxcblx0XHR0ZXh0OiAnc3RlcEZlZXMudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTMgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnRGZWUnLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRpZDogJ3NhdmUnLFxuXHRcdHRleHQ6ICdzdGVwU2F2ZS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC0xMyBzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLnVpLmJ1dHRvbnM6bm90KC5qcy1oZWFkZXItYnRuKScsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdGlkOiAnc3RlcC1maW5pc2gtd2l6YXJkJyxcblx0XHR0aXRsZTogJ3N0ZXBGaW5pc2hXaXphcmQudGl0bGUnLFxuXHRcdHRleHQ6ICdzdGVwRmluaXNoV2l6YXJkLnRleHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuQmFja0NsYXNzOiAnZC1ub25lJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdtci1hdXRvJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLmZpbmlzaFdpemFyZCcsXG5cdFx0YnRuQ29sbGFwc2VDbGFzczogJ2Qtbm9uZScsXG5cdFx0YnRuQ2xvc2VDbGFzczogJ2Qtbm9uZScsXG5cdH0sXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzdGVwU3RhcnQ6IHtcblx0XHR0aXRsZTogJ0xldCBtZSBoZWxwIHlvdScsXG5cdFx0dGV4dDogJ1RoYW5rIHlvdSBmb3IgaW5zdGFsbGluZyBNb2xsaWUgZm9yIHBheW1lbnQgc2VydmljZXMuIFRoaXMgZ3VpZGUgd2lsbCB0YWtlIHlvdSB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHNldC11cC4nLFxuXHR9LFxuXHRzdGVwTW9sbGllQ29ubmVjdDoge1xuXHRcdHRpdGxlOiAnQ29ubmVjdCB0byB5b3VyIE1vbGxpZSBhY2NvdW50Jyxcblx0XHR0ZXh0OiBcIlRvIHN5bmMgdGhlIE1vbGxpZSBwbHVnaW4gdG8geW91ciB3ZWJzaG9wIHlvdSdsbCBuZWVkIE1vbGxpZSBBUEkga2V5cyBhbmQgUHJvZmlsZSBJRC5cIixcblx0fSxcblx0c3RlcEVudjoge1xuXHRcdHRleHQ6IFwiTm93IHRoYXQgeW91J3JlIGNvbm5lY3RlZCB0byBNb2xsaWUgd2Ugd2lsbCBjb25maWd1cmUgdGhlIGVudmlyb25tZW50IGFuZCBjcmVkZW50aWFscy48YnI+PGJyPlRlc3Qgd2lsbCBiZSB0aGUgZGVmYXVsdCBlbnZpcm9ubWVudCBpbiB0aGUgcGx1Z2luLjxicj48YnI+WW91IG9ubHkgbmVlZCB0byBkbyB0aGUgY29uZmlndXJhdGlvbiBvbmNlIHRvIGhhdmUgVEVTVCArIExJVkUgZW52aXJvbm1lbnRzIGF2YWlsYWJsZS4gVHJ5IGVhc2lseSB0b2dnaW5nIGJldHdlZW4gdGhlIHR3by5cIixcblx0fSxcblx0c3RlcEFwaUtleToge1xuXHRcdHRleHQ6ICdGaWxsIGluIHlvdXIgY29ycmVjdCBkZXRhaWxzIGFuZCBjbGljayBcIlRFU1QgQVBJIEtleVwiIHRoaXMgd2lsbCByZXR1cm4gYSBzdWNjZXNzZnVsIG9yIGZhaWxlZCByZXN1bHQgZm9yIGJvdGggdGhlIExJVkUgYW5kIFRFU1QgZW52aXJvbm1lbnRzJyxcblx0fSxcblx0c3RlcENoZWNrb3V0Q29uZmlnOiB7XG5cdFx0dGV4dDogXCJOZXh0LCB3ZSdsbCBzZXQtdXAga2V5IHNldHRpbmdzIGZvciB0aGUgY2hlY2tvdXQgc2NyZWVuIGRpc3BsYXkgb24geW91ciB3ZWJzaG9wLlwiLFxuXHR9LFxuXHRzdGVwTW9sbGllQ29tcG9uZW50czoge1xuXHRcdHRleHQ6IGBFbmFibGluZyBjb21wb25lbnRzLCBhbGxvd3MgeW91IHRvIGFkZCB0aGUgZmllbGRzIG5lZWRlZCBmb3IgY3JlZGl0IGNhcmQgaG9sZGVyIGRhdGEgdG8geW91ciBvd24gY2hlY2tvdXQuPGJyPjxicj5JZiB5b3Ugc2VsZWN0IE5PLCBjdXN0b21lcnMgd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBNb2xsaWUgY2hlY2tvdXQgcGFnZS48YnI+PGJyPkxlYXJuIG1vcmUgYWJvdXQgTW9sbGllIGNvbXBvbmVudHMgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJtb2xsaWUtbGlua1wiIGhyZWY9XCJodHRwczovL3d3dy5tb2xsaWUuY29tL2VuL25ld3MvcG9zdC9iZXR0ZXItY2hlY2tvdXQtZmxvd3Mtd2l0aC1tb2xsaWUtY29tcG9uZW50c1wiPmhlcmU8L2E+LmAsXG5cdH0sXG5cdHN0ZXBNb2xsaWVQYXltZW50czoge1xuXHRcdHRleHQ6IGBFbmFibGluZyBzaW5nbGUgY2xpY2sgcGF5bWVudHMgcmVtZW1iZXJzIHlvdXIgY29uc3VtZXIncyBwYXltZW50IHByZWZlcmVuY2VzIGluIG9yZGVyIHRvIGV4cGVkaXRlIGZvbGxvdy11cCBwYXltZW50cy4gWW91ciBjb25zdW1lciBkb2VzIG5vdCBoYXZlIHRvIHBlcmZvcm0gYW55IGFkZGl0aW9uYWwgYWN0aW9ucyB0byBlbmpveSBxdWljayBhbmQgZWFzeSBwYXltZW50cy48YnI+PGJyPkxlYXJuIG1vcmUgYWJvdXQgc2luZ2xlIGNsaWNrIHBheW1lbnRzIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibW9sbGllLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly9oZWxwLm1vbGxpZS5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMTE1MDAwNjcxMjQ5LVdoYXQtYXJlLXNpbmdsZS1jbGljay1wYXltZW50cy1hbmQtaG93LWRvZXMtaXQtd29yay1cIj5oZXJlPC9hPi5gLFxuXHR9LFxuXHRzdGVwTWV0aG9kQ29uZmlnOiB7XG5cdFx0dGV4dDogXCJOb3cgaXQncyB0aW1lIHRvIGN1c3RvbWl6ZSBmZWF0dXJlcyBmb3IgaW5kaXZpZHVhbCBwYXltZW50IG1ldGhvZHMuPGJyPjxicj5GaXJzdCwgc2VsZWN0IHRoZSBsb2FkIG1ldGhvZHMgYnV0dG9uLiBPbmx5IHRoZSBtZXRob2RzIHRoYXQgYXJlIGVuYWJsZWQgaW4geW91ciBNb2xsaWUgYWNjb3VudCB3aWxsIGRpc3BsYXkgaGVyZS48YnI+PGJyPlRoZW4geW91IHVzZSB0aGUgZW5hYmxlL2Rpc2FibGUgc2VsZWN0b3IgdG8gY29udHJvbCB3aGljaCB3aWxsIHNob3cgb24geW91ciB3ZWJzaG9wIGNoZWNrb3V0Ljxicj48YnI+Tk9URTogSXQgaXMgbm90IHBvc3NpYmxlIHRvIGNvbnRpbnVlIHRoZSBndWlkZWQgb25ib2FyZGluZyB3aXRob3V0IGxvYWRpbmcgcGF5bWVudCBtZXRob2RzLiBcIixcblx0fSxcblx0c3RlcE1ldGhvZFJlcXVpcmVkOiB7XG5cdFx0dGV4dDogJ1RoZSBsb2FkZWQgbWV0aG9kcyBhcmUgcmVxdWlyZWQgdG8gY29tcGxldGUgb25ib2FyZCB3aXphcmQgYW5kIG1vdmUgZm9yd2FyZCwgcGxlYXNlIGxvYWQgbWV0aG9kcyBieSBjbGlja2luZyBcIkxvYWQgTWV0aG9kc1wiIGJ1dHRvbiBhbmQgY29tZSBiYWNrIHRvIGNvbXBsZXRlIHRoaXMgdHV0b3JpYWwnLFxuXHR9LFxuXHRzdGVwRXJyb3JUaXRsZToge1xuXHRcdHRleHQ6ICdPbmJvYXJkaW5nIEFzc2lzdGFudCBXaXphcmQgLSBFbmRlZCBVcCcsXG5cdH0sXG5cdHN0ZXBFcnJvckRlc2NyaXB0aW9uOiB7XG5cdFx0dGV4dDogJ1RoZSByZXF1aXJlZCBhY3Rpb24gd2FzIG5vdCBwZXJmb3JtZWQnLFxuXHR9LFxuXHRzdGVwUGF5bWVudFRpdGxlOiB7XG5cdFx0dGV4dDogJ0ZvciBlYWNoIG1ldGhvZCwgeW91IGNhbiBlbnRlciBhIGN1c3RvbSB0aXRsZSBoZXJlLiBJdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB5b3VyIHdlYnNob3AgY2hlY2tvdXQgcGFnZS4nLFxuXHR9LFxuXHRzdGVwSW1hZ2VVcGxvYWQ6IHtcblx0XHR0ZXh0OiAnVHJ5IHVwbG9hZGluZyBhIGN1c3RvbSBpbWFnZSBmb3IgdGhlIHBheW1lbnQgbWV0aG9kIGljb24uIFRoaXMgd2lsbCBiZSBzaG93biBpbiB0aGUgd2Vic2hvcCBjaGVja291dCBwYWdlLicsXG5cdH0sXG5cdHN0ZXBDb3VudHJ5UmVzdHJpY3Rpb246IHtcblx0XHR0ZXh0OiAnSGVyZSB5b3UgY2FuIGNyZWF0ZSBmaWx0ZXJzIGZvciBjb3VudHJ5IHNwZWNpZmljIHBheW1lbnQgbWV0aG9kcyAtIGZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCBpREVBTCBvbmx5IHRvIHNob3cgZm9yIE5ldGhlcmxhbmRzIGN1c3RvbWVycyB5b3UgY2hvb3NlIFwiU2VsZWN0IENvdW50cmllc1wiIGFuZCBzZWxlY3QgTmV0aGVybGFuZHMuJyxcblx0fSxcblx0c3RlcFBheW1lbnRNZXRob2Q6IHtcblx0XHR0ZXh0OiAnUGVyIG1ldGhvZCwgeW91IGNhbiBzZWxlY3Qgd2hpY2ggTW9sbGllIEFQSSB0byB1c2UgdG8gY3JlYXRlIHBheW1lbnRzLiBDbGljayA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm1vbGxpZS1saW5rXCIgaHJlZj1cImh0dHBzOi8vZG9jcy5tb2xsaWUuY29tL29yZGVycy93aHktdXNlLW9yZGVyc1wiPmhlcmU8L2E+IHRvIHJlYWQgYWJvdXQgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gT3JkZXJzIGFuZCBQYXltZW50cyBBUEkuJyxcblx0fSxcblx0c3RlcE9yZGVyTnVtYmVyOiB7XG5cdFx0dGV4dDogJ1doZW4gdXNpbmcgUGF5bWVudHMgQVBJIHlvdSBtYXkgd2FudCBhZGRpdGlvbmFsIGRldGFpbHMgdG8gaGVscCB5b3UgbWF0Y2ggcGF5bWVudHMgd2l0aCBjdXN0b21lciBvcmRlcnMgLS0geW91IGNhbiBlbnRlciB0aG9zZSB2YWx1ZXMgaGVyZSBidXQgbWFrZSBzdXJlIHRvIHVzZSB0aGUgY29ycmVjdCB0YWdzIHByb3ZpZGVkIGluIHRoZSB0ZXh0IGJlbG93Jyxcblx0fSxcblx0c3RlcE9yZGVyc0FQSToge1xuXHRcdHRleHQ6ICdUaGlzIGlzIE1vbGxpZSBzdWdnZXN0ZWQgQVBJIHRvIHVzZSBmb3Igd2Vic2hvcHMgYmVjYXVzZSBpdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSDigJxvcmRlcnPigJ0uIEFuIG9yZGVyIGNvbnRhaW5zIHRoZSBwZXJzb25hbCBpbmZvcm1hdGlvbiBvZiBhIGN1c3RvbWVyIChlLmcuIGFkZHJlc3MpIGFuZCBwcm9kdWN0cyB0aGF0IHRoZSBjdXN0b21lciBvcmRlcmVkLiBXaGVuIGFuIG9yZGVyIGlzIG1hZGUsIGEgY29ycmVzcG9uZGluZyBwYXltZW50IHdpbGwgYmUgY3JlYXRlZCBhdXRvbWF0aWNhbGx5LicsXG5cdH0sXG5cdHN0ZXBQYXltZW50c0FQSToge1xuXHRcdHRleHQ6ICdQYXltZW50cyBBUEkgPGJyPk5vdGU6IFBheW1lbnRzIEFQSSBjYW4gbm90IGJlIHVzZWQgZm9yIG1ldGhvZHMgc3VjaCBhcyBLbGFybmEnLFxuXHR9LFxuXHRzdGVwRmVlczoge1xuXHRcdHRleHQ6ICdJbiBjYXNlIHlvdSBoYXZlIGZlZXMgdGhhdCB5b3UgYXJlIHBhc3Npbmcgb24gdG8gdGhlIGNvbnN1bWVyLCB5b3UgY2FuIGFkZCB0aGVtIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibW9sbGllLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly9oZWxwLm1vbGxpZS5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDEyNTY0NDU0LUNhbi1JLXBhc3Mtb3Zlci10aGUtY29zdHMtZm9yLXRoZS11c2Utb2YtYS1wYXltZW50LW1ldGhvZC10by1teS1jdXN0b21lcnMtXCI+aGVyZTwvYT4nLFxuXHR9LFxuXHRzdGVwU2F2ZToge1xuXHRcdHRleHQ6ICdSZW1lYmVyIHRvIHNhdmUgeW91ciBjb25maWd1cmF0aW9ucy4gJyxcblx0fSxcblx0c3RlcEZpbmlzaFdpemFyZDoge1xuXHRcdHRpdGxlOiAnPGkgY2xhc3M9XCJpY29uIGNoZWNrIGNpcmNsZVwiPjwvaT4gWW91XFwncmUgYWxsIHNldCEnLFxuXHRcdHRleHQ6IFwiWW91IGNhbiBub3cgYXR0ZW1wdCBhIGN1c3RvbWVyIG9yZGVyIG9uIHlvdXIgd2Vic2l0ZS5cIixcblx0fSxcblx0c3RlcFF1aXRDb25maXJtYXRpb246IHtcblx0XHR0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBxdWl0ID8nLFxuXHRcdHRleHQ6IFwiWW91J3JlIGFsbCBkb25lLCB5b3UgY2FuIG5vdyBhdHRlbXB0IGEgY29uc3VtZXIgb3JkZXIgb3IgeW91ciB3ZWJzaXRlXCIsXG5cdH0sXG5cdHN0ZXBQYXltZW50VHlwZToge1xuXHRcdHRleHQ6ICdXaGVuIHVzaW5nIFBheW1lbnRzIEFQSSB5b3UgbWF5IHdhbnQgYWRkaXRpb25hbCBkZXRhaWxzIHRvIGhlbHAgeW91IG1hdGNoIHBheW1lbnRzIHdpdGggY3VzdG9tZXIgb3JkZXJzIC0tIHlvdSBjYW4gZW50ZXIgdGhvc2UgdmFsdWVzIGhlcmUgYnV0IG1ha2Ugc3VyZSB0byB1c2UgdGhlIGNvcnJlY3QgdGFncyBwcm92aWRlIGluIHRoZSB0ZXh0IGJlbG93Jyxcblx0fSxcblx0c3RlcFBheW1lbnREZXNjcmlwdGlvbjoge1xuXHRcdHRleHQ6ICdDaG9vc2UgUGF5bWVudHMgQVBJIExlYXJuIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gT3JkZXJzIEFQSSBvciB0aGUgUGF5bWVudHMgQVBJJyxcblx0fSxcblx0c3RlcE9yZGVyQXBpOiB7XG5cdFx0dGV4dDpcblx0XHRcdCdTZWxlY3QgT3JkZXJzIEFQSSAtIHRoaXMgaXMgTW9sbGllXFxuJyArXG5cdFx0XHQnc3VnZ2VzdGVkIEFQSSB0byB1c2UgZm9yIHdlYnNob3BzIGIvYyBpdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSDigJxvcmRlcnPigJ0uIEFuIG9yZGVyIGNvbnRhaW5zIHRoZSBwZXJzb25hbCBpbmZvcm1hdGlvbiBvZiBhIGN1c3RvbWVyIChlLmcuIGFkZHJlc3MpIGFuZCBwcm9kdWN0cyB0aGF0IHRoZSBjdXN0b21lciBvcmRlcmVkLiBXaGVuIGFuIG9yZGVyIGlzIG1hZGUsIGEgY29ycmVzcG9uZGluZyBwYXltZW50IHdpbGwgYmUgY3JlYXRlZCBhdXRvbWF0aWNhbGx5LicsXG5cdH0sXG5cdHN0ZXBCdXR0b25zOiB7XG5cdFx0Z29CYWNrOiAnR28gYmFjaycsXG5cdFx0c2tpcFdpemFyZDogJ1NraXAgdGhpcywgSSBrbm93IGhvdyBpdCB3b3JrcycsXG5cdFx0c3RhcnRXaXphcmQ6XG5cdFx0XHQnU3RhcnQgb25ib2FyZGluZyBhc3Npc3RhbnQgPGkgY2xhc3M9XCJpY29uIGFuZ2xlIHJpZ2h0XCI+PC9pPicsXG5cdFx0bG9naW5Nb2xsaWVBY2NvdW50OiAnTG9naW4gdG8gbXkgYWNjb3VudCcsXG5cdFx0bmV4dFdpdGhBcnJvdzogJ05leHQgPGkgY2xhc3M9XCJpY29uIGFuZ2xlIHJpZ2h0XCI+PC9pPicsXG5cdFx0bmV4dDogJ05leHQnLFxuXHRcdGNyZWF0ZU1vbGxpZUFjY291bnQ6XG5cdFx0XHQnQ3JlYXRlIGEgTW9sbGllIGFjY291bnQgPGkgY2xhc3M9XCJpY29uIGFuZ2xlIHJpZ2h0XCI+PC9pPicsXG5cdFx0ZmluaXNoV2l6YXJkOlxuXHRcdFx0J1N0YXJ0IHVzaW5nIE1vbGxpZSA8aSBjbGFzcz1cImljb24gYW5nbGUgcmlnaHRcIj48L2k+Jyxcblx0XHRxdWl0Q29uZmlybTogJ1F1aXQgdGhlIG9uYm9hcmRpbmcgYXNzaXN0YW50Jyxcblx0XHRxdWl0Q2FuY2VsOiAnQ29udGludWUgb25ib2FyZGluZyA8aSBjbGFzcz1cImljb24gYW5nbGUgcmlnaHRcIj48L2k+Jyxcblx0fSxcblx0Y29tbW9uOiB7XG5cdFx0b3BlbjogJ09wZW4nLFxuXHR9LFxufTtcbiIsImV4cG9ydCBjb25zdCBwYXltZW50VHlwZUluZGljYXRvciA9IChpdGVtLCBleHBlY3RlZFZhbHVlKSA9PiB7XG5cdGNvbnN0IGluZGljYXRlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0pO1xuXHRjb25zdCBpbmRpY2F0ZWRJdGVtVmFsdWUgPSBpbmRpY2F0ZWRJdGVtLnZhbHVlO1xuXG5cdHJldHVybiBpbmRpY2F0ZWRJdGVtVmFsdWUgPT09IGV4cGVjdGVkVmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgbWV0aG9kTG9hZEluZGljYXRvciA9IChpdGVtLCBtZXNzYWdlQ29udGFpbmVyKSA9PiB7XG5cdGNvbnN0IGluZGljYXRlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0pO1xuXHRjb25zdCBtZXNzYWdlV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZXNzYWdlQ29udGFpbmVyKTtcblxuXHRpZiAoaW5kaWNhdGVkSXRlbSkge1xuXHRcdG1lc3NhZ2VXaW5kb3cuY2xhc3NMaXN0LmFkZCgnc3RlcC1uZXh0LWRpc2FibGVkJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWVzc2FnZVdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzdGVwLW5leHQtZGlzYWJsZWQnKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRmllbGRzID0gKGVsZW1lbnRzLCBtZXNzYWdlQ29udGFpbmVyKSA9PiB7XG5cdGNvbnN0IGVycm9ycyA9IFtdO1xuXG5cdGVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoIWl0ZW0udmFsdWUpIHtcblx0XHRcdGVycm9ycy5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKGVycm9ycy5ldmVyeSgoZWwpID0+IGVsID09PSBudWxsKSkge1xuXHRcdG1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RlcC1uZXh0LWRpc2FibGVkJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGVwLW5leHQtZGlzYWJsZWQnKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTdGVwVmFsaWRhdG9yID0gKGVsZW1lbnQsIHBvcHVwKSA9PiB7XG5cdGNvbnN0IHZhbGlkYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuXHRjb25zdCB2YWxpZGF0aW9uRWxlbWVudHMgPSB2YWxpZGF0aW9uQ29udGFpbmVyLnBhcmVudE5vZGVcblx0XHQucXVlcnlTZWxlY3RvckFsbChgaW5wdXQ6bm90KFt0eXBlPVwiZmlsZVwiXSk6bm90KFt0eXBlPVwic3VibWl0XCJdKTpub3QoZGlzYWJsZWQpOm5vdChbc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXSksXG5cdFx0c2VsZWN0Om5vdChkaXNhYmxlZCk6bm90KFtzdHlsZSo9XCJkaXNwbGF5OiBub25lO1wiXSlgKTtcblx0Y29uc3QgbWVzc2FnZVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXApO1xuXG5cdGlmICh2YWxpZGF0aW9uRWxlbWVudHMgJiYgdmFsaWRhdGlvbkVsZW1lbnRzLmxlbmd0aCAhPSAwKSB7XG5cdFx0dmFsaWRhdGVGaWVsZHModmFsaWRhdGlvbkVsZW1lbnRzLCBtZXNzYWdlV2luZG93KTtcblx0XHR2YWxpZGF0aW9uRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHR2YWxpZGF0ZUZpZWxkcyh2YWxpZGF0aW9uRWxlbWVudHMsIG1lc3NhZ2VXaW5kb3cpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG4iLCJpbXBvcnQgX2dldCBmcm9tICdsb2Rhc2guZ2V0JztcblxuaW1wb3J0IHsgc3RlcHMgfSBmcm9tICcuLi9jb25maWcvc3RlcHMnO1xuaW1wb3J0IHdpemFyZFRyYW5zbGF0aW9ucyBmcm9tICcuLi9jb25maWcvd2l6YXJkVHJhbnNsYXRpb25zJztcblxuY29uc3QgaGFuZGxlU3RlcEJ1dHRvbnMgPSAob25ib2FyZGluZ1dpemFyZCwgc3RlcEluZGV4LCBzdGVwKSA9PiB7XG5cdGlmIChzdGVwLmN1c3RvbUJ1dHRvbnMpIHtcblx0XHRyZXR1cm4gc3RlcC5jdXN0b21CdXR0b25zLm1hcCgoY3VzdG9tQnV0dG9uKSA9PiAoe1xuXHRcdFx0Li4uY3VzdG9tQnV0dG9uLFxuXHRcdFx0dGV4dDogX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsIGN1c3RvbUJ1dHRvbi50ZXh0KSxcblx0XHRcdGFjdGlvbjogKCkgPT4gY3VzdG9tQnV0dG9uLmFjdGlvbihvbmJvYXJkaW5nV2l6YXJkLCBzdGVwSW5kZXgpLFxuXHRcdH0pKTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogJzxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT4nLFxuXHRcdFx0YWN0aW9uOiAoKSA9PiB7XG5cdFx0XHRcdG9uYm9hcmRpbmdXaXphcmQuaGFuZGxlUXVpdENvbmZpcm1hdGlvbigpO1xuXHRcdFx0fSxcblx0XHRcdGNsYXNzZXM6IGBzaGVwaGVyZC1idXR0b24tLWNsb3NlICR7c3RlcC5idG5DbG9zZUNsYXNzIHx8ICcnfWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiAnPGkgY2xhc3M9XCJhcnJvdyBkb3duIGljb25cIj48L2k+Jyxcblx0XHRcdGFjdGlvbjogKCkgPT4gb25ib2FyZGluZ1dpemFyZC5tb2RhbENvbGxhcHNlSGFuZGxlcigpLFxuXHRcdFx0Y2xhc3NlczogYHNoZXBoZXJkLWJ1dHRvbi0tY29sbGFwc2UganMtdG91ci1jb2xsYXBzZSAke1xuXHRcdFx0XHRzdGVwLmJ0bkNvbGxhcHNlQ2xhc3MgfHwgJydcblx0XHRcdH1gLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogc3RlcC5idG5CYWNrVGV4dFxuXHRcdFx0XHQ/IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCBzdGVwLmJ0bkJhY2tUZXh0KVxuXHRcdFx0XHQ6IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCAnc3RlcEJ1dHRvbnMuZ29CYWNrJyksXG5cdFx0XHRzZWNvbmRhcnk6IHRydWUsXG5cdFx0XHRjbGFzc2VzOiBgJHtzdGVwLmJ0bkJhY2tDbGFzcyB8fCAnJ31gLFxuXHRcdFx0YWN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCB0b3VyID0gb25ib2FyZGluZ1dpemFyZC50b3VyO1xuXG5cdFx0XHRcdGlmIChzdGVwSW5kZXggPT09IDApIHtcblx0XHRcdFx0XHR0b3VyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHN0ZXAudXJsTW9sbGllKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cub3BlbihgJHtzdGVwLnVybE1vbGxpZX0vc2lnbmluYCwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0dG91ci5uZXh0KCk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0b3VyLmJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IHN0ZXAuYnRuTmV4dFRleHRcblx0XHRcdFx0PyBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgc3RlcC5idG5OZXh0VGV4dClcblx0XHRcdFx0OiBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgJ3N0ZXBCdXR0b25zLm5leHRXaXRoQXJyb3cnKSxcblx0XHRcdGNsYXNzZXM6IGAke3N0ZXAuYnRuTmV4dENsYXNzIHx8ICcnfWAsXG5cdFx0XHRhY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0IHRvdXIgPSBvbmJvYXJkaW5nV2l6YXJkLnRvdXI7XG5cblx0XHRcdFx0aWYgKHN0ZXBJbmRleCA9PT0gb25ib2FyZGluZ1dpemFyZC5zdGVwcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0dG91ci5jb21wbGV0ZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChzdGVwLnVybE1vbGxpZSkge1xuXHRcdFx0XHRcdFx0d2luZG93Lm9wZW4oYCR7c3RlcC51cmxNb2xsaWV9L3NpZ251cGAsICdfYmxhbmsnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dG91ci5uZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSxcblx0XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdGVwcyA9IFtdKSA9PlxuXHRzdGVwcy5tYXAoKHN0ZXApID0+ICh7XG5cdFx0Li4uc3RlcCxcblx0XHR0aXRsZTogc3RlcC50aXRsZSA/IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCBzdGVwLnRpdGxlKSA6IG51bGwsXG5cdFx0dGV4dDogX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsIHN0ZXAudGV4dCksXG5cdFx0c3RlcEJ1dHRvbnM6IChvbmJvYXJkaW5nV2l6YXJkLCBzdGVwSW5kZXgpID0+XG5cdFx0XHRoYW5kbGVTdGVwQnV0dG9ucyhvbmJvYXJkaW5nV2l6YXJkLCBzdGVwSW5kZXgsIHN0ZXApLFxuXHR9KSk7XG4iLCJpbXBvcnQgT25ib2FyZGluZ1dpemFyZCBmcm9tICcuL09uYm9hcmRpbmdXaXphcmQnO1xuY29uc3QgdG91ciA9IG5ldyBPbmJvYXJkaW5nV2l6YXJkKCk7XG50b3VyLmluaXRUb3VyKCk7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLyxcbiAgICByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gaXNLZXkocGF0aCwgb2JqZWN0KSA/IFtwYXRoXSA6IGNhc3RQYXRoKHBhdGgpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBzdHJpbmdUb1BhdGgodmFsdWUpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemUoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG4iLCIvKiEgc2hlcGhlcmQuanMgOC4zLjEgKi9cblxudmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiYgIWlzU3BlY2lhbCh2YWx1ZSk7XG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG4gIHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgfHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJyB8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSk7XG59IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxuXG5cbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9O1xufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucykgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlO1xuICB9XG5cbiAgdmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuICByZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSB7XG4gIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpLmZpbHRlcihmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgcmV0dXJuIHRhcmdldC5wcm9wZXJ0eUlzRW51bWVyYWJsZShzeW1ib2wpO1xuICB9KSA6IFtdO1xufVxuXG5mdW5jdGlvbiBnZXRLZXlzKHRhcmdldCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGFyZ2V0KS5jb25jYXQoZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlJc09uT2JqZWN0KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gb2JqZWN0O1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IC8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5cblxuZnVuY3Rpb24gcHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkge1xuICByZXR1cm4gcHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAvLyBQcm9wZXJ0aWVzIGFyZSBzYWZlIHRvIG1lcmdlIGlmIHRoZXkgZG9uJ3QgZXhpc3QgaW4gdGhlIHRhcmdldCB5ZXQsXG4gICYmICEoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpIC8vIHVuc2FmZSBpZiB0aGV5IGV4aXN0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sXG4gICYmIE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldCwga2V5KSk7IC8vIGFuZCBhbHNvIHVuc2FmZSBpZiB0aGV5J3JlIG5vbmVudW1lcmFibGUuXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXG4gIGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICBnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcbiAgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7IC8vIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIGlzIGFkZGVkIHRvIGBvcHRpb25zYCBzbyB0aGF0IGN1c3RvbSBhcnJheU1lcmdlKClcbiAgLy8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXG4gIG9wdGlvbnMuY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZDtcbiAgdmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gIHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuICB2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cbiAgaWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG4gICAgcmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuICAgIHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpO1xuICB9LCB7fSk7XG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG52YXIgY2pzID0gZGVlcG1lcmdlXzE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgRWxlbWVudGAuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwYXJhbSB0byBjaGVjayBpZiBpdCBpcyBhbiBFbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudCQxKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEhUTUxFbGVtZW50YC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBhcmFtIHRvIGNoZWNrIGlmIGl0IGlzIGFuIEhUTUxFbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudCQxKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwYXJhbSB0byBjaGVjayBpZiBpdCBpcyBhIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2Agb2JqZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcGFyYW0gdG8gY2hlY2sgaWYgaXQgaXMgYSBzdHJpbmdcbiAqL1xuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcGFyYW0gdG8gY2hlY2sgaWYgaXQgaXMgdW5kZWZpbmVkXG4gKi9cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmNsYXNzIEV2ZW50ZWQge1xuICBvbihldmVudCwgaGFuZGxlciwgY3R4LCBvbmNlID0gZmFsc2UpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodGhpcy5iaW5kaW5ncykpIHtcbiAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZmluZWQodGhpcy5iaW5kaW5nc1tldmVudF0pKSB7XG4gICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnB1c2goe1xuICAgICAgaGFuZGxlcixcbiAgICAgIGN0eCxcbiAgICAgIG9uY2VcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uY2UoZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIHRydWUpO1xuICB9XG5cbiAgb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRoaXMuYmluZGluZ3MpIHx8IGlzVW5kZWZpbmVkKHRoaXMuYmluZGluZ3NbZXZlbnRdKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKSB7XG4gICAgICBkZWxldGUgdGhpcy5iaW5kaW5nc1tldmVudF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLmZvckVhY2goKGJpbmRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChiaW5kaW5nLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRyaWdnZXIoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuYmluZGluZ3MpICYmIHRoaXMuYmluZGluZ3NbZXZlbnRdKSB7XG4gICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5mb3JFYWNoKChiaW5kaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY3R4LFxuICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgb25jZVxuICAgICAgICB9ID0gYmluZGluZztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGN0eCB8fCB0aGlzO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXG4gICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG4vKipcbiAqIEJpbmRzIGFsbCB0aGUgbWV0aG9kcyBvbiBhIEpTIENsYXNzIHRvIHRoZSBgdGhpc2AgY29udGV4dCBvZiB0aGUgY2xhc3MuXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hdXRvLWJpbmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzZWxmIFRoZSBgdGhpc2AgY29udGV4dCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIGB0aGlzYCBjb250ZXh0IG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBhdXRvQmluZChzZWxmKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWwgPSBzZWxmW2tleV07XG5cbiAgICBpZiAoa2V5ICE9PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNlbGZba2V5XSA9IHZhbC5iaW5kKHNlbGYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG4vKipcbiAqIFNldHMgdXAgdGhlIGhhbmRsZXIgdG8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBhZHZhbmNlIHRoZSB0b3VyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCBpbnN0YW5jZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIF9zZXR1cEFkdmFuY2VPbkhhbmRsZXIoc2VsZWN0b3IsIHN0ZXApIHtcbiAgcmV0dXJuIGV2ZW50ID0+IHtcbiAgICBpZiAoc3RlcC5pc09wZW4oKSkge1xuICAgICAgY29uc3QgdGFyZ2V0SXNFbCA9IHN0ZXAuZWwgJiYgZXZlbnQuY3VycmVudFRhcmdldCA9PT0gc3RlcC5lbDtcbiAgICAgIGNvbnN0IHRhcmdldElzU2VsZWN0b3IgPSAhaXNVbmRlZmluZWQoc2VsZWN0b3IpICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQubWF0Y2hlcyhzZWxlY3Rvcik7XG5cbiAgICAgIGlmICh0YXJnZXRJc1NlbGVjdG9yIHx8IHRhcmdldElzRWwpIHtcbiAgICAgICAgc3RlcC50b3VyLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4vKipcbiAqIEJpbmQgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIGFkdmFuY2VPblxuICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIGluc3RhbmNlXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWR2YW5jZShzdGVwKSB7XG4gIC8vIEFuIGVtcHR5IHNlbGVjdG9yIG1hdGNoZXMgdGhlIHN0ZXAgZWxlbWVudFxuICBjb25zdCB7XG4gICAgZXZlbnQsXG4gICAgc2VsZWN0b3JcbiAgfSA9IHN0ZXAub3B0aW9ucy5hZHZhbmNlT24gfHwge307XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlciA9IF9zZXR1cEFkdmFuY2VPbkhhbmRsZXIoc2VsZWN0b3IsIHN0ZXApOyAvLyBUT0RPOiB0aGlzIHNob3VsZCBhbHNvIGJpbmQvdW5iaW5kIG9uIHNob3cvaGlkZVxuXG5cbiAgICBsZXQgZWw7XG5cbiAgICB0cnkge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gVE9ET1xuICAgIH1cblxuICAgIGlmICghaXNVbmRlZmluZWQoc2VsZWN0b3IpICYmICFlbCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYE5vIGVsZW1lbnQgd2FzIGZvdW5kIGZvciB0aGUgc2VsZWN0b3Igc3VwcGxpZWQgdG8gYWR2YW5jZU9uOiAke3NlbGVjdG9yfWApO1xuICAgIH0gZWxzZSBpZiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgc3RlcC5vbignZGVzdHJveScsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG4gICAgICBzdGVwLm9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcignYWR2YW5jZU9uIHdhcyBkZWZpbmVkLCBidXQgbm8gZXZlbnQgbmFtZSB3YXMgcGFzc2VkLicpO1xuICB9XG59XG5cbnZhciB0b3AgPSAndG9wJztcbnZhciBib3R0b20gPSAnYm90dG9tJztcbnZhciByaWdodCA9ICdyaWdodCc7XG52YXIgbGVmdCA9ICdsZWZ0JztcbnZhciBhdXRvID0gJ2F1dG8nO1xudmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG52YXIgc3RhcnQgPSAnc3RhcnQnO1xudmFyIGVuZCA9ICdlbmQnO1xudmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xudmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbnZhciBwb3BwZXIgPSAncG9wcGVyJztcbnZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbnZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG52YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG52YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbnZhciByZWFkID0gJ3JlYWQnO1xudmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG52YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbnZhciBtYWluID0gJ21haW4nO1xudmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbnZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG52YXIgd3JpdGUgPSAnd3JpdGUnO1xudmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG52YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QkMihfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFwcGx5U3R5bGVzJDEgPSB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0JDIsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTtcblxuZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufVxuXG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG4gIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufVxuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QkMShfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFycm93JDEgPSB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59O1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHM7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3ApIHtcbiAgICAgIHNpZGVZID0gYm90dG9tOyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeSAtPSBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF0gLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB4IC09IG9mZnNldFBhcmVudFt3aWR0aFByb3BdIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDwgMiA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBjb21wdXRlU3R5bGVzJDEgPSB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTtcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGV2ZW50TGlzdGVuZXJzID0ge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTtcblxudmFyIGhhc2gkMSA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoJDFbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG52YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn1cblxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59XG5cbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5mdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufVxuXG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMS5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBmbGlwJDEgPSB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGhpZGUkMSA9IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTtcblxuZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBvZmZzZXQkMSA9IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lOyAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59O1xuXG5mdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn1cblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluJDEgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4JDEgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldCwgdGV0aGVyID8gbWF4KG1heCQxLCB0ZXRoZXJNYXgpIDogbWF4JDEpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF4KF9tYXgsIHRldGhlck1heCkgOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59O1xuXG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufVxuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59XG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cblxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dldENlbnRlcmVkU3R5bGVQb3BwZXJNb2RpZmllcigpIHtcbiAgcmV0dXJuIFt7XG4gICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcblxuICAgIGZuKHtcbiAgICAgIHN0YXRlXG4gICAgfSkge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChuYW1lICE9PSAncG9wcGVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0sIHtcbiAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgYWRhcHRpdmU6IGZhbHNlXG4gICAgfVxuICB9XTtcbn1cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZvciBhIHRvb2x0aXAgdGhhdCBkb2Vzbid0IGhhdmUgYVxuICogdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIERPTSAtLSBhbmQgdGh1cyBpcyBwb3NpdGlvbmVkIGluIHRoZSBjZW50ZXJcbiAqIG9mIHRoZSB2aWV3XG4gKlxuICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBmaW5hbCBQb3BwZXIgb3B0aW9ucyBvYmplY3RcbiAqL1xuXG5cbmZ1bmN0aW9uIG1ha2VDZW50ZXJlZFBvcHBlcihzdGVwKSB7XG4gIGNvbnN0IGNlbnRlcmVkU3R5bGVQb3BwZXJNb2RpZmllciA9IF9nZXRDZW50ZXJlZFN0eWxlUG9wcGVyTW9kaWZpZXIoKTtcblxuICBsZXQgcG9wcGVyT3B0aW9ucyA9IHtcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIHN0cmF0ZWd5OiAnZml4ZWQnLFxuICAgIG1vZGlmaWVyczogW3tcbiAgICAgIG5hbWU6ICdmb2N1c0FmdGVyUmVuZGVyJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuXG4gICAgICBmbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0ZXAuZWwpIHtcbiAgICAgICAgICAgIHN0ZXAuZWwuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG5cbiAgICB9XVxuICB9O1xuICBwb3BwZXJPcHRpb25zID0gX2V4dGVuZHMoe30sIHBvcHBlck9wdGlvbnMsIHtcbiAgICBtb2RpZmllcnM6IEFycmF5LmZyb20obmV3IFNldChbLi4ucG9wcGVyT3B0aW9ucy5tb2RpZmllcnMsIC4uLmNlbnRlcmVkU3R5bGVQb3BwZXJNb2RpZmllcl0pKVxuICB9KTtcbiAgcmV0dXJuIHBvcHBlck9wdGlvbnM7XG59XG5cbi8qKlxuICogRW5zdXJlIGNsYXNzIHByZWZpeCBlbmRzIGluIGAtYFxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCBUaGUgcHJlZml4IHRvIHByZXBlbmQgdG8gdGhlIGNsYXNzIG5hbWVzIGdlbmVyYXRlZCBieSBuYW5vLWNzc1xuICogQHJldHVybiB7c3RyaW5nfSBUaGUgcHJlZml4IGVuZGluZyBpbiBgLWBcbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcmVmaXgocHJlZml4KSB7XG4gIGlmICghaXNTdHJpbmcocHJlZml4KSB8fCBwcmVmaXggPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeC5jaGFyQXQocHJlZml4Lmxlbmd0aCAtIDEpICE9PSAnLScgPyBgJHtwcmVmaXh9LWAgOiBwcmVmaXg7XG59XG4vKipcbiAqIENoZWNrcyBpZiBvcHRpb25zLmF0dGFjaFRvLmVsZW1lbnQgaXMgYSBzdHJpbmcsIGFuZCBpZiBzbywgdHJpZXMgdG8gZmluZCB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIGluc3RhbmNlXG4gKiBAcmV0dXJucyB7e2VsZW1lbnQsIG9ufX1cbiAqIGBlbGVtZW50YCBpcyBhIHF1YWxpZmllZCBIVE1MIEVsZW1lbnRcbiAqIGBvbmAgaXMgYSBzdHJpbmcgcG9zaXRpb24gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUF0dGFjaFRvKHN0ZXApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHN0ZXAub3B0aW9ucy5hdHRhY2hUbyB8fCB7fTtcbiAgY29uc3QgcmV0dXJuT3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG4gIGlmIChpc1N0cmluZyhvcHRpb25zLmVsZW1lbnQpKSB7XG4gICAgLy8gQ2FuJ3Qgb3ZlcnJpZGUgdGhlIGVsZW1lbnQgaW4gdXNlciBvcHRzIHJlZmVyZW5jZSBiZWNhdXNlIHdlIGNhbid0XG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgdGhlIGVsZW1lbnQgd2lsbCBleGlzdCBpbiB0aGUgZnV0dXJlLlxuICAgIHRyeSB7XG4gICAgICByZXR1cm5PcHRzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkgey8vIFRPRE9cbiAgICB9XG5cbiAgICBpZiAoIXJldHVybk9wdHMuZWxlbWVudCkge1xuICAgICAgY29uc29sZS5lcnJvcihgVGhlIGVsZW1lbnQgZm9yIHRoaXMgU2hlcGhlcmQgc3RlcCB3YXMgbm90IGZvdW5kICR7b3B0aW9ucy5lbGVtZW50fWApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXR1cm5PcHRzO1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIG9wdGlvbnMgZm9yIHRoZSB0b29sdGlwIGFuZCBpbml0aWFsaXplc1xuICogYHN0ZXAudG9vbHRpcGAgYXMgYSBQb3BwZXIgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgaW5zdGFuY2VcbiAqL1xuXG5mdW5jdGlvbiBzZXR1cFRvb2x0aXAoc3RlcCkge1xuICBpZiAoc3RlcC50b29sdGlwKSB7XG4gICAgc3RlcC50b29sdGlwLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjaFRvT3B0aW9ucyA9IHBhcnNlQXR0YWNoVG8oc3RlcCk7XG4gIGxldCB0YXJnZXQgPSBhdHRhY2hUb09wdGlvbnMuZWxlbWVudDtcbiAgY29uc3QgcG9wcGVyT3B0aW9ucyA9IGdldFBvcHBlck9wdGlvbnMoYXR0YWNoVG9PcHRpb25zLCBzdGVwKTtcblxuICBpZiAoc3RlcC5pc0NlbnRlcmVkKCkpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzdGVwLnNoZXBoZXJkRWxlbWVudENvbXBvbmVudC5nZXRFbGVtZW50KCk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdzaGVwaGVyZC1jZW50ZXJlZCcpO1xuICB9XG5cbiAgc3RlcC50b29sdGlwID0gY3JlYXRlUG9wcGVyKHRhcmdldCwgc3RlcC5lbCwgcG9wcGVyT3B0aW9ucyk7XG4gIHN0ZXAudGFyZ2V0ID0gYXR0YWNoVG9PcHRpb25zLmVsZW1lbnQ7XG4gIHJldHVybiBwb3BwZXJPcHRpb25zO1xufVxuLyoqXG4gKiBDcmVhdGUgYSB1bmlxdWUgaWQgZm9yIHN0ZXBzLCB0b3VycywgbW9kYWxzLCBldGNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB1dWlkKCkge1xuICBsZXQgZCA9IERhdGUubm93KCk7XG4gIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGMgPT4ge1xuICAgIGNvbnN0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IHIgJiAweDMgfCAweDgpLnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG4vKipcbiAqIEdldHMgdGhlIGBQb3BwZXJgIG9wdGlvbnMgZnJvbSBhIHNldCBvZiBiYXNlIGBhdHRhY2hUb2Agb3B0aW9uc1xuICogQHBhcmFtIGF0dGFjaFRvT3B0aW9uc1xuICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdldFBvcHBlck9wdGlvbnMoYXR0YWNoVG9PcHRpb25zLCBzdGVwKSB7XG4gIGxldCBwb3BwZXJPcHRpb25zID0ge1xuICAgIG1vZGlmaWVyczogW3tcbiAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhbHRBeGlzOiB0cnVlLFxuICAgICAgICB0ZXRoZXI6IGZhbHNlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2ZvY3VzQWZ0ZXJSZW5kZXInLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG5cbiAgICAgIGZuKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RlcC5lbCkge1xuICAgICAgICAgICAgc3RlcC5lbC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cblxuICAgIH1dLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG4gIH07XG5cbiAgaWYgKHN0ZXAuaXNDZW50ZXJlZCgpKSB7XG4gICAgcG9wcGVyT3B0aW9ucyA9IG1ha2VDZW50ZXJlZFBvcHBlcihzdGVwKTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPcHRpb25zLnBsYWNlbWVudCA9IGF0dGFjaFRvT3B0aW9ucy5vbjtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRTdGVwT3B0aW9ucyA9IHN0ZXAudG91ciAmJiBzdGVwLnRvdXIub3B0aW9ucyAmJiBzdGVwLnRvdXIub3B0aW9ucy5kZWZhdWx0U3RlcE9wdGlvbnM7XG5cbiAgaWYgKGRlZmF1bHRTdGVwT3B0aW9ucykge1xuICAgIHBvcHBlck9wdGlvbnMgPSBfbWVyZ2VNb2RpZmllcnMoZGVmYXVsdFN0ZXBPcHRpb25zLCBwb3BwZXJPcHRpb25zKTtcbiAgfVxuXG4gIHBvcHBlck9wdGlvbnMgPSBfbWVyZ2VNb2RpZmllcnMoc3RlcC5vcHRpb25zLCBwb3BwZXJPcHRpb25zKTtcbiAgcmV0dXJuIHBvcHBlck9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZU1vZGlmaWVycyhzdGVwT3B0aW9ucywgcG9wcGVyT3B0aW9ucykge1xuICBpZiAoc3RlcE9wdGlvbnMucG9wcGVyT3B0aW9ucykge1xuICAgIGxldCBtZXJnZWRQb3BwZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyT3B0aW9ucywgc3RlcE9wdGlvbnMucG9wcGVyT3B0aW9ucyk7XG5cbiAgICBpZiAoc3RlcE9wdGlvbnMucG9wcGVyT3B0aW9ucy5tb2RpZmllcnMgJiYgc3RlcE9wdGlvbnMucG9wcGVyT3B0aW9ucy5tb2RpZmllcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmFtZXMgPSBzdGVwT3B0aW9ucy5wb3BwZXJPcHRpb25zLm1vZGlmaWVycy5tYXAobW9kID0+IG1vZC5uYW1lKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkTW9kaWZpZXJzID0gcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMuZmlsdGVyKG1vZCA9PiAhbmFtZXMuaW5jbHVkZXMobW9kLm5hbWUpKTtcbiAgICAgIG1lcmdlZFBvcHBlck9wdGlvbnMubW9kaWZpZXJzID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi5maWx0ZXJlZE1vZGlmaWVycywgLi4uc3RlcE9wdGlvbnMucG9wcGVyT3B0aW9ucy5tb2RpZmllcnNdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZFBvcHBlck9wdGlvbnM7XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAvLyBAdHMtaWdub3JlXG4gIGZvciAoY29uc3QgayBpbiBzcmMpIHRhcltrXSA9IHNyY1trXTtcblxuICByZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgcmV0dXJuIGZuKCk7XG59XG5cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gIGZucy5mb3JFYWNoKHJ1bik7XG59XG5cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICByZXR1cm4gdGV4dCgnICcpO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIHRleHQoJycpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSkgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdfX3ZhbHVlJykge1xuICAgICAgbm9kZS52YWx1ZSA9IG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuXG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gIGlmICghY3VycmVudF9jb21wb25lbnQpIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG4gIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cblxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuXG5sZXQgZmx1c2hpbmcgPSBmYWxzZTtcbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgaWYgKGZsdXNoaW5nKSByZXR1cm47XG4gIGZsdXNoaW5nID0gdHJ1ZTtcblxuICBkbyB7XG4gICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tpXTtcbiAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgfVxuXG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcblxuICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7IC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG5cbiAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG5cbiAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgfVxuXG4gIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgZmx1c2hpbmcgPSBmYWxzZTtcbiAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgfVxufVxuXG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5cbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgb3V0cm9zID0ge1xuICAgIHI6IDAsXG4gICAgYzogW10sXG4gICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgaWYgKCFvdXRyb3Mucikge1xuICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICB9XG5cbiAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICBibG9jay5pKGxvY2FsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSkgcmV0dXJuO1xuICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGRldGFjaCkgYmxvY2suZCgxKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBibG9jay5vKGxvY2FsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgY29uc3QgdXBkYXRlID0ge307XG4gIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7XG4gICAgJCRzY29wZTogMVxuICB9O1xuICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG5cbiAgICBpZiAobikge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICBpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbHNbaV0gPSBuO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cblxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgY29uc3Qge1xuICAgIGZyYWdtZW50LFxuICAgIG9uX21vdW50LFxuICAgIG9uX2Rlc3Ryb3ksXG4gICAgYWZ0ZXJfdXBkYXRlXG4gIH0gPSBjb21wb25lbnQuJCQ7XG4gIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuXG4gIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcblxuICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgfVxuXG4gICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcblxuICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTsgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcblxuICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgJCQuY3R4ID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgfVxuXG4gIGNvbXBvbmVudC4kJC5kaXJ0eVtpIC8gMzEgfCAwXSB8PSAxIDw8IGkgJSAzMTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGRpcnR5ID0gWy0xXSkge1xuICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICBmcmFnbWVudDogbnVsbCxcbiAgICBjdHg6IG51bGwsXG4gICAgLy8gc3RhdGVcbiAgICBwcm9wcyxcbiAgICB1cGRhdGU6IG5vb3AsXG4gICAgbm90X2VxdWFsLFxuICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAvLyBsaWZlY3ljbGVcbiAgICBvbl9tb3VudDogW10sXG4gICAgb25fZGVzdHJveTogW10sXG4gICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBvcHRpb25zLmNvbnRleHQgfHwgW10pLFxuICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgZGlydHksXG4gICAgc2tpcF9ib3VuZDogZmFsc2VcbiAgfTtcbiAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICQkLmN0eCA9IGluc3RhbmNlID8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG5cbiAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKSAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICBpZiAocmVhZHkpIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KSA6IFtdO1xuICAkJC51cGRhdGUoKTtcbiAgcmVhZHkgPSB0cnVlO1xuICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpOyAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcblxuICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG5cbiAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmludHJvKSB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG4gICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgIGZsdXNoKCk7XG4gIH1cblxuICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICovXG5cblxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgJGRlc3Ryb3koKSB7XG4gICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gIH1cblxuICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSk7XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAkc2V0KCQkcHJvcHMpIHtcbiAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtYnV0dG9uLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDgoY3R4KSB7XG4gIGxldCBidXR0b247XG4gIGxldCBidXR0b25fYXJpYV9sYWJlbF92YWx1ZTtcbiAgbGV0IGJ1dHRvbl9jbGFzc192YWx1ZTtcbiAgbGV0IG1vdW50ZWQ7XG4gIGxldCBkaXNwb3NlO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBidXR0b25fYXJpYV9sYWJlbF92YWx1ZSA9XG4gICAgICAvKmxhYmVsKi9cbiAgICAgIGN0eFszXSA/XG4gICAgICAvKmxhYmVsKi9cbiAgICAgIGN0eFszXSA6IG51bGwpO1xuICAgICAgYXR0cihidXR0b24sIFwiY2xhc3NcIiwgYnV0dG9uX2NsYXNzX3ZhbHVlID0gYCR7XG4gICAgICAvKmNsYXNzZXMqL1xuICAgICAgY3R4WzFdIHx8IFwiXCJ9IHNoZXBoZXJkLWJ1dHRvbiAke1xuICAgICAgLypzZWNvbmRhcnkqL1xuICAgICAgY3R4WzRdID8gXCJzaGVwaGVyZC1idXR0b24tc2Vjb25kYXJ5XCIgOiBcIlwifWApO1xuICAgICAgYnV0dG9uLmRpc2FibGVkID1cbiAgICAgIC8qZGlzYWJsZWQqL1xuICAgICAgY3R4WzJdO1xuICAgICAgYXR0cihidXR0b24sIFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBidXR0b24sIGFuY2hvcik7XG4gICAgICBidXR0b24uaW5uZXJIVE1MID1cbiAgICAgIC8qdGV4dCovXG4gICAgICBjdHhbNV07XG5cbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICBkaXNwb3NlID0gbGlzdGVuKGJ1dHRvbiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKFxuICAgICAgICAgIC8qYWN0aW9uKi9cbiAgICAgICAgICBjdHhbMF0pKVxuICAgICAgICAgICAgLyphY3Rpb24qL1xuICAgICAgICAgICAgY3R4WzBdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgICBtb3VudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcChuZXdfY3R4LCBbZGlydHldKSB7XG4gICAgICBjdHggPSBuZXdfY3R4O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qdGV4dCovXG4gICAgICAzMikgYnV0dG9uLmlubmVySFRNTCA9XG4gICAgICAvKnRleHQqL1xuICAgICAgY3R4WzVdO1xuXG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypsYWJlbCovXG4gICAgICA4ICYmIGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlICE9PSAoYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUgPVxuICAgICAgLypsYWJlbCovXG4gICAgICBjdHhbM10gP1xuICAgICAgLypsYWJlbCovXG4gICAgICBjdHhbM10gOiBudWxsKSkge1xuICAgICAgICBhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qY2xhc3Nlcywgc2Vjb25kYXJ5Ki9cbiAgICAgIDE4ICYmIGJ1dHRvbl9jbGFzc192YWx1ZSAhPT0gKGJ1dHRvbl9jbGFzc192YWx1ZSA9IGAke1xuICAgICAgLypjbGFzc2VzKi9cbiAgICAgIGN0eFsxXSB8fCBcIlwifSBzaGVwaGVyZC1idXR0b24gJHtcbiAgICAgIC8qc2Vjb25kYXJ5Ki9cbiAgICAgIGN0eFs0XSA/IFwic2hlcGhlcmQtYnV0dG9uLXNlY29uZGFyeVwiIDogXCJcIn1gKSkge1xuICAgICAgICBhdHRyKGJ1dHRvbiwgXCJjbGFzc1wiLCBidXR0b25fY2xhc3NfdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypkaXNhYmxlZCovXG4gICAgICA0KSB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9XG4gICAgICAgIC8qZGlzYWJsZWQqL1xuICAgICAgICBjdHhbMl07XG4gICAgICB9XG4gICAgfSxcblxuICAgIGk6IG5vb3AsXG4gICAgbzogbm9vcCxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uKTtcbiAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkOCgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGNvbmZpZ1xuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzO1xuICBsZXQgYWN0aW9uLCBjbGFzc2VzLCBkaXNhYmxlZCwgbGFiZWwsIHNlY29uZGFyeSwgdGV4dDtcblxuICBmdW5jdGlvbiBnZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKGRpc2FibGVkKSkge1xuICAgICAgcmV0dXJuIGRpc2FibGVkID0gZGlzYWJsZWQuY2FsbChzdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJjb25maWdcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoNiwgY29uZmlnID0gJCRwcm9wcy5jb25maWcpO1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoNywgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gIH07XG5cbiAgJCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoJCRzZWxmLiQkLmRpcnR5ICZcbiAgICAvKmNvbmZpZywgc3RlcCovXG4gICAgMTkyKSB7XG4gICAgICB7XG4gICAgICAgICQkaW52YWxpZGF0ZSgwLCBhY3Rpb24gPSBjb25maWcuYWN0aW9uID8gY29uZmlnLmFjdGlvbi5iaW5kKHN0ZXAudG91cikgOiBudWxsKTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDEsIGNsYXNzZXMgPSBjb25maWcuY2xhc3Nlcyk7XG4gICAgICAgICQkaW52YWxpZGF0ZSgyLCBkaXNhYmxlZCA9IGNvbmZpZy5kaXNhYmxlZCA/IGdldERpc2FibGVkKGNvbmZpZy5kaXNhYmxlZCkgOiBmYWxzZSk7XG4gICAgICAgICQkaW52YWxpZGF0ZSgzLCBsYWJlbCA9IGNvbmZpZy5sYWJlbCk7XG4gICAgICAgICQkaW52YWxpZGF0ZSg0LCBzZWNvbmRhcnkgPSBjb25maWcuc2Vjb25kYXJ5KTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDUsIHRleHQgPSBjb25maWcudGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbYWN0aW9uLCBjbGFzc2VzLCBkaXNhYmxlZCwgbGFiZWwsIHNlY29uZGFyeSwgdGV4dCwgY29uZmlnLCBzdGVwXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfYnV0dG9uIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ4LCBjcmVhdGVfZnJhZ21lbnQkOCwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGNvbmZpZzogNixcbiAgICAgIHN0ZXA6IDdcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLWZvb3Rlci5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGdldF9lYWNoX2NvbnRleHQoY3R4LCBsaXN0LCBpKSB7XG4gIGNvbnN0IGNoaWxkX2N0eCA9IGN0eC5zbGljZSgpO1xuICBjaGlsZF9jdHhbMl0gPSBsaXN0W2ldO1xuICByZXR1cm4gY2hpbGRfY3R4O1xufSAvLyAoMjQ6NCkgeyNpZiBidXR0b25zfVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayQzKGN0eCkge1xuICBsZXQgZWFjaF8xX2FuY2hvcjtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBlYWNoX3ZhbHVlID1cbiAgLypidXR0b25zKi9cbiAgY3R4WzFdO1xuICBsZXQgZWFjaF9ibG9ja3MgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVhY2hfdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlYWNoX2Jsb2Nrc1tpXSA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGdldF9lYWNoX2NvbnRleHQoY3R4LCBlYWNoX3ZhbHVlLCBpKSk7XG4gIH1cblxuICBjb25zdCBvdXQgPSBpID0+IHRyYW5zaXRpb25fb3V0KGVhY2hfYmxvY2tzW2ldLCAxLCAxLCAoKSA9PiB7XG4gICAgZWFjaF9ibG9ja3NbaV0gPSBudWxsO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhY2hfYmxvY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGVhY2hfYmxvY2tzW2ldLmMoKTtcbiAgICAgIH1cblxuICAgICAgZWFjaF8xX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFjaF9ibG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZWFjaF9ibG9ja3NbaV0ubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgICB9XG5cbiAgICAgIGluc2VydCh0YXJnZXQsIGVhY2hfMV9hbmNob3IsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypidXR0b25zLCBzdGVwKi9cbiAgICAgIDMpIHtcbiAgICAgICAgZWFjaF92YWx1ZSA9XG4gICAgICAgIC8qYnV0dG9ucyovXG4gICAgICAgIGN0eFsxXTtcbiAgICAgICAgbGV0IGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVhY2hfdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfZWFjaF9jb250ZXh0KGN0eCwgZWFjaF92YWx1ZSwgaSk7XG5cbiAgICAgICAgICBpZiAoZWFjaF9ibG9ja3NbaV0pIHtcbiAgICAgICAgICAgIGVhY2hfYmxvY2tzW2ldLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGVhY2hfYmxvY2tzW2ldLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWFjaF9ibG9ja3NbaV0gPSBjcmVhdGVfZWFjaF9ibG9jayhjaGlsZF9jdHgpO1xuICAgICAgICAgICAgZWFjaF9ibG9ja3NbaV0uYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihlYWNoX2Jsb2Nrc1tpXSwgMSk7XG4gICAgICAgICAgICBlYWNoX2Jsb2Nrc1tpXS5tKGVhY2hfMV9hbmNob3IucGFyZW50Tm9kZSwgZWFjaF8xX2FuY2hvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG5cbiAgICAgICAgZm9yIChpID0gZWFjaF92YWx1ZS5sZW5ndGg7IGkgPCBlYWNoX2Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIG91dChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhY2hfdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihlYWNoX2Jsb2Nrc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICBlYWNoX2Jsb2NrcyA9IGVhY2hfYmxvY2tzLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYWNoX2Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0cmFuc2l0aW9uX291dChlYWNoX2Jsb2Nrc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfZWFjaChlYWNoX2Jsb2NrcywgZGV0YWNoaW5nKTtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChlYWNoXzFfYW5jaG9yKTtcbiAgICB9XG5cbiAgfTtcbn0gLy8gKDI1OjgpIHsjZWFjaCBidXR0b25zIGFzIGNvbmZpZ31cblxuXG5mdW5jdGlvbiBjcmVhdGVfZWFjaF9ibG9jayhjdHgpIHtcbiAgbGV0IHNoZXBoZXJkYnV0dG9uO1xuICBsZXQgY3VycmVudDtcbiAgc2hlcGhlcmRidXR0b24gPSBuZXcgU2hlcGhlcmRfYnV0dG9uKHtcbiAgICBwcm9wczoge1xuICAgICAgY29uZmlnOlxuICAgICAgLypjb25maWcqL1xuICAgICAgY3R4WzJdLFxuICAgICAgc3RlcDpcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMF1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkYnV0dG9uLiQkLmZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkYnV0dG9uLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBjb25zdCBzaGVwaGVyZGJ1dHRvbl9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypidXR0b25zKi9cbiAgICAgIDIpIHNoZXBoZXJkYnV0dG9uX2NoYW5nZXMuY29uZmlnID1cbiAgICAgIC8qY29uZmlnKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgMSkgc2hlcGhlcmRidXR0b25fY2hhbmdlcy5zdGVwID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMF07XG4gICAgICBzaGVwaGVyZGJ1dHRvbi4kc2V0KHNoZXBoZXJkYnV0dG9uX2NoYW5nZXMpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZGJ1dHRvbi4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkYnV0dG9uLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZGJ1dHRvbiwgZGV0YWNoaW5nKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDcoY3R4KSB7XG4gIGxldCBmb290ZXI7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgaWZfYmxvY2sgPVxuICAvKmJ1dHRvbnMqL1xuICBjdHhbMV0gJiYgY3JlYXRlX2lmX2Jsb2NrJDMoY3R4KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgZm9vdGVyID0gZWxlbWVudChcImZvb3RlclwiKTtcbiAgICAgIGlmIChpZl9ibG9jaykgaWZfYmxvY2suYygpO1xuICAgICAgYXR0cihmb290ZXIsIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC1mb290ZXJcIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGZvb3RlciwgYW5jaG9yKTtcbiAgICAgIGlmIChpZl9ibG9jaykgaWZfYmxvY2subShmb290ZXIsIG51bGwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoXG4gICAgICAvKmJ1dHRvbnMqL1xuICAgICAgY3R4WzFdKSB7XG4gICAgICAgIGlmIChpZl9ibG9jaykge1xuICAgICAgICAgIGlmX2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICAgICAgICBpZiAoZGlydHkgJlxuICAgICAgICAgIC8qYnV0dG9ucyovXG4gICAgICAgICAgMikge1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jaywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrID0gY3JlYXRlX2lmX2Jsb2NrJDMoY3R4KTtcbiAgICAgICAgICBpZl9ibG9jay5jKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jaywgMSk7XG4gICAgICAgICAgaWZfYmxvY2subShmb290ZXIsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrKSB7XG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgIGlmX2Jsb2NrID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jayk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2spO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGZvb3Rlcik7XG4gICAgICBpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkNygkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQgYnV0dG9ucztcbiAgbGV0IHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzO1xuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gIH07XG5cbiAgJCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoJCRzZWxmLiQkLmRpcnR5ICZcbiAgICAvKnN0ZXAqL1xuICAgIDEpIHtcbiAgICAgICQkaW52YWxpZGF0ZSgxLCBidXR0b25zID0gc3RlcC5vcHRpb25zLmJ1dHRvbnMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gW3N0ZXAsIGJ1dHRvbnNdO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9mb290ZXIgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDcsIGNyZWF0ZV9mcmFnbWVudCQ3LCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgc3RlcDogMFxuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtY2FuY2VsLWljb24uc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkNihjdHgpIHtcbiAgbGV0IGJ1dHRvbjtcbiAgbGV0IHNwYW47XG4gIGxldCBidXR0b25fYXJpYV9sYWJlbF92YWx1ZTtcbiAgbGV0IG1vdW50ZWQ7XG4gIGxldCBkaXNwb3NlO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBidXR0b24gPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3BhbiA9IGVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiw5dcIjtcbiAgICAgIGF0dHIoc3BhbiwgXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICBhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlID1cbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbMF0ubGFiZWwgP1xuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFswXS5sYWJlbCA6IFwiQ2xvc2UgVG91clwiKTtcbiAgICAgIGF0dHIoYnV0dG9uLCBcImNsYXNzXCIsIFwic2hlcGhlcmQtY2FuY2VsLWljb25cIik7XG4gICAgICBhdHRyKGJ1dHRvbiwgXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBidXR0b24sIGFuY2hvcik7XG4gICAgICBhcHBlbmQoYnV0dG9uLCBzcGFuKTtcblxuICAgICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICAgIGRpc3Bvc2UgPSBsaXN0ZW4oYnV0dG9uLCBcImNsaWNrXCIsXG4gICAgICAgIC8qaGFuZGxlQ2FuY2VsQ2xpY2sqL1xuICAgICAgICBjdHhbMV0pO1xuICAgICAgICBtb3VudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgMSAmJiBidXR0b25fYXJpYV9sYWJlbF92YWx1ZSAhPT0gKGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlID1cbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbMF0ubGFiZWwgP1xuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFswXS5sYWJlbCA6IFwiQ2xvc2UgVG91clwiKSkge1xuICAgICAgICBhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaTogbm9vcCxcbiAgICBvOiBub29wLFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChidXR0b24pO1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgZGlzcG9zZSgpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQ2KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgY2FuY2VsSWNvblxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzO1xuICAvKipcbiAgKiBBZGQgYSBjbGljayBsaXN0ZW5lciB0byB0aGUgY2FuY2VsIGxpbmsgdGhhdCBjYW5jZWxzIHRoZSB0b3VyXG4gICovXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3RlcC5jYW5jZWwoKTtcbiAgfTtcblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJjYW5jZWxJY29uXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGNhbmNlbEljb24gPSAkJHByb3BzLmNhbmNlbEljb24pO1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMiwgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gIH07XG5cbiAgcmV0dXJuIFtjYW5jZWxJY29uLCBoYW5kbGVDYW5jZWxDbGljaywgc3RlcF07XG59XG5cbmNsYXNzIFNoZXBoZXJkX2NhbmNlbF9pY29uIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ2LCBjcmVhdGVfZnJhZ21lbnQkNiwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGNhbmNlbEljb246IDAsXG4gICAgICBzdGVwOiAyXG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC10aXRsZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQ1KGN0eCkge1xuICBsZXQgaDM7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGgzID0gZWxlbWVudChcImgzXCIpO1xuICAgICAgYXR0cihoMywgXCJpZFwiLFxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFsxXSk7XG4gICAgICBhdHRyKGgzLCBcImNsYXNzXCIsIFwic2hlcGhlcmQtdGl0bGVcIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGgzLCBhbmNob3IpO1xuICAgICAgLypoM19iaW5kaW5nKi9cblxuICAgICAgY3R4WzNdKGgzKTtcbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgMikge1xuICAgICAgICBhdHRyKGgzLCBcImlkXCIsXG4gICAgICAgIC8qbGFiZWxJZCovXG4gICAgICAgIGN0eFsxXSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGk6IG5vb3AsXG4gICAgbzogbm9vcCxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goaDMpO1xuICAgICAgLypoM19iaW5kaW5nKi9cblxuICAgICAgY3R4WzNdKG51bGwpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQ1KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgbGFiZWxJZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBlbGVtZW50XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHRpdGxlXG4gIH0gPSAkJHByb3BzO1xuICBhZnRlclVwZGF0ZSgoKSA9PiB7XG4gICAgaWYgKGlzRnVuY3Rpb24odGl0bGUpKSB7XG4gICAgICAkJGludmFsaWRhdGUoMiwgdGl0bGUgPSB0aXRsZSgpKTtcbiAgICB9XG5cbiAgICAkJGludmFsaWRhdGUoMCwgZWxlbWVudC5pbm5lckhUTUwgPSB0aXRsZSwgZWxlbWVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGgzX2JpbmRpbmcoJCR2YWx1ZSkge1xuICAgIGJpbmRpbmdfY2FsbGJhY2tzWyQkdmFsdWUgPyBcInVuc2hpZnRcIiA6IFwicHVzaFwiXSgoKSA9PiB7XG4gICAgICBlbGVtZW50ID0gJCR2YWx1ZTtcbiAgICAgICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImxhYmVsSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgbGFiZWxJZCA9ICQkcHJvcHMubGFiZWxJZCk7XG4gICAgaWYgKFwiZWxlbWVudFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50ID0gJCRwcm9wcy5lbGVtZW50KTtcbiAgICBpZiAoXCJ0aXRsZVwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyLCB0aXRsZSA9ICQkcHJvcHMudGl0bGUpO1xuICB9O1xuXG4gIHJldHVybiBbZWxlbWVudCwgbGFiZWxJZCwgdGl0bGUsIGgzX2JpbmRpbmddO1xufVxuXG5jbGFzcyBTaGVwaGVyZF90aXRsZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkNSwgY3JlYXRlX2ZyYWdtZW50JDUsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBsYWJlbElkOiAxLFxuICAgICAgZWxlbWVudDogMCxcbiAgICAgIHRpdGxlOiAyXG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1oZWFkZXIuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCkge1xuICBsZXQgc2hlcGhlcmR0aXRsZTtcbiAgbGV0IGN1cnJlbnQ7XG4gIHNoZXBoZXJkdGl0bGUgPSBuZXcgU2hlcGhlcmRfdGl0bGUoe1xuICAgIHByb3BzOiB7XG4gICAgICBsYWJlbElkOlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFswXSxcbiAgICAgIHRpdGxlOlxuICAgICAgLyp0aXRsZSovXG4gICAgICBjdHhbMl1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkdGl0bGUuJCQuZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmR0aXRsZSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgY29uc3Qgc2hlcGhlcmR0aXRsZV9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIDEpIHNoZXBoZXJkdGl0bGVfY2hhbmdlcy5sYWJlbElkID1cbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbMF07XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLyp0aXRsZSovXG4gICAgICA0KSBzaGVwaGVyZHRpdGxlX2NoYW5nZXMudGl0bGUgPVxuICAgICAgLyp0aXRsZSovXG4gICAgICBjdHhbMl07XG4gICAgICBzaGVwaGVyZHRpdGxlLiRzZXQoc2hlcGhlcmR0aXRsZV9jaGFuZ2VzKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmR0aXRsZS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkdGl0bGUuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkdGl0bGUsIGRldGFjaGluZyk7XG4gICAgfVxuXG4gIH07XG59IC8vICgzOTo0KSB7I2lmIGNhbmNlbEljb24gJiYgY2FuY2VsSWNvbi5lbmFibGVkfVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayQyKGN0eCkge1xuICBsZXQgc2hlcGhlcmRjYW5jZWxpY29uO1xuICBsZXQgY3VycmVudDtcbiAgc2hlcGhlcmRjYW5jZWxpY29uID0gbmV3IFNoZXBoZXJkX2NhbmNlbF9pY29uKHtcbiAgICBwcm9wczoge1xuICAgICAgY2FuY2VsSWNvbjpcbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbM10sXG4gICAgICBzdGVwOlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsxXVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmRjYW5jZWxpY29uLiQkLmZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkY2FuY2VsaWNvbiwgdGFyZ2V0LCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgY29uc3Qgc2hlcGhlcmRjYW5jZWxpY29uX2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgOCkgc2hlcGhlcmRjYW5jZWxpY29uX2NoYW5nZXMuY2FuY2VsSWNvbiA9XG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzNdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICAyKSBzaGVwaGVyZGNhbmNlbGljb25fY2hhbmdlcy5zdGVwID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMV07XG4gICAgICBzaGVwaGVyZGNhbmNlbGljb24uJHNldChzaGVwaGVyZGNhbmNlbGljb25fY2hhbmdlcyk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkY2FuY2VsaWNvbi4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkY2FuY2VsaWNvbi4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmRjYW5jZWxpY29uLCBkZXRhY2hpbmcpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkNChjdHgpIHtcbiAgbGV0IGhlYWRlcjtcbiAgbGV0IHQ7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgaWZfYmxvY2swID1cbiAgLyp0aXRsZSovXG4gIGN0eFsyXSAmJiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCk7XG4gIGxldCBpZl9ibG9jazEgPVxuICAvKmNhbmNlbEljb24qL1xuICBjdHhbM10gJiZcbiAgLypjYW5jZWxJY29uKi9cbiAgY3R4WzNdLmVuYWJsZWQgJiYgY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgaGVhZGVyID0gZWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgIGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgICB0ID0gc3BhY2UoKTtcbiAgICAgIGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgICBhdHRyKGhlYWRlciwgXCJjbGFzc1wiLCBcInNoZXBoZXJkLWhlYWRlclwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgaGVhZGVyLCBhbmNob3IpO1xuICAgICAgaWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLm0oaGVhZGVyLCBudWxsKTtcbiAgICAgIGFwcGVuZChoZWFkZXIsIHQpO1xuICAgICAgaWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLm0oaGVhZGVyLCBudWxsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKFxuICAgICAgLyp0aXRsZSovXG4gICAgICBjdHhbMl0pIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrMCkge1xuICAgICAgICAgIGlmX2Jsb2NrMC5wKGN0eCwgZGlydHkpO1xuXG4gICAgICAgICAgaWYgKGRpcnR5ICZcbiAgICAgICAgICAvKnRpdGxlKi9cbiAgICAgICAgICA0KSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrMCA9IGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICAgICAgICBpZl9ibG9jazAuYygpO1xuICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICAgICAgICBpZl9ibG9jazAubShoZWFkZXIsIHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgaWZfYmxvY2swID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzNdICYmXG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzNdLmVuYWJsZWQpIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrMSkge1xuICAgICAgICAgIGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgICAgICAgaWYgKGRpcnR5ICZcbiAgICAgICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgICAgIDgpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KTtcbiAgICAgICAgICBpZl9ibG9jazEuYygpO1xuICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICAgICAgICBpZl9ibG9jazEubShoZWFkZXIsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgaWZfYmxvY2sxID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazApO1xuICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCk7XG4gICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazEpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGhlYWRlcik7XG4gICAgICBpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZCgpO1xuICAgICAgaWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmQoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkNCgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGxhYmVsSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcztcbiAgbGV0IHRpdGxlLCBjYW5jZWxJY29uO1xuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImxhYmVsSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgbGFiZWxJZCA9ICQkcHJvcHMubGFiZWxJZCk7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxLCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgfTtcblxuICAkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICgkJHNlbGYuJCQuZGlydHkgJlxuICAgIC8qc3RlcCovXG4gICAgMikge1xuICAgICAge1xuICAgICAgICAkJGludmFsaWRhdGUoMiwgdGl0bGUgPSBzdGVwLm9wdGlvbnMudGl0bGUpO1xuICAgICAgICAkJGludmFsaWRhdGUoMywgY2FuY2VsSWNvbiA9IHN0ZXAub3B0aW9ucy5jYW5jZWxJY29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFtsYWJlbElkLCBzdGVwLCB0aXRsZSwgY2FuY2VsSWNvbl07XG59XG5cbmNsYXNzIFNoZXBoZXJkX2hlYWRlciBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkNCwgY3JlYXRlX2ZyYWdtZW50JDQsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBsYWJlbElkOiAwLFxuICAgICAgc3RlcDogMVxuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtdGV4dC5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQzKGN0eCkge1xuICBsZXQgZGl2O1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYXR0cihkaXYsIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC10ZXh0XCIpO1xuICAgICAgYXR0cihkaXYsIFwiaWRcIixcbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICBjdHhbMV0pO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgICAvKmRpdl9iaW5kaW5nKi9cblxuICAgICAgY3R4WzNdKGRpdik7XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIDIpIHtcbiAgICAgICAgYXR0cihkaXYsIFwiaWRcIixcbiAgICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgICAgY3R4WzFdKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaTogbm9vcCxcbiAgICBvOiBub29wLFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgICAgLypkaXZfYmluZGluZyovXG5cbiAgICAgIGN0eFszXShudWxsKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkMygkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGRlc2NyaXB0aW9uSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZWxlbWVudFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzO1xuICBhZnRlclVwZGF0ZSgoKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHRleHRcbiAgICB9ID0gc3RlcC5vcHRpb25zO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24odGV4dCkpIHtcbiAgICAgIHRleHQgPSB0ZXh0LmNhbGwoc3RlcCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQkMSh0ZXh0KSkge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dCwgZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBkaXZfYmluZGluZygkJHZhbHVlKSB7XG4gICAgYmluZGluZ19jYWxsYmFja3NbJCR2YWx1ZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKCgpID0+IHtcbiAgICAgIGVsZW1lbnQgPSAkJHZhbHVlO1xuICAgICAgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwiZGVzY3JpcHRpb25JZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxLCBkZXNjcmlwdGlvbklkID0gJCRwcm9wcy5kZXNjcmlwdGlvbklkKTtcbiAgICBpZiAoXCJlbGVtZW50XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQgPSAkJHByb3BzLmVsZW1lbnQpO1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMiwgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gIH07XG5cbiAgcmV0dXJuIFtlbGVtZW50LCBkZXNjcmlwdGlvbklkLCBzdGVwLCBkaXZfYmluZGluZ107XG59XG5cbmNsYXNzIFNoZXBoZXJkX3RleHQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDMsIGNyZWF0ZV9mcmFnbWVudCQzLCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgZGVzY3JpcHRpb25JZDogMSxcbiAgICAgIGVsZW1lbnQ6IDAsXG4gICAgICBzdGVwOiAyXG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1jb250ZW50LnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KSB7XG4gIGxldCBzaGVwaGVyZGhlYWRlcjtcbiAgbGV0IGN1cnJlbnQ7XG4gIHNoZXBoZXJkaGVhZGVyID0gbmV3IFNoZXBoZXJkX2hlYWRlcih7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhYmVsSWQ6XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzFdLFxuICAgICAgc3RlcDpcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkaGVhZGVyLiQkLmZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkaGVhZGVyLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBjb25zdCBzaGVwaGVyZGhlYWRlcl9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIDIpIHNoZXBoZXJkaGVhZGVyX2NoYW5nZXMubGFiZWxJZCA9XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzFdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICA0KSBzaGVwaGVyZGhlYWRlcl9jaGFuZ2VzLnN0ZXAgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIHNoZXBoZXJkaGVhZGVyLiRzZXQoc2hlcGhlcmRoZWFkZXJfY2hhbmdlcyk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkaGVhZGVyLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmRoZWFkZXIuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkaGVhZGVyLCBkZXRhY2hpbmcpO1xuICAgIH1cblxuICB9O1xufSAvLyAoMjg6MikgeyNpZiAhaXNVbmRlZmluZWQoc3RlcC5vcHRpb25zLnRleHQpfVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18xKGN0eCkge1xuICBsZXQgc2hlcGhlcmR0ZXh0O1xuICBsZXQgY3VycmVudDtcbiAgc2hlcGhlcmR0ZXh0ID0gbmV3IFNoZXBoZXJkX3RleHQoe1xuICAgIHByb3BzOiB7XG4gICAgICBkZXNjcmlwdGlvbklkOlxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIGN0eFswXSxcbiAgICAgIHN0ZXA6XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZHRleHQuJCQuZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmR0ZXh0LCB0YXJnZXQsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBjb25zdCBzaGVwaGVyZHRleHRfY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICAxKSBzaGVwaGVyZHRleHRfY2hhbmdlcy5kZXNjcmlwdGlvbklkID1cbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICBjdHhbMF07XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDQpIHNoZXBoZXJkdGV4dF9jaGFuZ2VzLnN0ZXAgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIHNoZXBoZXJkdGV4dC4kc2V0KHNoZXBoZXJkdGV4dF9jaGFuZ2VzKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmR0ZXh0LiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmR0ZXh0LiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZHRleHQsIGRldGFjaGluZyk7XG4gICAgfVxuXG4gIH07XG59IC8vICgzNToyKSB7I2lmIEFycmF5LmlzQXJyYXkoc3RlcC5vcHRpb25zLmJ1dHRvbnMpICYmIHN0ZXAub3B0aW9ucy5idXR0b25zLmxlbmd0aH1cblxuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMShjdHgpIHtcbiAgbGV0IHNoZXBoZXJkZm9vdGVyO1xuICBsZXQgY3VycmVudDtcbiAgc2hlcGhlcmRmb290ZXIgPSBuZXcgU2hlcGhlcmRfZm9vdGVyKHtcbiAgICBwcm9wczoge1xuICAgICAgc3RlcDpcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkZm9vdGVyLiQkLmZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkZm9vdGVyLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBjb25zdCBzaGVwaGVyZGZvb3Rlcl9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDQpIHNoZXBoZXJkZm9vdGVyX2NoYW5nZXMuc3RlcCA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdO1xuICAgICAgc2hlcGhlcmRmb290ZXIuJHNldChzaGVwaGVyZGZvb3Rlcl9jaGFuZ2VzKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmRmb290ZXIuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZGZvb3Rlci4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmRmb290ZXIsIGRldGFjaGluZyk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQyKGN0eCkge1xuICBsZXQgZGl2O1xuICBsZXQgc2hvd19pZl8yID0gIWlzVW5kZWZpbmVkKFxuICAvKnN0ZXAqL1xuICBjdHhbMl0ub3B0aW9ucy50aXRsZSkgfHxcbiAgLypzdGVwKi9cbiAgY3R4WzJdLm9wdGlvbnMuY2FuY2VsSWNvbiAmJlxuICAvKnN0ZXAqL1xuICBjdHhbMl0ub3B0aW9ucy5jYW5jZWxJY29uLmVuYWJsZWQ7XG4gIGxldCB0MDtcbiAgbGV0IHNob3dfaWZfMSA9ICFpc1VuZGVmaW5lZChcbiAgLypzdGVwKi9cbiAgY3R4WzJdLm9wdGlvbnMudGV4dCk7XG4gIGxldCB0MTtcbiAgbGV0IHNob3dfaWYgPSBBcnJheS5pc0FycmF5KFxuICAvKnN0ZXAqL1xuICBjdHhbMl0ub3B0aW9ucy5idXR0b25zKSAmJlxuICAvKnN0ZXAqL1xuICBjdHhbMl0ub3B0aW9ucy5idXR0b25zLmxlbmd0aDtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBpZl9ibG9jazAgPSBzaG93X2lmXzIgJiYgY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KTtcbiAgbGV0IGlmX2Jsb2NrMSA9IHNob3dfaWZfMSAmJiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuICBsZXQgaWZfYmxvY2syID0gc2hvd19pZiAmJiBjcmVhdGVfaWZfYmxvY2skMShjdHgpO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmMoKTtcbiAgICAgIHQwID0gc3BhY2UoKTtcbiAgICAgIGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgICB0MSA9IHNwYWNlKCk7XG4gICAgICBpZiAoaWZfYmxvY2syKSBpZl9ibG9jazIuYygpO1xuICAgICAgYXR0cihkaXYsIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC1jb250ZW50XCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgICBpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAubShkaXYsIG51bGwpO1xuICAgICAgYXBwZW5kKGRpdiwgdDApO1xuICAgICAgaWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLm0oZGl2LCBudWxsKTtcbiAgICAgIGFwcGVuZChkaXYsIHQxKTtcbiAgICAgIGlmIChpZl9ibG9jazIpIGlmX2Jsb2NrMi5tKGRpdiwgbnVsbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgNCkgc2hvd19pZl8yID0gIWlzVW5kZWZpbmVkKFxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXS5vcHRpb25zLnRpdGxlKSB8fFxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXS5vcHRpb25zLmNhbmNlbEljb24gJiZcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl0ub3B0aW9ucy5jYW5jZWxJY29uLmVuYWJsZWQ7XG5cbiAgICAgIGlmIChzaG93X2lmXzIpIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrMCkge1xuICAgICAgICAgIGlmX2Jsb2NrMC5wKGN0eCwgZGlydHkpO1xuXG4gICAgICAgICAgaWYgKGRpcnR5ICZcbiAgICAgICAgICAvKnN0ZXAqL1xuICAgICAgICAgIDQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2swID0gY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KTtcbiAgICAgICAgICBpZl9ibG9jazAuYygpO1xuICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICAgICAgICBpZl9ibG9jazAubShkaXYsIHQwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jazApIHtcbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgIGlmX2Jsb2NrMCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICA0KSBzaG93X2lmXzEgPSAhaXNVbmRlZmluZWQoXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdLm9wdGlvbnMudGV4dCk7XG5cbiAgICAgIGlmIChzaG93X2lmXzEpIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrMSkge1xuICAgICAgICAgIGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgICAgICAgaWYgKGRpcnR5ICZcbiAgICAgICAgICAvKnN0ZXAqL1xuICAgICAgICAgIDQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcbiAgICAgICAgICBpZl9ibG9jazEuYygpO1xuICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICAgICAgICBpZl9ibG9jazEubShkaXYsIHQxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgIGlmX2Jsb2NrMSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICA0KSBzaG93X2lmID0gQXJyYXkuaXNBcnJheShcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl0ub3B0aW9ucy5idXR0b25zKSAmJlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXS5vcHRpb25zLmJ1dHRvbnMubGVuZ3RoO1xuXG4gICAgICBpZiAoc2hvd19pZikge1xuICAgICAgICBpZiAoaWZfYmxvY2syKSB7XG4gICAgICAgICAgaWZfYmxvY2syLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICAgICAgICBpZiAoZGlydHkgJlxuICAgICAgICAgIC8qc3RlcCovXG4gICAgICAgICAgNCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazIsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jazIgPSBjcmVhdGVfaWZfYmxvY2skMShjdHgpO1xuICAgICAgICAgIGlmX2Jsb2NrMi5jKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazIsIDEpO1xuICAgICAgICAgIGlmX2Jsb2NrMi5tKGRpdiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2syKSB7XG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazIsIDEsIDEsICgpID0+IHtcbiAgICAgICAgICBpZl9ibG9jazIgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazIpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgICBpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZCgpO1xuICAgICAgaWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmQoKTtcbiAgICAgIGlmIChpZl9ibG9jazIpIGlmX2Jsb2NrMi5kKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDIoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBkZXNjcmlwdGlvbklkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGxhYmVsSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcztcblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJkZXNjcmlwdGlvbklkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGRlc2NyaXB0aW9uSWQgPSAkJHByb3BzLmRlc2NyaXB0aW9uSWQpO1xuICAgIGlmIChcImxhYmVsSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgbGFiZWxJZCA9ICQkcHJvcHMubGFiZWxJZCk7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyLCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgfTtcblxuICByZXR1cm4gW2Rlc2NyaXB0aW9uSWQsIGxhYmVsSWQsIHN0ZXBdO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9jb250ZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQyLCBjcmVhdGVfZnJhZ21lbnQkMiwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGRlc2NyaXB0aW9uSWQ6IDAsXG4gICAgICBsYWJlbElkOiAxLFxuICAgICAgc3RlcDogMlxuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtZWxlbWVudC5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayhjdHgpIHtcbiAgbGV0IGRpdjtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICAgIGF0dHIoZGl2LCBcImNsYXNzXCIsIFwic2hlcGhlcmQtYXJyb3dcIik7XG4gICAgICBhdHRyKGRpdiwgXCJkYXRhLXBvcHBlci1hcnJvd1wiLCBcIlwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQxKGN0eCkge1xuICBsZXQgZGl2O1xuICBsZXQgdDtcbiAgbGV0IHNoZXBoZXJkY29udGVudDtcbiAgbGV0IGRpdl9hcmlhX2Rlc2NyaWJlZGJ5X3ZhbHVlO1xuICBsZXQgZGl2X2FyaWFfbGFiZWxsZWRieV92YWx1ZTtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBtb3VudGVkO1xuICBsZXQgZGlzcG9zZTtcbiAgbGV0IGlmX2Jsb2NrID1cbiAgLypzdGVwKi9cbiAgY3R4WzRdLm9wdGlvbnMuYXJyb3cgJiZcbiAgLypzdGVwKi9cbiAgY3R4WzRdLm9wdGlvbnMuYXR0YWNoVG8gJiZcbiAgLypzdGVwKi9cbiAgY3R4WzRdLm9wdGlvbnMuYXR0YWNoVG8uZWxlbWVudCAmJlxuICAvKnN0ZXAqL1xuICBjdHhbNF0ub3B0aW9ucy5hdHRhY2hUby5vbiAmJiBjcmVhdGVfaWZfYmxvY2soKTtcbiAgc2hlcGhlcmRjb250ZW50ID0gbmV3IFNoZXBoZXJkX2NvbnRlbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICBkZXNjcmlwdGlvbklkOlxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIGN0eFsyXSxcbiAgICAgIGxhYmVsSWQ6XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzNdLFxuICAgICAgc3RlcDpcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF1cbiAgICB9XG4gIH0pO1xuICBsZXQgZGl2X2xldmVscyA9IFt7XG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGRpdl9hcmlhX2Rlc2NyaWJlZGJ5X3ZhbHVlID0gIWlzVW5kZWZpbmVkKFxuICAgIC8qc3RlcCovXG4gICAgY3R4WzRdLm9wdGlvbnMudGV4dCkgP1xuICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgY3R4WzJdIDogbnVsbFxuICB9LCB7XG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogZGl2X2FyaWFfbGFiZWxsZWRieV92YWx1ZSA9XG4gICAgLypzdGVwKi9cbiAgICBjdHhbNF0ub3B0aW9ucy50aXRsZSA/XG4gICAgLypsYWJlbElkKi9cbiAgICBjdHhbM10gOiBudWxsXG4gIH0sXG4gIC8qZGF0YVN0ZXBJZCovXG4gIGN0eFsxXSwge1xuICAgIHJvbGU6IFwiZGlhbG9nXCJcbiAgfSwge1xuICAgIHRhYmluZGV4OiBcIjBcIlxuICB9XTtcbiAgbGV0IGRpdl9kYXRhID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZfbGV2ZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZGl2X2RhdGEgPSBhc3NpZ24oZGl2X2RhdGEsIGRpdl9sZXZlbHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChpZl9ibG9jaykgaWZfYmxvY2suYygpO1xuICAgICAgdCA9IHNwYWNlKCk7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkY29udGVudC4kJC5mcmFnbWVudCk7XG4gICAgICBzZXRfYXR0cmlidXRlcyhkaXYsIGRpdl9kYXRhKTtcbiAgICAgIHRvZ2dsZV9jbGFzcyhkaXYsIFwic2hlcGhlcmQtaGFzLWNhbmNlbC1pY29uXCIsXG4gICAgICAvKmhhc0NhbmNlbEljb24qL1xuICAgICAgY3R4WzVdKTtcbiAgICAgIHRvZ2dsZV9jbGFzcyhkaXYsIFwic2hlcGhlcmQtaGFzLXRpdGxlXCIsXG4gICAgICAvKmhhc1RpdGxlKi9cbiAgICAgIGN0eFs2XSk7XG4gICAgICB0b2dnbGVfY2xhc3MoZGl2LCBcInNoZXBoZXJkLWVsZW1lbnRcIiwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICAgIGlmIChpZl9ibG9jaykgaWZfYmxvY2subShkaXYsIG51bGwpO1xuICAgICAgYXBwZW5kKGRpdiwgdCk7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmRjb250ZW50LCBkaXYsIG51bGwpO1xuICAgICAgLypkaXZfYmluZGluZyovXG5cbiAgICAgIGN0eFsxM10oZGl2KTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgICAgZGlzcG9zZSA9IGxpc3RlbihkaXYsIFwia2V5ZG93blwiLFxuICAgICAgICAvKmhhbmRsZUtleURvd24qL1xuICAgICAgICBjdHhbN10pO1xuICAgICAgICBtb3VudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF0ub3B0aW9ucy5hcnJvdyAmJlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XS5vcHRpb25zLmF0dGFjaFRvICYmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdLm9wdGlvbnMuYXR0YWNoVG8uZWxlbWVudCAmJlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XS5vcHRpb25zLmF0dGFjaFRvLm9uKSB7XG4gICAgICAgIGlmIChpZl9ibG9jaykgOyBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9jaygpO1xuICAgICAgICAgIGlmX2Jsb2NrLmMoKTtcbiAgICAgICAgICBpZl9ibG9jay5tKGRpdiwgdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICAgICAgaWZfYmxvY2suZCgxKTtcbiAgICAgICAgaWZfYmxvY2sgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzaGVwaGVyZGNvbnRlbnRfY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICA0KSBzaGVwaGVyZGNvbnRlbnRfY2hhbmdlcy5kZXNjcmlwdGlvbklkID1cbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICBjdHhbMl07XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIDgpIHNoZXBoZXJkY29udGVudF9jaGFuZ2VzLmxhYmVsSWQgPVxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFszXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgMTYpIHNoZXBoZXJkY29udGVudF9jaGFuZ2VzLnN0ZXAgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XTtcbiAgICAgIHNoZXBoZXJkY29udGVudC4kc2V0KHNoZXBoZXJkY29udGVudF9jaGFuZ2VzKTtcbiAgICAgIHNldF9hdHRyaWJ1dGVzKGRpdiwgZGl2X2RhdGEgPSBnZXRfc3ByZWFkX3VwZGF0ZShkaXZfbGV2ZWxzLCBbKCFjdXJyZW50IHx8IGRpcnR5ICZcbiAgICAgIC8qc3RlcCwgZGVzY3JpcHRpb25JZCovXG4gICAgICAyMCAmJiBkaXZfYXJpYV9kZXNjcmliZWRieV92YWx1ZSAhPT0gKGRpdl9hcmlhX2Rlc2NyaWJlZGJ5X3ZhbHVlID0gIWlzVW5kZWZpbmVkKFxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XS5vcHRpb25zLnRleHQpID9cbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICBjdHhbMl0gOiBudWxsKSkgJiYge1xuICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogZGl2X2FyaWFfZGVzY3JpYmVkYnlfdmFsdWVcbiAgICAgIH0sICghY3VycmVudCB8fCBkaXJ0eSAmXG4gICAgICAvKnN0ZXAsIGxhYmVsSWQqL1xuICAgICAgMjQgJiYgZGl2X2FyaWFfbGFiZWxsZWRieV92YWx1ZSAhPT0gKGRpdl9hcmlhX2xhYmVsbGVkYnlfdmFsdWUgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XS5vcHRpb25zLnRpdGxlID9cbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbM10gOiBudWxsKSkgJiYge1xuICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBkaXZfYXJpYV9sYWJlbGxlZGJ5X3ZhbHVlXG4gICAgICB9LCBkaXJ0eSAmXG4gICAgICAvKmRhdGFTdGVwSWQqL1xuICAgICAgMiAmJlxuICAgICAgLypkYXRhU3RlcElkKi9cbiAgICAgIGN0eFsxXSwge1xuICAgICAgICByb2xlOiBcImRpYWxvZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHRhYmluZGV4OiBcIjBcIlxuICAgICAgfV0pKTtcbiAgICAgIHRvZ2dsZV9jbGFzcyhkaXYsIFwic2hlcGhlcmQtaGFzLWNhbmNlbC1pY29uXCIsXG4gICAgICAvKmhhc0NhbmNlbEljb24qL1xuICAgICAgY3R4WzVdKTtcbiAgICAgIHRvZ2dsZV9jbGFzcyhkaXYsIFwic2hlcGhlcmQtaGFzLXRpdGxlXCIsXG4gICAgICAvKmhhc1RpdGxlKi9cbiAgICAgIGN0eFs2XSk7XG4gICAgICB0b2dnbGVfY2xhc3MoZGl2LCBcInNoZXBoZXJkLWVsZW1lbnRcIiwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkY29udGVudC4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkY29udGVudC4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgICBpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoKTtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkY29udGVudCk7XG4gICAgICAvKmRpdl9iaW5kaW5nKi9cblxuICAgICAgY3R4WzEzXShudWxsKTtcbiAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuY29uc3QgS0VZX1RBQiA9IDk7XG5jb25zdCBLRVlfRVNDID0gMjc7XG5jb25zdCBMRUZUX0FSUk9XID0gMzc7XG5jb25zdCBSSUdIVF9BUlJPVyA9IDM5O1xuXG5mdW5jdGlvbiBnZXRDbGFzc2VzQXJyYXkoY2xhc3Nlcykge1xuICByZXR1cm4gY2xhc3Nlcy5zcGxpdChcIiBcIikuZmlsdGVyKGNsYXNzTmFtZSA9PiAhIWNsYXNzTmFtZS5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQxKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgY2xhc3NQcmVmaXhcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZWxlbWVudFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBkZXNjcmlwdGlvbklkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBmb2N1c2FibGVFbGVtZW50c1xuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBsYWJlbElkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGxhc3RGb2N1c2FibGVFbGVtZW50XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZGF0YVN0ZXBJZFxuICB9ID0gJCRwcm9wcztcbiAgbGV0IGhhc0NhbmNlbEljb24sIGhhc1RpdGxlLCBjbGFzc2VzO1xuXG4gIGNvbnN0IGdldEVsZW1lbnQgPSAoKSA9PiBlbGVtZW50O1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgZm9jdXNhYmxlXG4gICAgJCRpbnZhbGlkYXRlKDEsIGRhdGFTdGVwSWQgPSB7XG4gICAgICBbYGRhdGEtJHtjbGFzc1ByZWZpeH1zaGVwaGVyZC1zdGVwLWlkYF06IHN0ZXAuaWRcbiAgICB9KTtcbiAgICAkJGludmFsaWRhdGUoOSwgZm9jdXNhYmxlRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgW3RhYmluZGV4PVxcXCIwXFxcIl1cIikpO1xuICAgICQkaW52YWxpZGF0ZSg4LCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXSk7XG4gICAgJCRpbnZhbGlkYXRlKDEwLCBsYXN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdKTtcbiAgfSk7XG4gIGFmdGVyVXBkYXRlKCgpID0+IHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gc3RlcC5vcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIHVwZGF0ZUR5bmFtaWNDbGFzc2VzKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVEeW5hbWljQ2xhc3NlcygpIHtcbiAgICByZW1vdmVDbGFzc2VzKGNsYXNzZXMpO1xuICAgIGNsYXNzZXMgPSBzdGVwLm9wdGlvbnMuY2xhc3NlcztcbiAgICBhZGRDbGFzc2VzKGNsYXNzZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNsYXNzZXMpKSB7XG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gZ2V0Q2xhc3Nlc0FycmF5KGNsYXNzZXMpO1xuXG4gICAgICBpZiAob2xkQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzZXMoY2xhc3Nlcykge1xuICAgIGlmIChpc1N0cmluZyhjbGFzc2VzKSkge1xuICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IGdldENsYXNzZXNBcnJheShjbGFzc2VzKTtcblxuICAgICAgaWYgKG5ld0NsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICogU2V0dXAga2V5ZG93biBldmVudHMgdG8gYWxsb3cgY2xvc2luZyB0aGUgbW9kYWwgd2l0aCBFU0NcbiAgKlxuICAqIEJvcnJvd2VkIGZyb20gdGhpcyBncmVhdCBwb3N0ISBodHRwczovL2JpdHNvZmNvLmRlL2FjY2Vzc2libGUtbW9kYWwtZGlhbG9nL1xuICAqXG4gICogQHByaXZhdGVcbiAgKi9cblxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0b3VyXG4gICAgfSA9IHN0ZXA7XG5cbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSBLRVlfVEFCOlxuICAgICAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIEJhY2t3YXJkIHRhYlxuXG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbGVtZW50IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hlcGhlcmQtZWxlbWVudFwiKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBLRVlfRVNDOlxuICAgICAgICBpZiAodG91ci5vcHRpb25zLmV4aXRPbkVzYykge1xuICAgICAgICAgIHN0ZXAuY2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICBpZiAodG91ci5vcHRpb25zLmtleWJvYXJkTmF2aWdhdGlvbikge1xuICAgICAgICAgIHRvdXIuYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIGlmICh0b3VyLm9wdGlvbnMua2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgdG91ci5uZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZGl2X2JpbmRpbmcoJCR2YWx1ZSkge1xuICAgIGJpbmRpbmdfY2FsbGJhY2tzWyQkdmFsdWUgPyBcInVuc2hpZnRcIiA6IFwicHVzaFwiXSgoKSA9PiB7XG4gICAgICBlbGVtZW50ID0gJCR2YWx1ZTtcbiAgICAgICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImNsYXNzUHJlZml4XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDExLCBjbGFzc1ByZWZpeCA9ICQkcHJvcHMuY2xhc3NQcmVmaXgpO1xuICAgIGlmIChcImVsZW1lbnRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgZWxlbWVudCA9ICQkcHJvcHMuZWxlbWVudCk7XG4gICAgaWYgKFwiZGVzY3JpcHRpb25JZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyLCBkZXNjcmlwdGlvbklkID0gJCRwcm9wcy5kZXNjcmlwdGlvbklkKTtcbiAgICBpZiAoXCJmaXJzdEZvY3VzYWJsZUVsZW1lbnRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoOCwgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gJCRwcm9wcy5maXJzdEZvY3VzYWJsZUVsZW1lbnQpO1xuICAgIGlmIChcImZvY3VzYWJsZUVsZW1lbnRzXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDksIGZvY3VzYWJsZUVsZW1lbnRzID0gJCRwcm9wcy5mb2N1c2FibGVFbGVtZW50cyk7XG4gICAgaWYgKFwibGFiZWxJZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgzLCBsYWJlbElkID0gJCRwcm9wcy5sYWJlbElkKTtcbiAgICBpZiAoXCJsYXN0Rm9jdXNhYmxlRWxlbWVudFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxMCwgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSAkJHByb3BzLmxhc3RGb2N1c2FibGVFbGVtZW50KTtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDQsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICAgIGlmIChcImRhdGFTdGVwSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgZGF0YVN0ZXBJZCA9ICQkcHJvcHMuZGF0YVN0ZXBJZCk7XG4gIH07XG5cbiAgJCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoJCRzZWxmLiQkLmRpcnR5ICZcbiAgICAvKnN0ZXAqL1xuICAgIDE2KSB7XG4gICAgICB7XG4gICAgICAgICQkaW52YWxpZGF0ZSg1LCBoYXNDYW5jZWxJY29uID0gc3RlcC5vcHRpb25zICYmIHN0ZXAub3B0aW9ucy5jYW5jZWxJY29uICYmIHN0ZXAub3B0aW9ucy5jYW5jZWxJY29uLmVuYWJsZWQpO1xuICAgICAgICAkJGludmFsaWRhdGUoNiwgaGFzVGl0bGUgPSBzdGVwLm9wdGlvbnMgJiYgc3RlcC5vcHRpb25zLnRpdGxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFtlbGVtZW50LCBkYXRhU3RlcElkLCBkZXNjcmlwdGlvbklkLCBsYWJlbElkLCBzdGVwLCBoYXNDYW5jZWxJY29uLCBoYXNUaXRsZSwgaGFuZGxlS2V5RG93biwgZmlyc3RGb2N1c2FibGVFbGVtZW50LCBmb2N1c2FibGVFbGVtZW50cywgbGFzdEZvY3VzYWJsZUVsZW1lbnQsIGNsYXNzUHJlZml4LCBnZXRFbGVtZW50LCBkaXZfYmluZGluZ107XG59XG5cbmNsYXNzIFNoZXBoZXJkX2VsZW1lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDEsIGNyZWF0ZV9mcmFnbWVudCQxLCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgY2xhc3NQcmVmaXg6IDExLFxuICAgICAgZWxlbWVudDogMCxcbiAgICAgIGRlc2NyaXB0aW9uSWQ6IDIsXG4gICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQ6IDgsXG4gICAgICBmb2N1c2FibGVFbGVtZW50czogOSxcbiAgICAgIGxhYmVsSWQ6IDMsXG4gICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudDogMTAsXG4gICAgICBzdGVwOiA0LFxuICAgICAgZGF0YVN0ZXBJZDogMSxcbiAgICAgIGdldEVsZW1lbnQ6IDEyXG4gICAgfSk7XG4gIH1cblxuICBnZXQgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbMTJdO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBzbW9vdGhzY3JvbGwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gIC8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAgIC8vIGFsaWFzZXNcbiAgICAgIHZhciB3ID0gd2luZG93O1xuICAgICAgdmFyIGQgPSBkb2N1bWVudDsgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcblxuICAgICAgaWYgKCdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgdy5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGdsb2JhbHNcblxuXG4gICAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgICAgdmFyIFNDUk9MTF9USU1FID0gNDY4OyAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG5cbiAgICAgIHZhciBvcmlnaW5hbCA9IHtcbiAgICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcbiAgICAgICAgZWxlbWVudFNjcm9sbDogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIHx8IHNjcm9sbEVsZW1lbnQsXG4gICAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgICAgfTsgLy8gZGVmaW5lIHRpbWluZyBtZXRob2RcblxuICAgICAgdmFyIG5vdyA9IHcucGVyZm9ybWFuY2UgJiYgdy5wZXJmb3JtYW5jZS5ub3cgPyB3LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHcucGVyZm9ybWFuY2UpIDogRGF0ZS5ub3c7XG4gICAgICAvKipcbiAgICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgICAqIEBtZXRob2QgaXNNaWNyb3NvZnRCcm93c2VyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuXG4gICAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICB9XG4gICAgICAvKlxuICAgICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICAgKiByb3VuZGluZyB1cCBzY3JvbGxIZWlnaHQgYW5kIHNjcm9sbFdpZHRoIGNhdXNpbmcgZmFsc2UgcG9zaXRpdmVzXG4gICAgICAgKiBvbiBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgICAqL1xuXG5cbiAgICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuICAgICAgLyoqXG4gICAgICAgKiBjaGFuZ2VzIHNjcm9sbCBwb3NpdGlvbiBpbnNpZGUgYW4gZWxlbWVudFxuICAgICAgICogQG1ldGhvZCBzY3JvbGxFbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICAgKi9cblxuICAgICAgZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICAgKiBAbWV0aG9kIGVhc2VcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gZWFzZShrKSB7XG4gICAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XG4gICAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIHNob3VsZEJhaWxPdXQoZmlyc3RBcmcpIHtcbiAgICAgICAgaWYgKGZpcnN0QXJnID09PSBudWxsIHx8IHR5cGVvZiBmaXJzdEFyZyAhPT0gJ29iamVjdCcgfHwgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fCBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2F1dG8nIHx8IGZpcnN0QXJnLmJlaGF2aW9yID09PSAnaW5zdGFudCcpIHtcbiAgICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L251bGxcbiAgICAgICAgICAvLyBvciBiZWhhdmlvciBpcyBhdXRvLCBpbnN0YW50IG9yIHVuZGVmaW5lZFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ29iamVjdCcgJiYgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdzbW9vdGgnKSB7XG4gICAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gLy8gdGhyb3cgZXJyb3Igd2hlbiBiZWhhdmlvciBpcyBub3Qgc3VwcG9ydGVkXG5cblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICsgZmlyc3RBcmcuYmVoYXZpb3IgKyAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgc3BhY2UgaW4gdGhlIHByb3ZpZGVkIGF4aXNcbiAgICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsIGF4aXMpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09ICdZJykge1xuICAgICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gY2FuT3ZlcmZsb3coZWwsIGF4aXMpIHtcbiAgICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgY2FuIGJlIHNjcm9sbGVkIGluIGVpdGhlciBheGlzXG4gICAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gICAgICAgIHZhciBpc1Njcm9sbGFibGVZID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWScpICYmIGNhbk92ZXJmbG93KGVsLCAnWScpO1xuICAgICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcbiAgICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxuICAgICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHJldHVybnMge05vZGV9IGVsXG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgICB3aGlsZSAoZWwgIT09IGQuYm9keSAmJiBpc1Njcm9sbGFibGUoZWwpID09PSBmYWxzZSkge1xuICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB8fCBlbC5ob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAgICogQG1ldGhvZCBzdGVwXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xuICAgICAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIHZhciBjdXJyZW50WDtcbiAgICAgICAgdmFyIGN1cnJlbnRZO1xuICAgICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7IC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG5cbiAgICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7IC8vIGFwcGx5IGVhc2luZyB0byBlbGFwc2VkIHRpbWVcblxuICAgICAgICB2YWx1ZSA9IGVhc2UoZWxhcHNlZCk7XG4gICAgICAgIGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC54IC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XG4gICAgICAgIGN1cnJlbnRZID0gY29udGV4dC5zdGFydFkgKyAoY29udGV4dC55IC0gY29udGV4dC5zdGFydFkpICogdmFsdWU7XG4gICAgICAgIGNvbnRleHQubWV0aG9kLmNhbGwoY29udGV4dC5zY3JvbGxhYmxlLCBjdXJyZW50WCwgY3VycmVudFkpOyAvLyBzY3JvbGwgbW9yZSBpZiB3ZSBoYXZlIG5vdCByZWFjaGVkIG91ciBkZXN0aW5hdGlvblxuXG4gICAgICAgIGlmIChjdXJyZW50WCAhPT0gY29udGV4dC54IHx8IGN1cnJlbnRZICE9PSBjb250ZXh0LnkpIHtcbiAgICAgICAgICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwLmJpbmQodywgY29udGV4dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIHNjcm9sbHMgd2luZG93IG9yIGVsZW1lbnQgd2l0aCBhIHNtb290aCBiZWhhdmlvclxuICAgICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWwsIHgsIHkpIHtcbiAgICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICAgIHZhciBzdGFydFg7XG4gICAgICAgIHZhciBzdGFydFk7XG4gICAgICAgIHZhciBtZXRob2Q7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBub3coKTsgLy8gZGVmaW5lIHNjcm9sbCBjb250ZXh0XG5cbiAgICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgICBzY3JvbGxhYmxlID0gdztcbiAgICAgICAgICBzdGFydFggPSB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldDtcbiAgICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICBtZXRob2QgPSBvcmlnaW5hbC5zY3JvbGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICAgIHN0YXJ0WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgICAgc3RhcnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICAgIH0gLy8gc2Nyb2xsIGxvb3Bpbmcgb3ZlciBhIGZyYW1lXG5cblxuICAgICAgICBzdGVwKHtcbiAgICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICAgIHN0YXJ0WDogc3RhcnRYLFxuICAgICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgeTogeVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gT1JJR0lOQUwgTUVUSE9EUyBPVkVSUklERVNcbiAgICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG5cblxuICAgICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuXG5cbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG9yaWdpbmFsLnNjcm9sbC5jYWxsKHcsIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0ubGVmdCA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gYXJndW1lbnRzWzBdIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IGlmIHByZXNlbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsWVxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXS50b3AgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuXG5cbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwodywgZC5ib2R5LCBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMF0ubGVmdCA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LCBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1swXS50b3AgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldCk7XG4gICAgICB9OyAvLyB3LnNjcm9sbEJ5XG5cblxuICAgICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcblxuXG4gICAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICBvcmlnaW5hbC5zY3JvbGxCeS5jYWxsKHcsIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0ubGVmdCA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gYXJndW1lbnRzWzBdIDogMCwgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdLnRvcCA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcblxuXG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKHcsIGQuYm9keSwgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldCkpO1xuICAgICAgfTsgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIGFuZCBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUb1xuXG5cbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuXG5cbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGlmIG9uZSBudW1iZXIgaXMgcGFzc2VkLCB0aHJvdyBlcnJvciB0byBtYXRjaCBGaXJlZm94IGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwodGhpcywgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMF0ubGVmdCA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gfn5hcmd1bWVudHNbMF0gOiB0aGlzLnNjcm9sbExlZnQsIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzBdLnRvcCA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMV0gOiB0aGlzLnNjcm9sbFRvcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHNbMF0ubGVmdDtcbiAgICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7IC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcblxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbCh0aGlzLCB0aGlzLCB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcCk7XG4gICAgICB9OyAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeVxuXG5cbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuXG5cbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LCBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcCA6IH5+YXJndW1lbnRzWzFdICsgdGhpcy5zY3JvbGxUb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsKHtcbiAgICAgICAgICBsZWZ0OiB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgICAgYmVoYXZpb3I6IGFyZ3VtZW50c1swXS5iZWhhdmlvclxuICAgICAgICB9KTtcbiAgICAgIH07IC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG5cblxuICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwodGhpcywgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuXG5cbiAgICAgICAgdmFyIHNjcm9sbGFibGVQYXJlbnQgPSBmaW5kU2Nyb2xsYWJsZVBhcmVudCh0aGlzKTtcbiAgICAgICAgdmFyIHBhcmVudFJlY3RzID0gc2Nyb2xsYWJsZVBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudCAhPT0gZC5ib2R5KSB7XG4gICAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW5zaWRlIHBhcmVudFxuICAgICAgICAgIHNtb290aFNjcm9sbC5jYWxsKHRoaXMsIHNjcm9sbGFibGVQYXJlbnQsIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LCBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcCk7IC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG5cbiAgICAgICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgbGVmdDogcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluIHZpZXdwb3J0XG4gICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBjbGllbnRSZWN0cy50b3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB7XG4gICAgICAvLyBjb21tb25qc1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIHBvbHlmaWxsOiBwb2x5ZmlsbFxuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG59KTtcbnNtb290aHNjcm9sbC5wb2x5ZmlsbDtcblxuc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50aW5nIHN0ZXBzIHRvIGJlIGFkZGVkIHRvIGEgdG91ci5cbiAqIEBleHRlbmRzIHtFdmVudGVkfVxuICovXG5cbmNsYXNzIFN0ZXAgZXh0ZW5kcyBFdmVudGVkIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0ZXBcbiAgICogQHBhcmFtIHtUb3VyfSB0b3VyIFRoZSB0b3VyIGZvciB0aGUgc3RlcFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHN0ZXBcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFycm93IFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgYXJyb3cgZm9yIHRoZSB0b29sdGlwIG9yIG5vdC4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5hdHRhY2hUbyBUaGUgZWxlbWVudCB0aGUgc3RlcCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gb24gdGhlIHBhZ2UuXG4gICAqIEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgYGVsZW1lbnRgIGFuZCBgb25gLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBzdGVwID0gbmV3IFN0ZXAodG91ciwge1xuICAgKiAgIGF0dGFjaFRvOiB7IGVsZW1lbnQ6ICcuc29tZSAuc2VsZWN0b3ItcGF0aCcsIG9uOiAnbGVmdCcgfSxcbiAgICogICAuLi5tb3JlT3B0aW9uc1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSBkb27igJl0IHNwZWNpZnkgYW4gYXR0YWNoVG8gdGhlIGVsZW1lbnQgd2lsbCBhcHBlYXIgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxuICAgKiBJZiB5b3Ugb21pdCB0aGUgYG9uYCBwb3J0aW9uIG9mIGBhdHRhY2hUb2AsIHRoZSBlbGVtZW50IHdpbGwgc3RpbGwgYmUgaGlnaGxpZ2h0ZWQsIGJ1dCB0aGUgdG9vbHRpcCB3aWxsIGFwcGVhclxuICAgKiBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4sIHdpdGhvdXQgYW4gYXJyb3cgcG9pbnRpbmcgdG8gdGhlIHRhcmdldC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IG9wdGlvbnMuYXR0YWNoVG8uZWxlbWVudCBBbiBlbGVtZW50IHNlbGVjdG9yIHN0cmluZyBvciBhIERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hdHRhY2hUby5vbiBUaGUgb3B0aW9uYWwgZGlyZWN0aW9uIHRvIHBsYWNlIHRoZSBQb3BwZXIgdG9vbHRpcCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudC5cbiAgICogICAtIFBvc3NpYmxlIHN0cmluZyB2YWx1ZXM6ICdhdXRvJywgJ2F1dG8tc3RhcnQnLCAnYXV0by1lbmQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdyaWdodCcsICdyaWdodC1zdGFydCcsICdyaWdodC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0JywgJ2xlZnQtZW5kJ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5hZHZhbmNlT24gQW4gYWN0aW9uIG9uIHRoZSBwYWdlIHdoaWNoIHNob3VsZCBhZHZhbmNlIHNoZXBoZXJkIHRvIHRoZSBuZXh0IHN0ZXAuXG4gICAqIEl0IHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCBhIHN0cmluZyBgc2VsZWN0b3JgIGFuZCBhbiBgZXZlbnRgIG5hbWVcbiAgICogYGBganNcbiAgICogY29uc3Qgc3RlcCA9IG5ldyBTdGVwKHRvdXIsIHtcbiAgICogICBhZHZhbmNlT246IHsgc2VsZWN0b3I6ICcuc29tZSAuc2VsZWN0b3ItcGF0aCcsIGV2ZW50OiAnY2xpY2snIH0sXG4gICAqICAgLi4ubW9yZU9wdGlvbnNcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKiBgZXZlbnRgIGRvZXNu4oCZdCBoYXZlIHRvIGJlIGFuIGV2ZW50IGluc2lkZSB0aGUgdG91ciwgaXQgY2FuIGJlIGFueSBldmVudCBmaXJlZCBvbiBhbnkgZWxlbWVudCBvbiB0aGUgcGFnZS5cbiAgICogWW91IGNhbiBhbHNvIGFsd2F5cyBtYW51YWxseSBhZHZhbmNlIHRoZSBUb3VyIGJ5IGNhbGxpbmcgYG15VG91ci5uZXh0KClgLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmJlZm9yZVNob3dQcm9taXNlIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZS5cbiAgICogV2hlbiB0aGUgcHJvbWlzZSByZXNvbHZlcywgdGhlIHJlc3Qgb2YgdGhlIGBzaG93YCBjb2RlIGZvciB0aGUgc3RlcCB3aWxsIGV4ZWN1dGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IG9wdGlvbnMuYnV0dG9ucyBBbiBhcnJheSBvZiBidXR0b25zIHRvIGFkZCB0byB0aGUgc3RlcC4gVGhlc2Ugd2lsbCBiZSByZW5kZXJlZCBpbiBhXG4gICAqIGZvb3RlciBiZWxvdyB0aGUgbWFpbiBib2R5IHRleHQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuYnV0dG9ucy5idXR0b24uYWN0aW9uIEEgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgb24uXG4gICAqIEl0IGlzIGF1dG9tYXRpY2FsbHkgYm91bmQgdG8gdGhlIGB0b3VyYCB0aGUgc3RlcCBpcyBhc3NvY2lhdGVkIHdpdGgsIHNvIHRoaW5ncyBsaWtlIGB0aGlzLm5leHRgIHdpbGxcbiAgICogd29yayBpbnNpZGUgdGhlIGFjdGlvbi5cbiAgICogWW91IGNhbiB1c2UgYWN0aW9uIHRvIHNraXAgc3RlcHMgb3IgbmF2aWdhdGUgdG8gc3BlY2lmaWMgc3RlcHMsIHdpdGggc29tZXRoaW5nIGxpa2U6XG4gICAqIGBgYGpzXG4gICAqIGFjdGlvbigpIHtcbiAgICogICByZXR1cm4gdGhpcy5zaG93KCdzb21lX3N0ZXBfbmFtZScpO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5idXR0b25zLmJ1dHRvbi5jbGFzc2VzIEV4dHJhIGNsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGA8YT5gXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5idXR0b25zLmJ1dHRvbi5kaXNhYmxlZCBTaG91bGQgdGhlIGJ1dHRvbiBiZSBkaXNhYmxlZD9cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYnV0dG9ucy5idXR0b24ubGFiZWwgVGhlIGFyaWEtbGFiZWwgdGV4dCBvZiB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5idXR0b25zLmJ1dHRvbi5zZWNvbmRhcnkgSWYgdHJ1ZSwgYSBzaGVwaGVyZC1idXR0b24tc2Vjb25kYXJ5IGNsYXNzIGlzIGFwcGxpZWQgdG8gdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5idXR0b25zLmJ1dHRvbi50ZXh0IFRoZSBIVE1MIHRleHQgb2YgdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY2FuQ2xpY2tUYXJnZXQgQSBib29sZWFuLCB0aGF0IHdoZW4gc2V0IHRvIGZhbHNlLCB3aWxsIHNldCBgcG9pbnRlci1ldmVudHM6IG5vbmVgIG9uIHRoZSB0YXJnZXRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuY2FuY2VsSWNvbiBPcHRpb25zIGZvciB0aGUgY2FuY2VsIGljb25cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNhbmNlbEljb24uZW5hYmxlZCBTaG91bGQgYSBjYW5jZWwg4oCc4pyV4oCdIGJlIHNob3duIGluIHRoZSBoZWFkZXIgb2YgdGhlIHN0ZXA/XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhbmNlbEljb24ubGFiZWwgVGhlIGxhYmVsIHRvIGFkZCBmb3IgYGFyaWEtbGFiZWxgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNsYXNzZXMgQSBzdHJpbmcgb2YgZXh0cmEgY2xhc3NlcyB0byBhZGQgdG8gdGhlIHN0ZXAncyBjb250ZW50IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZ2hsaWdodENsYXNzIEFuIGV4dHJhIGNsYXNzIHRvIGFwcGx5IHRvIHRoZSBgYXR0YWNoVG9gIGVsZW1lbnQgd2hlbiBpdCBpc1xuICAgKiBoaWdobGlnaHRlZCAodGhhdCBpcywgd2hlbiBpdHMgc3RlcCBpcyBhY3RpdmUpLiBZb3UgY2FuIHRoZW4gdGFyZ2V0IHRoYXQgc2VsZWN0b3IgaW4geW91ciBDU1MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmlkIFRoZSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBgaWRgIGZvciB0aGUgc3RlcC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcgQW4gYW1vdW50IG9mIHBhZGRpbmcgdG8gYWRkIGFyb3VuZCB0aGUgbW9kYWwgb3ZlcmxheSBvcGVuaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXMgQW4gYW1vdW50IG9mIGJvcmRlciByYWRpdXMgdG8gYWRkIGFyb3VuZCB0aGUgbW9kYWwgb3ZlcmxheSBvcGVuaW5nXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnBvcHBlck9wdGlvbnMgRXh0cmEgb3B0aW9ucyB0byBwYXNzIHRvIFBvcHBlclxuICAgKiBAcGFyYW0ge2Jvb2xlYW58T2JqZWN0fSBvcHRpb25zLnNjcm9sbFRvIFNob3VsZCB0aGUgZWxlbWVudCBiZSBzY3JvbGxlZCB0byB3aGVuIHRoaXMgc3RlcCBpcyBzaG93bj8gSWYgdHJ1ZSwgdXNlcyB0aGUgZGVmYXVsdCBgc2Nyb2xsSW50b1ZpZXdgLFxuICAgKiBpZiBhbiBvYmplY3QsIHBhc3NlcyB0aGF0IG9iamVjdCBhcyB0aGUgcGFyYW1zIHRvIGBzY3JvbGxJbnRvVmlld2AgaS5lLiBge2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInfWBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zY3JvbGxUb0hhbmRsZXIgQSBmdW5jdGlvbiB0aGF0IGxldHMgeW91IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHNjcm9sbFRvIGJlaGF2aW9yIGFuZFxuICAgKiBkZWZpbmUgYSBjdXN0b20gYWN0aW9uIHRvIGRvIHRoZSBzY3JvbGxpbmcsIGFuZCBwb3NzaWJseSBvdGhlciBsb2dpYy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zaG93T24gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGl0IHJldHVybnMgYHRydWVgLCB3aWxsIHNob3cgdGhlIHN0ZXAuXG4gICAqIElmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBzdGVwIHdpbGwgYmUgc2tpcHBlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGV4dCBUaGUgdGV4dCBpbiB0aGUgYm9keSBvZiB0aGUgc3RlcC4gSXQgY2FuIGJlIG9uZSBvZiB0aHJlZSB0eXBlczpcbiAgICogYGBgXG4gICAqIC0gSFRNTCBzdHJpbmdcbiAgICogLSBgSFRNTEVsZW1lbnRgIG9iamVjdFxuICAgKiAtIGBGdW5jdGlvbmAgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgc3RlcCBpcyBidWlsdC4gSXQgbXVzdCByZXR1cm4gb25lIHRoZSB0d28gb3B0aW9ucyBhYm92ZS5cbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRpdGxlIFRoZSBzdGVwJ3MgdGl0bGUuIEl0IGJlY29tZXMgYW4gYGgzYCBhdCB0aGUgdG9wIG9mIHRoZSBzdGVwLiBJdCBjYW4gYmUgb25lIG9mIHR3byB0eXBlczpcbiAgICogYGBgXG4gICAqIC0gSFRNTCBzdHJpbmdcbiAgICogLSBgRnVuY3Rpb25gIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHN0ZXAgaXMgYnVpbHQuIEl0IG11c3QgcmV0dXJuIEhUTUwgc3RyaW5nLlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMud2hlbiBZb3UgY2FuIGRlZmluZSBgc2hvd2AsIGBoaWRlYCwgZXRjIGV2ZW50cyBpbnNpZGUgYHdoZW5gLiBGb3IgZXhhbXBsZTpcbiAgICogYGBganNcbiAgICogd2hlbjoge1xuICAgKiAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgKiAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICogQHJldHVybiB7U3RlcH0gVGhlIG5ld2x5IGNyZWF0ZWQgU3RlcCBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IodG91ciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodG91ciwgb3B0aW9ucyk7XG4gICAgdGhpcy50b3VyID0gdG91cjtcbiAgICB0aGlzLmNsYXNzUHJlZml4ID0gdGhpcy50b3VyLm9wdGlvbnMgPyBub3JtYWxpemVQcmVmaXgodGhpcy50b3VyLm9wdGlvbnMuY2xhc3NQcmVmaXgpIDogJyc7XG4gICAgdGhpcy5zdHlsZXMgPSB0b3VyLnN0eWxlcztcbiAgICBhdXRvQmluZCh0aGlzKTtcblxuICAgIHRoaXMuX3NldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ2FuY2VsIHRoZSB0b3VyXG4gICAqIFRyaWdnZXJzIHRoZSBgY2FuY2VsYCBldmVudFxuICAgKi9cblxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLnRvdXIuY2FuY2VsKCk7XG4gICAgdGhpcy50cmlnZ2VyKCdjYW5jZWwnKTtcbiAgfVxuICAvKipcbiAgICogQ29tcGxldGUgdGhlIHRvdXJcbiAgICogVHJpZ2dlcnMgdGhlIGBjb21wbGV0ZWAgZXZlbnRcbiAgICovXG5cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLnRvdXIuY29tcGxldGUoKTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NvbXBsZXRlJyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RlcCwgZGVsZXRlIHRoZSBzdGVwJ3MgZWxlbWVudCwgYW5kIGRlc3Ryb3kgdGhlIFBvcHBlciBpbnN0YW5jZSBmb3IgdGhlIHN0ZXAuXG4gICAqIFRyaWdnZXJzIGBkZXN0cm95YCBldmVudFxuICAgKi9cblxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQkMSh0aGlzLmVsKSAmJiB0aGlzLmVsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVN0ZXBUYXJnZXRPbkhpZGUoKTtcblxuICAgIHRoaXMudHJpZ2dlcignZGVzdHJveScpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0b3VyIGZvciB0aGUgc3RlcFxuICAgKiBAcmV0dXJuIHtUb3VyfSBUaGUgdG91ciBpbnN0YW5jZVxuICAgKi9cblxuXG4gIGdldFRvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudG91cjtcbiAgfVxuICAvKipcbiAgICogSGlkZSB0aGUgc3RlcFxuICAgKi9cblxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy50b3VyLm1vZGFsLmhpZGUoKTtcbiAgICB0aGlzLnRyaWdnZXIoJ2JlZm9yZS1oaWRlJyk7XG5cbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgdGhpcy5lbC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVN0ZXBUYXJnZXRPbkhpZGUoKTtcblxuICAgIHRoaXMudHJpZ2dlcignaGlkZScpO1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHN0ZXAgc2hvdWxkIGJlIGNlbnRlcmVkIG9yIG5vdFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBzdGVwIGlzIGNlbnRlcmVkXG4gICAqL1xuXG5cbiAgaXNDZW50ZXJlZCgpIHtcbiAgICBjb25zdCBhdHRhY2hUb09wdGlvbnMgPSBwYXJzZUF0dGFjaFRvKHRoaXMpO1xuICAgIHJldHVybiAhYXR0YWNoVG9PcHRpb25zLmVsZW1lbnQgfHwgIWF0dGFjaFRvT3B0aW9ucy5vbjtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHN0ZXAgaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBzdGVwIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICovXG5cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5lbCAmJiAhdGhpcy5lbC5oaWRkZW4pO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcyBgX3Nob3dgIGFuZCBlbnN1cmVzIGBiZWZvcmVTaG93UHJvbWlzZWAgcmVzb2x2ZXMgYmVmb3JlIGNhbGxpbmcgc2hvd1xuICAgKiBAcmV0dXJuIHsqfFByb21pc2V9XG4gICAqL1xuXG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMuYmVmb3JlU2hvd1Byb21pc2UpKSB7XG4gICAgICBjb25zdCBiZWZvcmVTaG93UHJvbWlzZSA9IHRoaXMub3B0aW9ucy5iZWZvcmVTaG93UHJvbWlzZSgpO1xuXG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKGJlZm9yZVNob3dQcm9taXNlKSkge1xuICAgICAgICByZXR1cm4gYmVmb3JlU2hvd1Byb21pc2UudGhlbigoKSA9PiB0aGlzLl9zaG93KCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3Nob3coKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3B0aW9ucyBvZiB0aGUgc3RlcC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBzdGVwXG4gICAqL1xuXG5cbiAgdXBkYXRlU3RlcE9wdGlvbnMob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLnNoZXBoZXJkRWxlbWVudENvbXBvbmVudCkge1xuICAgICAgdGhpcy5zaGVwaGVyZEVsZW1lbnRDb21wb25lbnQuJHNldCh7XG4gICAgICAgIHN0ZXA6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCBmb3IgdGhlIHN0ZXBcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbHx1bmRlZmluZWR9IFRoZSBlbGVtZW50IGluc3RhbmNlLiB1bmRlZmluZWQgaWYgaXQgaGFzIG5ldmVyIGJlZW4gc2hvd24sIG51bGwgaWYgaXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gICAqL1xuXG5cbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFyZ2V0IGZvciB0aGUgc3RlcFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxudWxsfHVuZGVmaW5lZH0gVGhlIGVsZW1lbnQgaW5zdGFuY2UuIHVuZGVmaW5lZCBpZiBpdCBoYXMgbmV2ZXIgYmVlbiBzaG93biwgbnVsbCBpZiBxdWVyeSBzdHJpbmcgaGFzIG5vdCBiZWVuIGZvdW5kXG4gICAqL1xuXG5cbiAgZ2V0VGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBTaGVwaGVyZCBlbGVtZW50IGZvciBzdGVwIGJhc2VkIG9uIG9wdGlvbnNcbiAgICpcbiAgICogQHJldHVybiB7RWxlbWVudH0gVGhlIERPTSBlbGVtZW50IGZvciB0aGUgc3RlcCB0b29sdGlwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX2NyZWF0ZVRvb2x0aXBDb250ZW50KCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBgJHt0aGlzLmlkfS1kZXNjcmlwdGlvbmA7XG4gICAgY29uc3QgbGFiZWxJZCA9IGAke3RoaXMuaWR9LWxhYmVsYDtcbiAgICB0aGlzLnNoZXBoZXJkRWxlbWVudENvbXBvbmVudCA9IG5ldyBTaGVwaGVyZF9lbGVtZW50KHtcbiAgICAgIHRhcmdldDogdGhpcy50b3VyLm9wdGlvbnMuc3RlcHNDb250YWluZXIgfHwgZG9jdW1lbnQuYm9keSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNsYXNzUHJlZml4OiB0aGlzLmNsYXNzUHJlZml4LFxuICAgICAgICBkZXNjcmlwdGlvbklkLFxuICAgICAgICBsYWJlbElkLFxuICAgICAgICBzdGVwOiB0aGlzLFxuICAgICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuc2hlcGhlcmRFbGVtZW50Q29tcG9uZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuICAvKipcbiAgICogSWYgYSBjdXN0b20gc2Nyb2xsVG9IYW5kbGVyIGlzIGRlZmluZWQsIGNhbGwgdGhhdCwgb3RoZXJ3aXNlIGRvIHRoZSBnZW5lcmljXG4gICAqIHNjcm9sbEludG9WaWV3IGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxPYmplY3R9IHNjcm9sbFRvT3B0aW9ucyBJZiB0cnVlLCB1c2VzIHRoZSBkZWZhdWx0IGBzY3JvbGxJbnRvVmlld2AsXG4gICAqIGlmIGFuIG9iamVjdCwgcGFzc2VzIHRoYXQgb2JqZWN0IGFzIHRoZSBwYXJhbXMgdG8gYHNjcm9sbEludG9WaWV3YCBpLmUuIGB7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH1gXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3Njcm9sbFRvKHNjcm9sbFRvT3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsZW1lbnRcbiAgICB9ID0gcGFyc2VBdHRhY2hUbyh0aGlzKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5zY3JvbGxUb0hhbmRsZXIpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2Nyb2xsVG9IYW5kbGVyKGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50JDEoZWxlbWVudCkgJiYgdHlwZW9mIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoc2Nyb2xsVG9PcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIF9nZXRDbGFzc09wdGlvbnMgZ2V0cyBhbGwgcG9zc2libGUgY2xhc3NlcyBmb3IgdGhlIHN0ZXBcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0ZXBPcHRpb25zIFRoZSBzdGVwIHNwZWNpZmljIG9wdGlvbnNcbiAgICogQHJldHVybnMge1N0cmluZ30gdW5pcXVlIHN0cmluZyBmcm9tIGFycmF5IG9mIGNsYXNzZXNcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfZ2V0Q2xhc3NPcHRpb25zKHN0ZXBPcHRpb25zKSB7XG4gICAgY29uc3QgZGVmYXVsdFN0ZXBPcHRpb25zID0gdGhpcy50b3VyICYmIHRoaXMudG91ci5vcHRpb25zICYmIHRoaXMudG91ci5vcHRpb25zLmRlZmF1bHRTdGVwT3B0aW9ucztcbiAgICBjb25zdCBzdGVwQ2xhc3NlcyA9IHN0ZXBPcHRpb25zLmNsYXNzZXMgPyBzdGVwT3B0aW9ucy5jbGFzc2VzIDogJyc7XG4gICAgY29uc3QgZGVmYXVsdFN0ZXBPcHRpb25zQ2xhc3NlcyA9IGRlZmF1bHRTdGVwT3B0aW9ucyAmJiBkZWZhdWx0U3RlcE9wdGlvbnMuY2xhc3NlcyA/IGRlZmF1bHRTdGVwT3B0aW9ucy5jbGFzc2VzIDogJyc7XG4gICAgY29uc3QgYWxsQ2xhc3NlcyA9IFsuLi5zdGVwQ2xhc3Nlcy5zcGxpdCgnICcpLCAuLi5kZWZhdWx0U3RlcE9wdGlvbnNDbGFzc2VzLnNwbGl0KCcgJyldO1xuICAgIGNvbnN0IHVuaXFDbGFzc2VzID0gbmV3IFNldChhbGxDbGFzc2VzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxQ2xhc3Nlcykuam9pbignICcpLnRyaW0oKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgb3B0aW9ucyBmb3IgdGhlIHN0ZXAsIG1hcHMgYHdoZW5gIHRvIGV2ZW50cywgc2V0cyB1cCBidXR0b25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgc3RlcFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCB0b3VyT3B0aW9ucyA9IHRoaXMudG91ciAmJiB0aGlzLnRvdXIub3B0aW9ucyAmJiB0aGlzLnRvdXIub3B0aW9ucy5kZWZhdWx0U3RlcE9wdGlvbnM7XG4gICAgdG91ck9wdGlvbnMgPSBjanMoe30sIHRvdXJPcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFycm93OiB0cnVlXG4gICAgfSwgdG91ck9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHtcbiAgICAgIHdoZW5cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMub3B0aW9ucy5jbGFzc2VzID0gdGhpcy5fZ2V0Q2xhc3NPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuaWQgPSB0aGlzLm9wdGlvbnMuaWQgfHwgYHN0ZXAtJHt1dWlkKCl9YDtcblxuICAgIGlmICh3aGVuKSB7XG4gICAgICBPYmplY3Qua2V5cyh3aGVuKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5vbihldmVudCwgd2hlbltldmVudF0sIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGVsZW1lbnQgYW5kIHNldCB1cCB0aGUgUG9wcGVyIGluc3RhbmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3NldHVwRWxlbWVudHMoKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLmVsKSkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IHRoaXMuX2NyZWF0ZVRvb2x0aXBDb250ZW50KCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFkdmFuY2VPbikge1xuICAgICAgYmluZEFkdmFuY2UodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0dXBUb29sdGlwKHRoaXMpO1xuICB9XG4gIC8qKlxuICAgKiBUcmlnZ2VycyBgYmVmb3JlLXNob3dgLCBnZW5lcmF0ZXMgdGhlIHRvb2x0aXAgRE9NIGNvbnRlbnQsXG4gICAqIHNldHMgdXAgYSBQb3BwZXIgaW5zdGFuY2UgZm9yIHRoZSB0b29sdGlwLCB0aGVuIHRyaWdnZXJzIGBzaG93YC5cbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2hvdygpIHtcbiAgICB0aGlzLnRyaWdnZXIoJ2JlZm9yZS1zaG93Jyk7XG5cbiAgICB0aGlzLl9zZXR1cEVsZW1lbnRzKCk7XG5cbiAgICBpZiAoIXRoaXMudG91ci5tb2RhbCkge1xuICAgICAgdGhpcy50b3VyLl9zZXR1cE1vZGFsKCk7XG4gICAgfVxuXG4gICAgdGhpcy50b3VyLm1vZGFsLnNldHVwRm9yU3RlcCh0aGlzKTtcblxuICAgIHRoaXMuX3N0eWxlVGFyZ2V0RWxlbWVudEZvclN0ZXAodGhpcyk7XG5cbiAgICB0aGlzLmVsLmhpZGRlbiA9IGZhbHNlOyAvLyBzdGFydCBzY3JvbGxpbmcgdG8gdGFyZ2V0IGJlZm9yZSBzaG93aW5nIHRoZSBzdGVwXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNjcm9sbFRvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG8odGhpcy5vcHRpb25zLnNjcm9sbFRvKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuc2hlcGhlcmRFbGVtZW50Q29tcG9uZW50LmdldEVsZW1lbnQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldCB8fCBkb2N1bWVudC5ib2R5O1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuY2xhc3NQcmVmaXh9c2hlcGhlcmQtZW5hYmxlZGApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuY2xhc3NQcmVmaXh9c2hlcGhlcmQtdGFyZ2V0YCk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdzaGVwaGVyZC1lbmFibGVkJyk7XG4gICAgdGhpcy50cmlnZ2VyKCdzaG93Jyk7XG4gIH1cbiAgLyoqXG4gICAqIE1vZHVsYXRlcyB0aGUgc3R5bGVzIG9mIHRoZSBwYXNzZWQgc3RlcCdzIHRhcmdldCBlbGVtZW50LCBiYXNlZCBvbiB0aGUgc3RlcCdzIG9wdGlvbnMgYW5kXG4gICAqIHRoZSB0b3VyJ3MgYG1vZGFsYCBvcHRpb24sIHRvIHZpc3VhbGx5IGVtcGhhc2l6ZSB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcCBUaGUgc3RlcCBvYmplY3QgdGhhdCBhdHRhY2hlcyB0byB0aGUgZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zdHlsZVRhcmdldEVsZW1lbnRGb3JTdGVwKHN0ZXApIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gc3RlcC50YXJnZXQ7XG5cbiAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RlcC5vcHRpb25zLmhpZ2hsaWdodENsYXNzKSB7XG4gICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc3RlcC5vcHRpb25zLmhpZ2hsaWdodENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcC5vcHRpb25zLmNhbkNsaWNrVGFyZ2V0ID09PSBmYWxzZSkge1xuICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGVwaGVyZC10YXJnZXQtY2xpY2stZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gYSBzdGVwIGlzIGhpZGRlbiwgcmVtb3ZlIHRoZSBoaWdobGlnaHRDbGFzcyBhbmQgJ3NoZXBoZXJkLWVuYWJsZWQnXG4gICAqIGFuZCAnc2hlcGhlcmQtdGFyZ2V0JyBjbGFzc2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3VwZGF0ZVN0ZXBUYXJnZXRPbkhpZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MpIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5oaWdobGlnaHRDbGFzcyk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NoZXBoZXJkLXRhcmdldC1jbGljay1kaXNhYmxlZCcsIGAke3RoaXMuY2xhc3NQcmVmaXh9c2hlcGhlcmQtZW5hYmxlZGAsIGAke3RoaXMuY2xhc3NQcmVmaXh9c2hlcGhlcmQtdGFyZ2V0YCk7XG4gIH1cblxufVxuXG4vKipcbiAqIENsZWFudXAgdGhlIHN0ZXBzIGFuZCBzZXQgcG9pbnRlckV2ZW50cyBiYWNrIHRvICdhdXRvJ1xuICogQHBhcmFtIHRvdXIgVGhlIHRvdXIgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNsZWFudXBTdGVwcyh0b3VyKSB7XG4gIGlmICh0b3VyKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RlcHNcbiAgICB9ID0gdG91cjtcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgaWYgKHN0ZXAub3B0aW9ucyAmJiBzdGVwLm9wdGlvbnMuY2FuQ2xpY2tUYXJnZXQgPT09IGZhbHNlICYmIHN0ZXAub3B0aW9ucy5hdHRhY2hUbykge1xuICAgICAgICBpZiAoc3RlcC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHN0ZXAudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NoZXBoZXJkLXRhcmdldC1jbGljay1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIHN2ZyBwYXRoIGRhdGEgZm9yIGEgcm91bmRlZCByZWN0YW5nbGUgb3ZlcmxheVxuICogQHBhcmFtIHtPYmplY3R9IGRpbWVuc2lvbiAtIERpbWVuc2lvbnMgb2YgcmVjdGFuZ2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGguXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gT2Zmc2V0IGZyb20gdG9wIGxlZnQgY29ybmVyIGluIHggYXhpcy4gZGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gT2Zmc2V0IGZyb20gdG9wIGxlZnQgY29ybmVyIGluIHkgYXhpcy4gZGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtyPTBdIC0gQ29ybmVyIFJhZGl1cy4gS2VlcCB0aGlzIHNtYWxsZXIgdGhhbiAgaGFsZiBvZiB3aWR0aCBvciBoZWlnaHQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJvdW5kZWQgcmVjdGFuZ2xlIG92ZXJsYXkgcGF0aCBkYXRhLlxuICovXG5mdW5jdGlvbiBtYWtlT3ZlcmxheVBhdGgoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICB4ID0gMCxcbiAgeSA9IDAsXG4gIHIgPSAwXG59KSB7XG4gIGNvbnN0IHtcbiAgICBpbm5lcldpZHRoOiB3LFxuICAgIGlubmVySGVpZ2h0OiBoXG4gIH0gPSB3aW5kb3c7XG4gIHJldHVybiBgTSR7d30sJHtofVxcXG5IMFxcXG5WMFxcXG5IJHt3fVxcXG5WJHtofVxcXG5aXFxcbk0ke3ggKyByfSwke3l9XFxcbmEke3J9LCR7cn0sMCwwLDAtJHtyfSwke3J9XFxcblYke2hlaWdodCArIHkgLSByfVxcXG5hJHtyfSwke3J9LDAsMCwwLCR7cn0sJHtyfVxcXG5IJHt3aWR0aCArIHggLSByfVxcXG5hJHtyfSwke3J9LDAsMCwwLCR7cn0tJHtyfVxcXG5WJHt5ICsgcn1cXFxuYSR7cn0sJHtyfSwwLDAsMC0ke3J9LSR7cn1cXFxuWmA7XG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLW1vZGFsLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50KGN0eCkge1xuICBsZXQgc3ZnO1xuICBsZXQgcGF0aDtcbiAgbGV0IHN2Z19jbGFzc192YWx1ZTtcbiAgbGV0IG1vdW50ZWQ7XG4gIGxldCBkaXNwb3NlO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBzdmcgPSBzdmdfZWxlbWVudChcInN2Z1wiKTtcbiAgICAgIHBhdGggPSBzdmdfZWxlbWVudChcInBhdGhcIik7XG4gICAgICBhdHRyKHBhdGgsIFwiZFwiLFxuICAgICAgLypwYXRoRGVmaW5pdGlvbiovXG4gICAgICBjdHhbMl0pO1xuICAgICAgYXR0cihzdmcsIFwiY2xhc3NcIiwgc3ZnX2NsYXNzX3ZhbHVlID0gYCR7XG4gICAgICAvKm1vZGFsSXNWaXNpYmxlKi9cbiAgICAgIGN0eFsxXSA/IFwic2hlcGhlcmQtbW9kYWwtaXMtdmlzaWJsZVwiIDogXCJcIn0gc2hlcGhlcmQtbW9kYWwtb3ZlcmxheS1jb250YWluZXJgKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgc3ZnLCBhbmNob3IpO1xuICAgICAgYXBwZW5kKHN2ZywgcGF0aCk7XG4gICAgICAvKnN2Z19iaW5kaW5nKi9cblxuICAgICAgY3R4WzExXShzdmcpO1xuXG4gICAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgICAgZGlzcG9zZSA9IGxpc3RlbihzdmcsIFwidG91Y2htb3ZlXCIsXG4gICAgICAgIC8qX3ByZXZlbnRNb2RhbE92ZXJsYXlUb3VjaCovXG4gICAgICAgIGN0eFszXSk7XG4gICAgICAgIG1vdW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qcGF0aERlZmluaXRpb24qL1xuICAgICAgNCkge1xuICAgICAgICBhdHRyKHBhdGgsIFwiZFwiLFxuICAgICAgICAvKnBhdGhEZWZpbml0aW9uKi9cbiAgICAgICAgY3R4WzJdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qbW9kYWxJc1Zpc2libGUqL1xuICAgICAgMiAmJiBzdmdfY2xhc3NfdmFsdWUgIT09IChzdmdfY2xhc3NfdmFsdWUgPSBgJHtcbiAgICAgIC8qbW9kYWxJc1Zpc2libGUqL1xuICAgICAgY3R4WzFdID8gXCJzaGVwaGVyZC1tb2RhbC1pcy12aXNpYmxlXCIgOiBcIlwifSBzaGVwaGVyZC1tb2RhbC1vdmVybGF5LWNvbnRhaW5lcmApKSB7XG4gICAgICAgIGF0dHIoc3ZnLCBcImNsYXNzXCIsIHN2Z19jbGFzc192YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGk6IG5vb3AsXG4gICAgbzogbm9vcCxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goc3ZnKTtcbiAgICAgIC8qc3ZnX2JpbmRpbmcqL1xuXG4gICAgICBjdHhbMTFdKG51bGwpO1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgZGlzcG9zZSgpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBfZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpc0h0bWxFbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICBjb25zdCBvdmVyZmxvd1kgPSBpc0h0bWxFbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm92ZXJmbG93WTtcbiAgY29uc3QgaXNTY3JvbGxhYmxlID0gb3ZlcmZsb3dZICE9PSBcImhpZGRlblwiICYmIG92ZXJmbG93WSAhPT0gXCJ2aXNpYmxlXCI7XG5cbiAgaWYgKGlzU2Nyb2xsYWJsZSAmJiBlbGVtZW50LnNjcm9sbEhlaWdodCA+PSBlbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIF9nZXRTY3JvbGxQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbn1cbi8qKlxuICogR2V0IHRoZSB2aXNpYmxlIGhlaWdodCBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIHNjcm9sbFBhcmVudC5cbiAqIElmIHRoZXJlIGlzIG5vIHNjcm9sbCBwYXJlbnQsIHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgdGFyZ2V0IGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtzY3JvbGxQYXJlbnRdIFRoZSBzY3JvbGxhYmxlIHBhcmVudCBlbGVtZW50XG4gKiBAcmV0dXJucyB7e3k6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJ9fVxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIF9nZXRWaXNpYmxlSGVpZ2h0KGVsZW1lbnQsIHNjcm9sbFBhcmVudCkge1xuICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCB0b3AgPSBlbGVtZW50UmVjdC55IHx8IGVsZW1lbnRSZWN0LnRvcDtcbiAgbGV0IGJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSB8fCB0b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQ7XG5cbiAgaWYgKHNjcm9sbFBhcmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFJlY3QgPSBzY3JvbGxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsUmVjdC55IHx8IHNjcm9sbFJlY3QudG9wO1xuICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFJlY3QuYm90dG9tIHx8IHNjcm9sbFRvcCArIHNjcm9sbFJlY3QuaGVpZ2h0O1xuICAgIHRvcCA9IE1hdGgubWF4KHRvcCwgc2Nyb2xsVG9wKTtcbiAgICBib3R0b20gPSBNYXRoLm1pbihib3R0b20sIHNjcm9sbEJvdHRvbSk7XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChib3R0b20gLSB0b3AsIDApOyAvLyBEZWZhdWx0IHRvIDAgaWYgaGVpZ2h0IGlzIG5lZ2F0aXZlXG5cbiAgcmV0dXJuIHtcbiAgICB5OiB0b3AsXG4gICAgaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgZWxlbWVudFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBvcGVuaW5nUHJvcGVydGllc1xuICB9ID0gJCRwcm9wcztcbiAgdXVpZCgpO1xuICBsZXQgbW9kYWxJc1Zpc2libGUgPSBmYWxzZTtcbiAgbGV0IHJhZklkID0gdW5kZWZpbmVkO1xuICBsZXQgcGF0aERlZmluaXRpb247XG4gIGNsb3NlTW9kYWxPcGVuaW5nKCk7XG5cbiAgY29uc3QgZ2V0RWxlbWVudCA9ICgpID0+IGVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbE9wZW5pbmcoKSB7XG4gICAgJCRpbnZhbGlkYXRlKDQsIG9wZW5pbmdQcm9wZXJ0aWVzID0ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHI6IDBcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgJCRpbnZhbGlkYXRlKDEsIG1vZGFsSXNWaXNpYmxlID0gZmFsc2UpOyAvLyBFbnN1cmUgd2UgY2xlYW51cCBhbGwgZXZlbnQgbGlzdGVuZXJzIHdoZW4gd2UgaGlkZSB0aGUgbW9kYWxcblxuICAgIF9jbGVhbnVwU3RlcEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvbk1vZGFsKG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nID0gMCwgbW9kYWxPdmVybGF5T3BlbmluZ1JhZGl1cyA9IDAsIHNjcm9sbFBhcmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHksXG4gICAgICAgIGhlaWdodFxuICAgICAgfSA9IF9nZXRWaXNpYmxlSGVpZ2h0KHRhcmdldEVsZW1lbnQsIHNjcm9sbFBhcmVudCk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGxlZnRcbiAgICAgIH0gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgbm90IGNvbnNpc3RlbnQuIFNvbWUgYnJvd3NlcnMgdXNlIHggYW5kIHksIHdoaWxlIG90aGVycyB1c2UgbGVmdCBhbmQgdG9wXG5cbiAgICAgICQkaW52YWxpZGF0ZSg0LCBvcGVuaW5nUHJvcGVydGllcyA9IHtcbiAgICAgICAgd2lkdGg6IHdpZHRoICsgbW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcgKiAyLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCArIG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nICogMixcbiAgICAgICAgeDogKHggfHwgbGVmdCkgLSBtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyxcbiAgICAgICAgeTogeSAtIG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nLFxuICAgICAgICByOiBtb2RhbE92ZXJsYXlPcGVuaW5nUmFkaXVzXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VNb2RhbE9wZW5pbmcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEZvclN0ZXAoc3RlcCkge1xuICAgIC8vIEVuc3VyZSB3ZSBtb3ZlIGxpc3RlbmVycyBmcm9tIHRoZSBwcmV2aW91cyBzdGVwLCBiZWZvcmUgd2Ugc2V0dXAgbmV3IG9uZXNcbiAgICBfY2xlYW51cFN0ZXBFdmVudExpc3RlbmVycygpO1xuXG4gICAgaWYgKHN0ZXAudG91ci5vcHRpb25zLnVzZU1vZGFsT3ZlcmxheSkge1xuICAgICAgX3N0eWxlRm9yU3RlcChzdGVwKTtcblxuICAgICAgc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAkJGludmFsaWRhdGUoMSwgbW9kYWxJc1Zpc2libGUgPSB0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IF9wcmV2ZW50TW9kYWxCb2R5VG91Y2ggPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3QgX3ByZXZlbnRNb2RhbE92ZXJsYXlUb3VjaCA9IGUgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG4gIC8qKlxuICAqIEFkZCB0b3VjaG1vdmUgZXZlbnQgbGlzdGVuZXJcbiAgKiBAcHJpdmF0ZVxuICAqL1xuXG5cbiAgZnVuY3Rpb24gX2FkZFN0ZXBFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBQcmV2ZW50cyB3aW5kb3cgZnJvbSBtb3Zpbmcgb24gdG91Y2guXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgX3ByZXZlbnRNb2RhbEJvZHlUb3VjaCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgKiBDYW5jZWwgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wIGFuZCByZW1vdmUgdG91Y2htb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAqIEBwcml2YXRlXG4gICovXG5cblxuICBmdW5jdGlvbiBfY2xlYW51cFN0ZXBFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAocmFmSWQpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkKTtcbiAgICAgIHJhZklkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIF9wcmV2ZW50TW9kYWxCb2R5VG91Y2gsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICogU3R5bGUgdGhlIG1vZGFsIGZvciB0aGUgc3RlcFxuICAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCB0byBzdHlsZSB0aGUgb3BlbmluZyBmb3JcbiAgKiBAcHJpdmF0ZVxuICAqL1xuXG5cbiAgZnVuY3Rpb24gX3N0eWxlRm9yU3RlcChzdGVwKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcsXG4gICAgICBtb2RhbE92ZXJsYXlPcGVuaW5nUmFkaXVzXG4gICAgfSA9IHN0ZXAub3B0aW9ucztcblxuICAgIGNvbnN0IHNjcm9sbFBhcmVudCA9IF9nZXRTY3JvbGxQYXJlbnQoc3RlcC50YXJnZXQpOyAvLyBTZXR1cCByZWN1cnNpdmUgZnVuY3Rpb24gdG8gY2FsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gdXBkYXRlIHRoZSBtb2RhbCBvcGVuaW5nIHBvc2l0aW9uXG5cblxuICAgIGNvbnN0IHJhZkxvb3AgPSAoKSA9PiB7XG4gICAgICByYWZJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHBvc2l0aW9uTW9kYWwobW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcsIG1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXMsIHNjcm9sbFBhcmVudCwgc3RlcC50YXJnZXQpO1xuICAgICAgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmTG9vcCk7XG4gICAgfTtcblxuICAgIHJhZkxvb3AoKTtcblxuICAgIF9hZGRTdGVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN2Z19iaW5kaW5nKCQkdmFsdWUpIHtcbiAgICBiaW5kaW5nX2NhbGxiYWNrc1skJHZhbHVlID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIl0oKCkgPT4ge1xuICAgICAgZWxlbWVudCA9ICQkdmFsdWU7XG4gICAgICAkJGludmFsaWRhdGUoMCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJlbGVtZW50XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQgPSAkJHByb3BzLmVsZW1lbnQpO1xuICAgIGlmIChcIm9wZW5pbmdQcm9wZXJ0aWVzXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDQsIG9wZW5pbmdQcm9wZXJ0aWVzID0gJCRwcm9wcy5vcGVuaW5nUHJvcGVydGllcyk7XG4gIH07XG5cbiAgJCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoJCRzZWxmLiQkLmRpcnR5ICZcbiAgICAvKm9wZW5pbmdQcm9wZXJ0aWVzKi9cbiAgICAxNikge1xuICAgICAgJCRpbnZhbGlkYXRlKDIsIHBhdGhEZWZpbml0aW9uID0gbWFrZU92ZXJsYXlQYXRoKG9wZW5pbmdQcm9wZXJ0aWVzKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbZWxlbWVudCwgbW9kYWxJc1Zpc2libGUsIHBhdGhEZWZpbml0aW9uLCBfcHJldmVudE1vZGFsT3ZlcmxheVRvdWNoLCBvcGVuaW5nUHJvcGVydGllcywgZ2V0RWxlbWVudCwgY2xvc2VNb2RhbE9wZW5pbmcsIGhpZGUsIHBvc2l0aW9uTW9kYWwsIHNldHVwRm9yU3RlcCwgc2hvdywgc3ZnX2JpbmRpbmddO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9tb2RhbCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGVsZW1lbnQ6IDAsXG4gICAgICBvcGVuaW5nUHJvcGVydGllczogNCxcbiAgICAgIGdldEVsZW1lbnQ6IDUsXG4gICAgICBjbG9zZU1vZGFsT3BlbmluZzogNixcbiAgICAgIGhpZGU6IDcsXG4gICAgICBwb3NpdGlvbk1vZGFsOiA4LFxuICAgICAgc2V0dXBGb3JTdGVwOiA5LFxuICAgICAgc2hvdzogMTBcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFs1XTtcbiAgfVxuXG4gIGdldCBjbG9zZU1vZGFsT3BlbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbNl07XG4gIH1cblxuICBnZXQgaGlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbN107XG4gIH1cblxuICBnZXQgcG9zaXRpb25Nb2RhbCgpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbOF07XG4gIH1cblxuICBnZXQgc2V0dXBGb3JTdGVwKCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFs5XTtcbiAgfVxuXG4gIGdldCBzaG93KCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFsxMF07XG4gIH1cblxufVxuXG5jb25zdCBTaGVwaGVyZCA9IG5ldyBFdmVudGVkKCk7XG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgc2l0ZSB0b3VyXG4gKiBAZXh0ZW5kcyB7RXZlbnRlZH1cbiAqL1xuXG5jbGFzcyBUb3VyIGV4dGVuZHMgRXZlbnRlZCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHRvdXJcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNvbmZpcm1DYW5jZWwgSWYgdHJ1ZSwgd2lsbCBpc3N1ZSBhIGB3aW5kb3cuY29uZmlybWAgYmVmb3JlIGNhbmNlbGxpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY29uZmlybUNhbmNlbE1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgY29uZmlybSBkaWFsb2dcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2xhc3NQcmVmaXggVGhlIHByZWZpeCB0byBhZGQgdG8gdGhlIGBzaGVwaGVyZC1lbmFibGVkYCBhbmQgYHNoZXBoZXJkLXRhcmdldGAgY2xhc3MgbmFtZXMgYXMgd2VsbCBhcyB0aGUgYGRhdGEtc2hlcGhlcmQtc3RlcC1pZGAuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmRlZmF1bHRTdGVwT3B0aW9ucyBEZWZhdWx0IG9wdGlvbnMgZm9yIFN0ZXBzICh7QGxpbmsgU3RlcCNjb25zdHJ1Y3Rvcn0pLCBjcmVhdGVkIHRocm91Z2ggYGFkZFN0ZXBgXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5leGl0T25Fc2MgRXhpdGluZyB0aGUgdG91ciB3aXRoIHRoZSBlc2NhcGUga2V5IHdpbGwgYmUgZW5hYmxlZCB1bmxlc3MgdGhpcyBpcyBleHBsaWNpdGx5XG4gICAqIHNldCB0byBmYWxzZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmtleWJvYXJkTmF2aWdhdGlvbiBOYXZpZ2F0aW5nIHRoZSB0b3VyIHZpYSBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIHdpbGwgYmUgZW5hYmxlZFxuICAgKiB1bmxlc3MgdGhpcyBpcyBleHBsaWNpdGx5IHNldCB0byBmYWxzZS5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5zdGVwc0NvbnRhaW5lciBBbiBvcHRpb25hbCBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIHN0ZXBzLlxuICAgKiBJZiBub3Qgc2V0LCB0aGUgc3RlcHMgd2lsbCBiZSBhcHBlbmRlZCB0byBgZG9jdW1lbnQuYm9keWAuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMubW9kYWxDb250YWluZXIgQW4gb3B0aW9uYWwgY29udGFpbmVyIGVsZW1lbnQgZm9yIHRoZSBtb2RhbC5cbiAgICogSWYgbm90IHNldCwgdGhlIG1vZGFsIHdpbGwgYmUgYXBwZW5kZWQgdG8gYGRvY3VtZW50LmJvZHlgLlxuICAgKiBAcGFyYW0ge29iamVjdFtdIHwgU3RlcFtdfSBvcHRpb25zLnN0ZXBzIEFuIGFycmF5IG9mIHN0ZXAgb3B0aW9ucyBvYmplY3RzIG9yIFN0ZXAgaW5zdGFuY2VzIHRvIGluaXRpYWxpemUgdGhlIHRvdXIgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50b3VyTmFtZSBBbiBvcHRpb25hbCBcIm5hbWVcIiBmb3IgdGhlIHRvdXIuIFRoaXMgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgdGhlIHRvdXInc1xuICAgKiBkeW5hbWljYWxseSBnZW5lcmF0ZWQgYGlkYCBwcm9wZXJ0eSAtLSB3aGljaCBpcyBhbHNvIHNldCBvbiB0aGUgYGJvZHlgIGVsZW1lbnQgYXMgdGhlIGBkYXRhLXNoZXBoZXJkLWFjdGl2ZS10b3VyYCBhdHRyaWJ1dGVcbiAgICogd2hlbmV2ZXIgdGhlIHRvdXIgYmVjb21lcyBhY3RpdmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VNb2RhbE92ZXJsYXkgV2hldGhlciBvciBub3Qgc3RlcHMgc2hvdWxkIGJlIHBsYWNlZCBhYm92ZSBhIGRhcmtlbmVkXG4gICAqIG1vZGFsIG92ZXJsYXkuIElmIHRydWUsIHRoZSBvdmVybGF5IHdpbGwgY3JlYXRlIGFuIG9wZW5pbmcgYXJvdW5kIHRoZSB0YXJnZXQgZWxlbWVudCBzbyB0aGF0IGl0XG4gICAqIGNhbiByZW1haW4gaW50ZXJhY3RpdmVcbiAgICogQHJldHVybnMge1RvdXJ9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICBhdXRvQmluZCh0aGlzKTtcbiAgICBjb25zdCBkZWZhdWx0VG91ck9wdGlvbnMgPSB7XG4gICAgICBleGl0T25Fc2M6IHRydWUsXG4gICAgICBrZXlib2FyZE5hdmlnYXRpb246IHRydWVcbiAgICB9O1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRUb3VyT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc1ByZWZpeCA9IG5vcm1hbGl6ZVByZWZpeCh0aGlzLm9wdGlvbnMuY2xhc3NQcmVmaXgpO1xuICAgIHRoaXMuc3RlcHMgPSBbXTtcbiAgICB0aGlzLmFkZFN0ZXBzKHRoaXMub3B0aW9ucy5zdGVwcyk7IC8vIFBhc3MgdGhlc2UgZXZlbnRzIG9udG8gdGhlIGdsb2JhbCBTaGVwaGVyZCBvYmplY3RcblxuICAgIGNvbnN0IGV2ZW50cyA9IFsnYWN0aXZlJywgJ2NhbmNlbCcsICdjb21wbGV0ZScsICdpbmFjdGl2ZScsICdzaG93JywgJ3N0YXJ0J107XG4gICAgZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAoZSA9PiB7XG4gICAgICAgIHRoaXMub24oZSwgb3B0cyA9PiB7XG4gICAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgICAgb3B0cy50b3VyID0gdGhpcztcbiAgICAgICAgICBTaGVwaGVyZC50cmlnZ2VyKGUsIG9wdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3NldFRvdXJJRCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgc3RlcCB0byB0aGUgdG91clxuICAgKiBAcGFyYW0ge09iamVjdHxTdGVwfSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIHN0ZXAgb3B0aW9ucyBvciBhIFN0ZXAgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBvcHRpb25hbCBpbmRleCB0byBpbnNlcnQgdGhlIHN0ZXAgYXQuIElmIHVuZGVmaW5lZCwgdGhlIHN0ZXBcbiAgICogaXMgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAqIEByZXR1cm4ge1N0ZXB9IFRoZSBuZXdseSBhZGRlZCBzdGVwXG4gICAqL1xuXG5cbiAgYWRkU3RlcChvcHRpb25zLCBpbmRleCkge1xuICAgIGxldCBzdGVwID0gb3B0aW9ucztcblxuICAgIGlmICghKHN0ZXAgaW5zdGFuY2VvZiBTdGVwKSkge1xuICAgICAgc3RlcCA9IG5ldyBTdGVwKHRoaXMsIHN0ZXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwLnRvdXIgPSB0aGlzO1xuICAgIH1cblxuICAgIGlmICghaXNVbmRlZmluZWQoaW5kZXgpKSB7XG4gICAgICB0aGlzLnN0ZXBzLnNwbGljZShpbmRleCwgMCwgc3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RlcHMucHVzaChzdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIHN0ZXBzIHRvIHRoZSB0b3VyXG4gICAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0PiB8IEFycmF5PFN0ZXA+fSBzdGVwcyBUaGUgc3RlcHMgdG8gYWRkIHRvIHRoZSB0b3VyXG4gICAqL1xuXG5cbiAgYWRkU3RlcHMoc3RlcHMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGVwcykpIHtcbiAgICAgIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIHRoaXMuYWRkU3RlcChzdGVwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBHbyB0byB0aGUgcHJldmlvdXMgc3RlcCBpbiB0aGUgdG91clxuICAgKi9cblxuXG4gIGJhY2soKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0ZXBzLmluZGV4T2YodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgdGhpcy5zaG93KGluZGV4IC0gMSwgZmFsc2UpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxscyBfZG9uZSgpIHRyaWdnZXJpbmcgdGhlICdjYW5jZWwnIGV2ZW50XG4gICAqIElmIGBjb25maXJtQ2FuY2VsYCBpcyB0cnVlLCB3aWxsIHNob3cgYSB3aW5kb3cuY29uZmlybSBiZWZvcmUgY2FuY2VsbGluZ1xuICAgKi9cblxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpcm1DYW5jZWwpIHtcbiAgICAgIGNvbnN0IGNhbmNlbE1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuY29uZmlybUNhbmNlbE1lc3NhZ2UgfHwgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzdG9wIHRoZSB0b3VyPyc7XG4gICAgICBjb25zdCBzdG9wVG91ciA9IHdpbmRvdy5jb25maXJtKGNhbmNlbE1lc3NhZ2UpO1xuXG4gICAgICBpZiAoc3RvcFRvdXIpIHtcbiAgICAgICAgdGhpcy5fZG9uZSgnY2FuY2VsJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RvbmUoJ2NhbmNlbCcpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbHMgX2RvbmUoKSB0cmlnZ2VyaW5nIHRoZSBgY29tcGxldGVgIGV2ZW50XG4gICAqL1xuXG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5fZG9uZSgnY29tcGxldGUnKTtcbiAgfVxuICAvKipcbiAgICogR2V0cyB0aGUgc3RlcCBmcm9tIGEgZ2l2ZW4gaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHN0ZXAgdG8gcmV0cmlldmVcbiAgICogQHJldHVybiB7U3RlcH0gVGhlIHN0ZXAgY29ycmVzcG9uZGluZyB0byB0aGUgYGlkYFxuICAgKi9cblxuXG4gIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuaWQgPT09IGlkO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICogQHJldHVybnMge1N0ZXB8bnVsbH1cbiAgICovXG5cblxuICBnZXRDdXJyZW50U3RlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RlcDtcbiAgfVxuICAvKipcbiAgICogSGlkZSB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuXG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTtcblxuICAgIGlmIChjdXJyZW50U3RlcCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRTdGVwLmhpZGUoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSB0b3VyIGlzIGFjdGl2ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiBTaGVwaGVyZC5hY3RpdmVUb3VyID09PSB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBHbyB0byB0aGUgbmV4dCBzdGVwIGluIHRoZSB0b3VyXG4gICAqIElmIHdlIGFyZSBhdCB0aGUgZW5kLCBjYWxsIGBjb21wbGV0ZWBcbiAgICovXG5cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuY3VycmVudFN0ZXApO1xuXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KGluZGV4ICsgMSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzdGVwIGZyb20gdGhlIHRvdXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGlkIGZvciB0aGUgc3RlcCB0byByZW1vdmVcbiAgICovXG5cblxuICByZW1vdmVTdGVwKG5hbWUpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpOyAvLyBGaW5kIHRoZSBzdGVwLCBkZXN0cm95IGl0IGFuZCByZW1vdmUgaXQgZnJvbSB0aGlzLnN0ZXBzXG5cbiAgICB0aGlzLnN0ZXBzLnNvbWUoKHN0ZXAsIGkpID0+IHtcbiAgICAgIGlmIChzdGVwLmlkID09PSBuYW1lKSB7XG4gICAgICAgIGlmIChzdGVwLmlzT3BlbigpKSB7XG4gICAgICAgICAgc3RlcC5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGVwLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5pZCA9PT0gbmFtZSkge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHVuZGVmaW5lZDsgLy8gSWYgd2UgaGF2ZSBzdGVwcyBsZWZ0LCBzaG93IHRoZSBmaXJzdCBvbmUsIG90aGVyd2lzZSBqdXN0IGNhbmNlbCB0aGUgdG91clxuXG4gICAgICB0aGlzLnN0ZXBzLmxlbmd0aCA/IHRoaXMuc2hvdygwKSA6IHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTaG93IGEgc3BlY2lmaWMgc3RlcCBpbiB0aGUgdG91clxuICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleSBUaGUga2V5IHRvIGxvb2sgdXAgdGhlIHN0ZXAgYnlcbiAgICogQHBhcmFtIHtCb29sZWFufSBmb3J3YXJkIFRydWUgaWYgd2UgYXJlIGdvaW5nIGZvcndhcmQsIGZhbHNlIGlmIGJhY2t3YXJkXG4gICAqL1xuXG5cbiAgc2hvdyhrZXkgPSAwLCBmb3J3YXJkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHN0ZXAgPSBpc1N0cmluZyhrZXkpID8gdGhpcy5nZXRCeUlkKGtleSkgOiB0aGlzLnN0ZXBzW2tleV07XG5cbiAgICBpZiAoc3RlcCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdGVCZWZvcmVTaG93KCk7XG5cbiAgICAgIGNvbnN0IHNob3VsZFNraXBTdGVwID0gaXNGdW5jdGlvbihzdGVwLm9wdGlvbnMuc2hvd09uKSAmJiAhc3RlcC5vcHRpb25zLnNob3dPbigpOyAvLyBJZiBgc2hvd09uYCByZXR1cm5zIGZhbHNlLCB3ZSB3YW50IHRvIHNraXAgdGhlIHN0ZXAsIG90aGVyd2lzZSwgc2hvdyB0aGUgc3RlcCBsaWtlIG5vcm1hbFxuXG4gICAgICBpZiAoc2hvdWxkU2tpcFN0ZXApIHtcbiAgICAgICAgdGhpcy5fc2tpcFN0ZXAoc3RlcCwgZm9yd2FyZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Nob3cnLCB7XG4gICAgICAgICAgc3RlcCxcbiAgICAgICAgICBwcmV2aW91czogdGhpcy5jdXJyZW50U3RlcFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXA7XG4gICAgICAgIHN0ZXAuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogU3RhcnQgdGhlIHRvdXJcbiAgICovXG5cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnRyaWdnZXIoJ3N0YXJ0Jyk7IC8vIFNhdmUgdGhlIGZvY3VzZWQgZWxlbWVudCBiZWZvcmUgdGhlIHRvdXIgb3BlbnNcblxuICAgIHRoaXMuZm9jdXNlZEVsQmVmb3JlT3BlbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IG51bGw7XG5cbiAgICB0aGlzLl9zZXR1cE1vZGFsKCk7XG5cbiAgICB0aGlzLl9zZXR1cEFjdGl2ZVRvdXIoKTtcblxuICAgIHRoaXMubmV4dCgpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbmV2ZXIgdGhlIHRvdXIgaXMgY2FuY2VsbGVkIG9yIGNvbXBsZXRlZCwgYmFzaWNhbGx5IGFueXRpbWUgd2UgZXhpdCB0aGUgdG91clxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgdG8gdHJpZ2dlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9kb25lKGV2ZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0ZXBzLmluZGV4T2YodGhpcy5jdXJyZW50U3RlcCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnN0ZXBzKSkge1xuICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIGNsZWFudXBTdGVwcyh0aGlzKTtcbiAgICB0aGlzLnRyaWdnZXIoZXZlbnQsIHtcbiAgICAgIGluZGV4XG4gICAgfSk7XG4gICAgU2hlcGhlcmQuYWN0aXZlVG91ciA9IG51bGw7XG4gICAgdGhpcy50cmlnZ2VyKCdpbmFjdGl2ZScsIHtcbiAgICAgIHRvdXI6IHRoaXNcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm1vZGFsKSB7XG4gICAgICB0aGlzLm1vZGFsLmhpZGUoKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQgPT09ICdjYW5jZWwnIHx8IGV2ZW50ID09PSAnY29tcGxldGUnKSB7XG4gICAgICBpZiAodGhpcy5tb2RhbCkge1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVwaGVyZC1tb2RhbC1vdmVybGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChtb2RhbENvbnRhaW5lcikge1xuICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBGb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgdG91ciBzdGFydGVkXG5cblxuICAgIGlmIChpc0hUTUxFbGVtZW50JDEodGhpcy5mb2N1c2VkRWxCZWZvcmVPcGVuKSkge1xuICAgICAgdGhpcy5mb2N1c2VkRWxCZWZvcmVPcGVuLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgdG91ciBcImFjdGl2ZVwiXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3NldHVwQWN0aXZlVG91cigpIHtcbiAgICB0aGlzLnRyaWdnZXIoJ2FjdGl2ZScsIHtcbiAgICAgIHRvdXI6IHRoaXNcbiAgICB9KTtcbiAgICBTaGVwaGVyZC5hY3RpdmVUb3VyID0gdGhpcztcbiAgfVxuICAvKipcbiAgICogX3NldHVwTW9kYWwgY3JlYXRlIHRoZSBtb2RhbCBjb250YWluZXIgYW5kIGluc3RhbmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3NldHVwTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbCA9IG5ldyBTaGVwaGVyZF9tb2RhbCh7XG4gICAgICB0YXJnZXQ6IHRoaXMub3B0aW9ucy5tb2RhbENvbnRhaW5lciB8fCBkb2N1bWVudC5ib2R5LFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY2xhc3NQcmVmaXg6IHRoaXMuY2xhc3NQcmVmaXgsXG4gICAgICAgIHN0eWxlczogdGhpcy5zdHlsZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYHNob3dPbmAgZXZhbHVhdGVzIHRvIGZhbHNlLCB0byBza2lwIHRoZSBzdGVwXG4gICAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCB0byBza2lwXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yd2FyZCBUcnVlIGlmIHdlIGFyZSBnb2luZyBmb3J3YXJkLCBmYWxzZSBpZiBiYWNrd2FyZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9za2lwU3RlcChzdGVwLCBmb3J3YXJkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0ZXBzLmluZGV4T2Yoc3RlcCk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gZm9yd2FyZCA/IGluZGV4ICsgMSA6IGluZGV4IC0gMTtcbiAgICB0aGlzLnNob3cobmV4dEluZGV4LCBmb3J3YXJkKTtcbiAgfVxuICAvKipcbiAgICogQmVmb3JlIHNob3dpbmcsIGhpZGUgdGhlIGN1cnJlbnQgc3RlcCBhbmQgaWYgdGhlIHRvdXIgaXMgbm90XG4gICAqIGFscmVhZHkgYWN0aXZlLCBjYWxsIGB0aGlzLl9zZXR1cEFjdGl2ZVRvdXJgLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF91cGRhdGVTdGF0ZUJlZm9yZVNob3coKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXAuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9zZXR1cEFjdGl2ZVRvdXIoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhpcy5pZCB0byBgJHt0b3VyTmFtZX0tLSR7dXVpZH1gXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3NldFRvdXJJRCgpIHtcbiAgICBjb25zdCB0b3VyTmFtZSA9IHRoaXMub3B0aW9ucy50b3VyTmFtZSB8fCAndG91cic7XG4gICAgdGhpcy5pZCA9IGAke3RvdXJOYW1lfS0tJHt1dWlkKCl9YDtcbiAgfVxuXG59XG5cbk9iamVjdC5hc3NpZ24oU2hlcGhlcmQsIHtcbiAgVG91cixcbiAgU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNoZXBoZXJkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hlcGhlcmQuZXNtLmpzLm1hcFxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==