<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryHasBookResource;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return CategoryResource::collection(Category::with('books')->get());
    }


    /**
     * @param $id
     * @return CategoryHasBookResource
     */
    public function show($id): CategoryHasBookResource
    {
        return new CategoryHasBookResource(Category::with('books')->findOrFail($id));
    }

    public function hasBook($categoryId)
    {
//        $category = Category::find($categoryId);
//        return $category->books;
    }

}
