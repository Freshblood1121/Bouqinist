<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
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
     * @param $id
     * @return CategoryResource
     */
    public function index($id): CategoryResource
    {
        return new CategoryResource(Category::find($id));
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function all()
    {
        return CategoryResource::collection(Category::with('books')->get());
    }

    public function create(CategoryCreateRequest $request)
    {
        $category = $request->validated();

        Category::create($category);
        return redirect('/');
    }

    public function delete(CategoryDeleteRequest $request)
    {
        Category::find($request->id)->delete();
        return redirect("/api/v1/categories/");
    }

    public function hasBook($categoryId)
    {
        $category = Category::find($categoryId);
        return $category->books;
    }

}
