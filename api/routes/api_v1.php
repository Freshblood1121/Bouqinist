<?php

use App\Http\Controllers\Api\Auth\EmailVerificationController;
use App\Http\Controllers\Api\V1\BookController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\Auth\AuthController;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

//Публичные маршруты
Route::group(['middleware' => ['api']], function (){
    //Получить все книги
    Route::get('/books', [BookController::class, 'all']);

    //Получить книгу по id
    Route::get('/books/{book_id}', [BookController::class, 'index']);

    //Получить все категории
    Route::get('/categories', [CategoryController::class, 'all']);

    //Получить категорию по id
    Route::get('/categories/{category_id}', [CategoryController::class, 'index']);

    //Получить категории принадлежащие книгам(BOOK->CATEGORY)
    Route::get('/books/has/{book_id}', [BookController::class, 'hasCategory']);

    //Получить книги принадлежащие категориям(CATEGORY->BOOK)
    Route::get('/categories/has/{category_id}', [CategoryController::class, 'hasBook']);
});

    //Регистрация
    //http://bouqinist:80/api/v1/register
    Route::post('/register', [AuthController::class, 'createUser']);

    //Авторизация
    //http://bouqinist:80/api/v1/login
    Route::post('/login', [AuthController::class, 'login']);

//Защищёные маршруты
Route::middleware(['auth:sanctum'])->group(function() {

    //Данные о себе
    Route::get('/me', [AuthController::class, 'me']);

    //Обновление информации о себе
    Route::put('/me/update', [AuthController::class, 'updateUser']);

    //Верификация почты
    Route::post('email-verification', [EmailVerificationController::class, 'email_verification'])
        ->middleware('throttle:5,1');

    //Повторная отправка письма на почту
    Route::get('email-verification', [EmailVerificationController::class, 'sendEmailVerification'])
        ->middleware('throttle:5,1');
});

//@TODO Сделать проверку принадлежности токена к пользователю.
//Middleware/VerifyTokenMiddleware.php
//Route::middleware(['auth:sanctum', 'VerifyToken'])->group(function() {

