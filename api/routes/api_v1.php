<?php

use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\IndexController;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "backend" middleware group. Make something great!
|
*/
//
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/', [IndexController::class, 'all'])
    ->middleware('api');

Route::get('/{id}', [IndexController::class, 'one'])
    ->middleware('api');


Route::get('/categories', [CategoryController::class, 'index'])
    ->middleware('api');

Route::get('/categories/{category_id}', [CategoryController::class, 'oneCategory'])
    ->middleware('api');
