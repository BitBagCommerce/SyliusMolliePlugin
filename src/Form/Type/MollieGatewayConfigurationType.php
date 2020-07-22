<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use function Clue\StreamFilter\fun;

final class MollieGatewayConfigurationType extends AbstractType
{
    /** @var RepositoryInterface */
    private $repository;

    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('environment', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.environment',
                'choices' => [
                    'bitbag_sylius_mollie_plugin.ui.api_key_choice_test' => null,
                    'bitbag_sylius_mollie_plugin.ui.api_key_choice_live' => true,
                ],
            ])
            ->add('profile_id', TextType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.profilie_id',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.profile_id.not_blank',
                        'groups' => ['sylius'],
                    ]),
                ],
            ])
            ->add('api_key_test', TextType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.api_key_test',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.api_key.not_blank',
                        'groups' => ['sylius'],
                    ]),
                    new Regex([
                        'message' => 'bitbag_sylius_mollie_plugin.api_key.invalid_test',
                        'groups' => ['sylius'],
                        'pattern' => '/^(test)_\w{0,}$/',
                    ]),
                    new Length([
                        'minMessage' => 'bitbag_sylius_mollie_plugin.api_key.min_length',
                        'groups' => ['sylius'],
                        'min' => 35,
                    ]),
                ],
            ])
            ->add('api_key_live', PasswordType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.api_key_live',
                'attr' => ['placeholder' => '*******************'],
                'constraints' => [
                    new Regex([
                        'message' => 'bitbag_sylius_mollie_plugin.api_key.invalid_live',
                        'groups' => ['sylius'],
                        'pattern' => '/^(live)_\w{0,}$/',
                    ]),
                    new Length([
                        'minMessage' => 'bitbag_sylius_mollie_plugin.api_key.min_length',
                        'groups' => ['sylius'],
                        'min' => 35,
                    ]),
                ],
            ])
            ->add('loggerLevel', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.debug_level_log',
                'choices' => Options::getDebugLevels(),
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                $data = $event->getData();

                $data['payum.http_client'] = '@bitbag_sylius_mollie_plugin.mollie_api_client';

                $event->setData($data);
            })
            ->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
                $data = $event->getData();

                if (empty($data['api_key_live'])) {
                    /** @var GatewayConfigInterface $mollieGateway */
                    $mollieGateway = $this->repository->findOneBy(['factoryName' => 'mollie']);
                    $config = $mollieGateway->getConfig();
                    $data['api_key_live'] = $config['api_key_live'];

                    $event->setData($data);
                }
            })
        ;
    }
}
