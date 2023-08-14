<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Category;
use App\Models\User;

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

        // public function oneCategory(09e83531-1428-3025-8c51-49f6e12503f3) {
        //        $category = CategoryHasBooks::query()
        //                       ->where('category_id', 09e83531-1428-3025-8c51-49f6e12503f3)
        //                       ->get()
        //                       ->toJson();

        dd($category);
    }

}
