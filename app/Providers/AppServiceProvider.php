<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Providers;

use Bonsai;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;
use Laravel\Telescope\TelescopeServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerEloquentFactoriesFrom(base_path('database/definitions'));

        $this->bootRelationships();
        $this->bootBonsai();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);

        if ($this->app->isLocal()) {
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Register and boot the root bonsai instance.
     *
     * @return void
     */
    protected function bootBonsai()
    {
        // Japanese maples
        // five finger leaves, red or green
        // delicate beauty

        Bonsai::plant();
    }

    /**
     * Map custom model relationship namings.
     *
     * @return void
     */
    protected function bootRelationships()
    {
        Relation::morphMap(config('fusioncms.relationships', []));
    }

    /**
     * Load Eloquent factories from a custom path.
     * 
     * @param  string  $path
     * @return void
     */
    protected function registerEloquentFactoriesFrom($path) {
        $this->app->make(Factory::class)->load($path);
    }
}
