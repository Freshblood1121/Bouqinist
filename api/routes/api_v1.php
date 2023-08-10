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
| be assigned to the "api" middleware group. Make something great!
|
*/
//
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::get('/', [IndexController::class, 'index'])
    ->name('index');

Route::get('/all', [IndexController::class, 'all'])
    ->name('all');


Route::get('/categories', [CategoryController::class, 'index'])
    ->name('categories');

Route::get('/categories/{id}', [CategoryController::class, 'oneCategory'])
    ->name('oneCategory');
