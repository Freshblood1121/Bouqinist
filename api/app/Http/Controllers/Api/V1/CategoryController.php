<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;

use App\Http\Resources\CategoryHasBookResource;

use App\Models\Category;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{

    /**
     * @param $id
     * @return CategoryHasBookResource
     */
    public function index($id): CategoryHasBookResource
    {
        return new CategoryHasBookResource(Category::find($id));
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function all(): CategoryHasBookResource
    {
        return CategoryHasBookResource::collection(Category::with('books')->get()->toQuery()->paginate(20));
    }

    public function hasBook($categoryId)
    {
        $category = Category::find($categoryId);
        return $category->books;
    }

}
