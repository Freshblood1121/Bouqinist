<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\V1\BookController;
use App\Http\Controllers\Api\V1\CategoryController;
use Illuminate\Support\Facades\Route;


//Получить все книги
Route::middleware('api')->group(function () {
    Route::get('/books/', [BookController::class, 'index']);

//Получить книгу по id
    Route::get('/books/show/{book_id}', [BookController::class, 'show']);

//Создать книгу
    Route::put("/books/create/", [BookController::class, 'create']);

//Изменить некоторые поля книги
    Route::get('/books/update/', [BookController::class, 'update']);

//Удалить книгу
    Route::get('/books/delete/', [BookController::class, 'delete']);

//Получить все категории
    Route::get('/categories/', [CategoryController::class, 'index']);

//Получить категорию по id
    Route::get('/categories/{category_id}', [CategoryController::class, 'index']);

//Получить категории принадлежащие книгам(BOOK->CATEGORY)
    Route::get('/books/has/{book_id}', [BookController::class, 'hasCategory']);

//Получить книги принадлежащие категориям(CATEGORY->BOOK)
    Route::get('/categories/has/{category_id}', [CategoryController::class, 'hasBook']);

//Регистрация (http://bouqinist:80/api/v1/register)
    Route::post('/register', [AuthController::class, 'register']);

////Авторизация (http://bouqinist:80/api/v1/login)
//Route::post('/login', [AuthController::class, 'login'])
//    ->middleware('api');

});