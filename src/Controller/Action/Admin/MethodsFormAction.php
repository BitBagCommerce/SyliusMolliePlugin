<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use Sylius\Bundle\PaymentBundle\Form\Type\PaymentMethodType;
use Sylius\Component\Core\Model\PaymentMethod;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

final class MethodsFormAction extends AbstractController
{
    /** @var RepositoryInterface $gatewayConfigRepository */
    private $gatewayConfigRepository;

    /** @var Environment $twig */
    private $twig;

    public function __construct(RepositoryInterface $gatewayConfigRepository, Environment $twig)
    {
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->twig = $twig;
    }

    public function __invoke(Request $request): Response
    {
        $paymentCode = $request->get('paymentCode');

        /** @var PaymentMethod $paymentMethod */
        $paymentMethod = $this->gatewayConfigRepository->findOneBy([
            'code' => $paymentCode,
        ]);

        if (null === $paymentMethod) {
            return new JsonResponse(['message' => sprintf("Payment method with code %s doesn't exist", $paymentCode)]);
        }

        $form = $this->createForm(PaymentMethodType::class, $paymentMethod);

        $renderedForm = $this->twig->render(
            'bundles/SyliusAdminBundle/PaymentMethod/_mollieMethodsForm.html.twig',
            ['form' => $form->createView()]
        );

        return new JsonResponse(['form' => $renderedForm]);
    }
}
