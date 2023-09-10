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


    public function index(): AnonymousResourceCollection
    {
        return BookHasCategoryResource::collection(Book::with('categories')->get());
    }

    /**
     * @param $id
     * @return BookHasCategoryResource
     */
    public function show($id): BookHasCategoryResource
    {
        return new BookHasCategoryResource(Book::with('categories')->findOrFail($id));
    }



    public function create()
    {
        return Book::create([
                'title' => 'book name',
                'author' => 'author name',
                'company' => 'company name',
                'description' => 'book description',
                'age' => 1969,
                'image' => 'image path',
                'price' => 5700,
            ]);
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
