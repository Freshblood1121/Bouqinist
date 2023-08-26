<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use \Illuminate\Contracts\Pagination\LengthAwarePaginator;

class BookController extends Controller
{

    /**
     * @param $id
     * @return string
     */
    public function index($id): Collection
    {
        return Book::find($id);
    }

    public function all(): LengthAwarePaginator
    {
        return Book::paginate(15);
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
