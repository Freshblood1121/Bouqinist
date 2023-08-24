<?php

use App\Http\Controllers\Api\V1\BookController;
use App\Http\Controllers\Api\V1\CategoryController;
use Illuminate\Support\Facades\Route;

//
//Route::get('/', [IndexController::class, 'all'])
//    ->middleware('api');

//Получить все книги
Route::get('/books', [BookController::class, 'all'])
    ->middleware('api');

//Получить книгу по id
Route::get('/books/{book_id}', [BookController::class, 'index'])
    ->middleware('api');

//Получить все категории
Route::get('/categories', [CategoryController::class, 'all'])
    ->middleware('api');

//Получить категорию по id
Route::get('/categories/{category_id}', [CategoryController::class, 'index'])
    ->middleware('api');

//Получить категории принадлежащие книгам(BOOK->CATEGORY)
Route::get('/books/has/{book_id}', [BookController::class, 'hasCategory'])
    ->middleware('api');

//Получить книги принадлежащие категориям(CATEGORY->BOOK)
Route::get('/categories/has/{category_id}', [CategoryController::class, 'hasBook'])
    ->middleware('api');
