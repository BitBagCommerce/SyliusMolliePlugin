<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\Refund;

use Sylius\RefundPlugin\Command\RefundUnits;

interface DuplicateRefundTheSameAmountCheckerInterface
{
    /** @var string */
    public const ONE_HOUR_INTERVAL = 'PT1H';

    public function check(RefundUnits $command): bool;
}
