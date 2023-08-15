<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Category;


class CategoryController extends Controller
{

    /**
     * @return string
     */
    public function index(): string
    {
        return Category::all()->toJson();
    }

    /**
     * @param $id
     * @return void
     */
    public function oneCategory($id) {
        $category = Book::query()
            ->where('category_id', $id)
            ->get()
            ->toJson();

        dd($category);
    }

}
