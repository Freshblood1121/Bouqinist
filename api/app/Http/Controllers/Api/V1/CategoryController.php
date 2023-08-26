<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{

    /**
     * @param $id
     * @return string
     */
    public function index($id): string
    {
        return Category::find($id);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function all()
    {
        return Category::paginate(15);
    }

    public function hasBook($categoryId)
    {
        $category = Category::find($categoryId);
        return $category->books;
    }

}
