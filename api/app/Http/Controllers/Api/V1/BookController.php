<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;

class BookController extends Controller
{
    /**
     * @param $id
     * @return string
     */
    public function index($id): string
    {
        return Book::find($id);
    }

    public function all(): Collection
    {
        return Book::all();
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
