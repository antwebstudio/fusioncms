<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Logs;

interface LogRepositoryInterface
{
    public function getAll();

    public function getFiles($basename);

    public function getLogLevels();

    public function getFileName();

    public function setFile($file);
}
