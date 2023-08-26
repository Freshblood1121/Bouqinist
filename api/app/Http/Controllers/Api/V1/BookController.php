<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BookController extends Controller
{

    /**
     * @param $id
     * @return BookResource
     */
    public function index($id): BookResource
    {
        return new BookResource(Book::with('categories')->findOrFail($id));
    }

    public function all(): AnonymousResourceCollection
    {
        return BookResource::collection(Book::all());
//        return Book::paginate(15);
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
