<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;


class CategoryController extends Controller
{

    /**
     * @param $id
     * @return string
     */
    public function index($id): string
    {
        return Category::find($id)->toJson();
    }

    /**
     * @return string|Collection
     */
    public function all(): string | Collection
    {
        return Category::all()->toJson();
    }

    public function hasBook($categoryId)
    {
        $category = Category::find($categoryId);
        return $category->books->toJson();
    }

}
