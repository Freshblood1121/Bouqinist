<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookCreateRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookHasCategoryResource;

use App\Models\Book;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BookController extends Controller
{
//$book = [
//'title' => 'book name 1',
//'author' => 'author name 1 ',
//'company' => 'company name 1',
//'description' => 'book description 1',
//'age' => 1969,
//'image' => 'image path 1',
//'price' => 5700,
//];

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


    public function create(BookCreateRequest $request)
    {
        $book = $request->validated();

        $book = Book::create($book);
        return redirect("/api/v1/books/show/{$book->id}");
    }

    public function update(BookUpdateRequest $request)
    {
        $book = Book::update($request->validated());

        $book = Book::update($book);
        return redirect("/api/v1/books/show/{$book->id}");
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
