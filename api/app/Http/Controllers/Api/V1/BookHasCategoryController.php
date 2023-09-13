<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookHasCategoryRequest;
use App\Http\Requests\CategoryDeleteRequest;
use App\Models\BookHasCategory;
use App\Models\Category;

class BookHasCategoryController extends Controller
{
    public function create(BookHasCategoryRequest $request)
    {

        $bookHasCategory = BookHasCategory::create($request->validated());


 //      return redirect('/api/v1/books/show/{$bookHasCategory->book_id}');
    }

    public function delete(CategoryDeleteRequest $request)
    {
        Category::find($request->id)->delete();
        return redirect("/api/v1/categories/");
    }
}
