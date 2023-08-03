<?php

use App\Http\Controllers\Api\V1\IndexController;
use Illuminate\Support\Facades\Route;

Route::get('/', [IndexController::class, 'index'])
    ->name('index');

Route::get('/all', [IndexController::class, 'all'])
    ->name('all');

