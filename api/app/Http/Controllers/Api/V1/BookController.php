<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookHasCategoryResource;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BookController extends Controller
{

    /**
     * @param $id
     * @return BookHasCategoryResource
     */
    public function index($id): BookHasCategoryResource
    {
        return new BookHasCategoryResource(Book::with('categories')->findOrFail($id));
    }

    public function all()
    {
        return BookHasCategoryResource::collection(Book::with('categories')->get());
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
