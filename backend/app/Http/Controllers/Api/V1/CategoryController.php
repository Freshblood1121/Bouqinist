<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Category;
use App\Models\User;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::all()->toJson();
        dd($categories);
    }

    public function oneCategory($id) {
        $category = Book::query()
            ->where('category_id', $id)
            ->get();

        dd($category);
    }

}
