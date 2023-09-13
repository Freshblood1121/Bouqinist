<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookCreateRequest;
use App\Http\Requests\BookDeleteRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookHasCategoryResource;

use App\Models\Book;

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


    public function create(BookCreateRequest $request)
    {
        $book = Book::create($request->validated());

        return redirect("/api/v1/books/show/{$book->id}");
    }

    public function update(BookUpdateRequest $request)
    {
        $book = Book::find($request->id);
        $book->update($request->validated());

        return redirect("/api/v1/books/show/{$book->id}");
    }

    public function delete(BookDeleteRequest $request)
    {
        Book::find($request->id)->delete();
        return redirect("/api/v1/books/");
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
