$(function () {
  if (!document.querySelector('#mollie-payment-form')) {
    return;
  }

  const steps = [
    {
      id: 'step-start',
      text: 'Thank you for installing Mollie for payment services. This guide will take you through the configuration setup. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit nibh quis urna congue, et interdum nulla rutrum. Cras at justo ornare.',
      title: 'Let me help you',
      stepClass: 'step-2',
      btnBackText:'Skip this, I know how it works',
      btnNextText: 'Start onboarding assistant <i class="icon angle right"></i>',
      scrollToTarget: '#sylius_payment_method_gatewayConfig_config_api_key_test',
      btnCollapseClass: 'd-none',
    },
    {
      text: 'TEST will be the default in the plugin. You only need to do the configuration once to have TEST + LIVE environments available. Try easily togging between the two.',
      stepClass: 'right-bottom',
      classActive: 'api-settings',
      attachToElement: '.onboardingWizard-environment',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      btnCollapseClass: 'btn-collapse',
    },
    {
      title: 'Connect to your Mollie account',
      text: 'To sync the Mollie plugin to your webshop you\'ll need Mollie API keys and Profile ID.',
      stepClass: 'step-4',
      classActive: 'api-settings',
      btnBackText:'Login to my account',
      btnNextText: 'Create a Mollie account <i class="icon angle right"></i>',
      btnCollapseClass: 'btn-collapse d-none',
      urlMollie: 'https://www.mollie.com/dashboard',
    },
    {
      text: 'Fill in your correct details and click "TEST API Key" this will return a successful or failed result for both the LIVE and TEST environments.\n' +
        '\n' +
        'Learn about the difference between: Orders API or the Payments API',
      stepClass: 'step-5 right-bottom',
      classActive: 'api-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_config_api_key_test"] + *',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'Webshop checkout Configurations, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit et urna gravida efficitur.',
      stepClass: 'step-6 right-bottom',
      classActive: 'store-settings',
      btnBackText: 'Go back',
      btnNextText: 'Next',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'Enabling components, allows you to add the fields needed for credit card holder data to your own\n' +
        'checkout. If you select NO, users will be redirected to the Mollie\n' +
        'checkout page',
      stepClass: 'right-bottom',
      classActive: 'store-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '.onboardingWizard-mollieComponents',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'Enabling single click payments remembers your consumer\'s payment preferences in order to expedite follow-up payments. Your consumer does not have to perform any additional actions to enjoy quick and easy payments.',
      stepClass: 'step-7 right-bottom',
      classActive: 'store-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '.onboardingWizard-singleClick',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'We\'ll go through setup with the Payments API first and then highlight differences if you choose to use the Orders API',
      stepClass: 'step-8 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next',
      btnCollapseClass: 'btn-collapse',
    },
    {
      id: 'paymentTitle',
      text: 'You can enter a custom title here - it will be displayed on your checkout page',
      stepClass: 'step-9 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_name',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'Choose Payments API (Payments API can not be used for methods such as Klarna - we\'ll set-up that up later) Learn about the difference  between Orders APIor the Payments API',
      stepClass: 'step-10 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType"] + .dropdown',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provide in the text below',
      stepClass: 'step-11 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next',
      btnCollapseClass: 'btn-collapse',
    },
    {
      id: 'restrictPayment',
      text: 'Restrict/ allow payment per individual countries.',
      stepClass: 'step-12 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_country_restriction"] +' +
        ' .dropdown',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'In case you have fees that you are passing on to the consumer, you can add them here',
      stepClass: 'step-13 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentSurchargeFee_type"] +' +
        ' .dropdown',
      btnCollapseClass: 'btn-collapse',
    },
    {
      text: 'Upload a custom image for the payment method icon, this will be shown in the checkout page',
      stepClass: 'step-14 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_customizeMethodImage_file',
      btnCollapseClass: 'btn-collapse',
    },
    {
      title: '<i class="icon check circle"></i> You\'re all set!',
      stepClass: 'step-15',
      classActive: 'payment-settings',
      text: 'You\'re all done, you can now attempt a consumer order or your website',
      btnBackClass: 'd-none',
      btnNextClass: 'mr-auto',
      btnNextText: 'Start using Mollie plugin <i class="icon angle right"></i>',
      btnCollapseClass: 'btn-collapse d-none',
    },

  ];

  const stepQuitConfirmation = (previousStepIndex) => {
    return {
      id: 'step-quitConfirmation',
      title: 'Are you sure you want to quit ?',
      text: 'You\'re all done, you can now attempt a consumer order or your website',
      buttons: [
        {
          text: 'Quit the onboarding assistant',
          action: () => {
            tour.complete();
          },
          secondary: true,
          classes: 'js-onboarding-quit',
        },
        {
          text: 'Continue onboarding <i class="icon angle right"></i>',
          action: () => {
            tour.show(previousStepIndex, true);
          },
          classes: 'js-onboarding-continue',
        },
      ],
    }
  }

  const navbar = document.querySelector('.onboardingWizard-nav');

  const navbarVisibilityHandler = () => {
    navbar.classList.toggle('d-none', !tour.isActive());
    navbar.setAttribute('aria-hidden', tour.isActive());
  }

  const navbarProgressHandler = (currentStep) => {
    const navbarItems = [...navbar.querySelectorAll('.onboardingWizard-nav-item')];

    navbarItems.some((navItem, index) => {
      const { navigationStep } = navItem.dataset;

      if ([...currentStep.classList].includes(navigationStep)) {
        navItem.classList.add('active');

        navbarItems.forEach(item => {
          item.classList.remove('last')
        })

        $(navItem).last().addClass('last')

        return true
      }

      return false;
    });
  }

  const modalCollapseHandler = (tour) => {
    const currentStep = tour.currentStep.el;
    const buttonCollapse = currentStep.querySelector('.btn-collapse');
    const isCollapsed = [...currentStep.classList].includes('collapsed');
    const paragraph = document.createElement('span');

    paragraph.classList.add('btn-text-open');
    paragraph.textContent = 'Open';

    if (!buttonCollapse) {
      return;
    }

    const textOpen = buttonCollapse.querySelector('.btn-text-open ')

    !isCollapsed ? buttonCollapse.appendChild(paragraph) : buttonCollapse.removeChild(textOpen)

    currentStep.classList.toggle('collapsed', !isCollapsed);
    currentStep.setAttribute('aria-hidden', !isCollapsed);
  }

  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    confirmCancel: false,
    defaultStepOptions: {
      class: 'onboardingWizard-popup',
      arrow: false,
      cancelIcon: {
        enabled: true,
      },
      scrollTo: { behavior: 'smooth', block: 'center' },
      modalOverlayOpeningRadius: 4,
    },
  });

  ['inactive', 'show'].forEach(event => tour.on(event, navbarVisibilityHandler));

  steps.forEach((step, index) => {
    tour.addStep({
      id: step.id,
      title: step.title ? step.title : null,
      text: step.text,
      classes: step.stepClass,
      attachTo: {
        ...(step.attachToElement && { element: step.attachToElement }),
        on: 'top-start'
      },
      ...(step.classActive && { highlightClass: step.classActive }),
      when: {
        show() {
          const currentStep = this.tour.getCurrentStep().target;

          if (!currentStep) {
            return;
          }

          navbarProgressHandler(currentStep);
        },
        cancel() {
          const previousStepIndex = tour.steps.indexOf(tour.getCurrentStep());
          tour.complete();
          tour.addStep(stepQuitConfirmation(previousStepIndex));

          tour.show('step-quitConfirmation', true);

          const buttonClose = tour.currentStep.el.querySelector('.shepherd-cancel-icon');
          buttonClose.classList.add('d-none');
        }
      },
      buttons: [
        {
          text: '<i class="arrow down icon"></i>',
          action: () => modalCollapseHandler(tour),
          ...(step.btnCollapseClass && { classes: step.btnCollapseClass }),
        },
        {
          text: step.btnBackText,
          action() {
            if (index === 0) {
              tour.complete();
            } else {
              if(step.urlMollie) {
                window.open(`${step.urlMollie}/signin`, '_blank');
                tour.next();
                return
              }

              tour.back();
            }
          },
          secondary: true,
          ...(step.btnBackClass && { classes: step.btnBackClass }),
        },
        {
          text: step.btnNextText,
          action() {
            if(index === steps.length - 1) {
              tour.complete();
            } else {
              if(step.urlMollie) {
                window.open(`${step.urlMollie}/signup`, '_blank');
                tour.next();
                return
              }
              tour.next();
            }
          },
          ...(step.btnNextClass && { classes: step.btnNextClass }),
        },
      ],
    });
  });

  tour.start();

  function mountTourOrderApi () {
    const select = document.querySelector(
      '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType ~ .menu'
    )
    const orderApiOption = select.querySelector('[data-value="ORDER_API"]');

    if (!orderApiOption) {
      return;
    }

    const orderApiOptionSelected =
      $('[for=sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType] + .dropdown')
        .find(':selected')
        .val() === 'ORDER_API'

    select.addEventListener('click', (event) => {
      if (!orderApiOptionSelected) {
        event.target.click();
      }
    });

    orderApiOption.addEventListener('click', () => {
      tour.addStep({
        id: 'orderApi-1',
        classActive: 'payment-settings',
        classes: 'right-bottom',
        text: 'Select Orders API - this is Mollie\n' +
          'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.',
        btnBackText:'Go back',
        btnNextText: 'Next',
        attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType"] + .dropdown',
        when: {
          show() {
            const currentStep = this.tour.getCurrentStep().target;

            if (!currentStep) {
              return;
            }

            navbarProgressHandler(currentStep);
          },
        },
        buttons: [
          {
            text: '<i class="arrow down icon"></i>',
            action() {
              const currentStep = this.currentStep.el;
              const buttonCollapse = currentStep.querySelector('.btn-collapse');
              const isCollapsed = [...currentStep.classList].includes('collapsed');

              if (!buttonCollapse) {
                return;
              }

              const paragraph = document.createElement('span');
              paragraph.classList.add('btn-text-open');
              paragraph.textContent = 'Open';


              const textOpen = buttonCollapse.querySelector('.btn-text-open ')

              !isCollapsed ? buttonCollapse.appendChild(paragraph) : buttonCollapse.removeChild(textOpen)

              currentStep.classList.toggle('collapsed', !isCollapsed);
              currentStep.setAttribute('aria-hidden', !isCollapsed);
            },
            classes: 'btn-collapse',
          },
          {
            text: 'Go back',
            action: () => tour.show('paymentTitle', true),
            secondary: true,
          },
          {
            text: 'Next',
            action: () => {
              tour.show('restrictPayment', true)
            },
          },
        ],
      });
      tour.show('orderApi-1', true);
    })
  }

  mountTourOrderApi();
})
