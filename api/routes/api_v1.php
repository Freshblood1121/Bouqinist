<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\EmailVerificationController;
use App\Http\Controllers\Api\V1\BookController;
use App\Http\Controllers\Api\V1\CategoryController;
use Illuminate\Support\Facades\Route;

//Публичные маршруты
Route::group(['middleware' => ['api']], function () {

    Route::get('/books/', [BookController::class, 'index']);

    //Получить книгу по id
    Route::get('/books/show/{book_id}', [BookController::class, 'show']);

    //Создать книгу
    //Надо передавать все ключи/поля таблицы books
    Route::post('/books/create/', [BookController::class, 'create']);

    //Изменить некоторые поля книги
    Route::put('/books/update/', [BookController::class, 'update']);

    //Удалить книгу
    Route::delete('/books/delete/', [BookController::class, 'delete']);

    //Получить все категории
    Route::get('/categories/', [CategoryController::class, 'index']);

    //Получить категорию по id
    Route::get('/categories/show/{category_id}', [CategoryController::class, 'show']);

    //Получить категории принадлежащие книгам(BOOK->CATEGORY)
    Route::get('/books/has/{book_id}', [BookController::class, 'hasCategory']);

    //Получить книги принадлежащие категориям(CATEGORY->BOOK)
    Route::get('/categories/has/{category_id}', [CategoryController::class, 'hasBook']);

});

//Регистрация (http://bouqinist:80/api/v1/register)
Route::post('/register', [AuthController::class, 'register']);

//Регистрация
//http://bouqinist:80/api/v1/register
Route::post('/register', [AuthController::class, 'createUser']);

//Авторизация
//http://bouqinist:80/api/v1/login
Route::post('/login', [AuthController::class, 'login']);

//Защищёные маршруты
Route::middleware(['auth:sanctum'])->group(function () {

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

//email: geekbrains@mail.com
//password: *********

//token: "171|ByHs31S4LKRqfGJ99eUWiy0w0ogO7KwMySdoyERm7c4aee00"
