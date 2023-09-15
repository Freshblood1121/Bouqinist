<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookHasCategoryRequest;
use App\Http\Requests\CategoryCreateRequest;
use App\Http\Requests\CategoryDeleteRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\CategoryResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return CategoryResource::collection(Category::with('books')->get());
    }


    /**
     * @param $id
     * @return CategoryResource
     */
    public function show($id)
    {
        return new CategoryResource(Category::find($id));
    }



    public function hasBook($categoryId)
    {
        $category = Category::find($categoryId);
        return $category->books;
    }

}
