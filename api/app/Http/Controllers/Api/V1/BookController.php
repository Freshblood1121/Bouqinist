<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookCreateRequest;
use App\Http\Requests\BookDeleteRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookHasCategoryResource;
use App\Models\Book;
use App\Models\BookHasCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BookController extends Controller
{

    public function index(): AnonymousResourceCollection
    {
        $book = Book::with('categories')
            ->latest()
            ->paginate(10);
        return BookHasCategoryResource::collection($book);
    }

    /**
     * @param $id
     * @return BookHasCategoryResource
     */
    public function show($id): BookHasCategoryResource
    {
        return new BookHasCategoryResource(Book::with('categories')->findOrFail($id));
    }

    public function create(BookCreateRequest $request): JsonResponse
    {
        $book = Book::create($request->validated());

        BookHasCategory::create([
            'category_id' => $request->categories,
            'book_id' => $book->id
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Book create!',
        ], 200);
    }


    public function update(BookUpdateRequest $request): JsonResponse
    {
        Book::find($request->id)
            ->update($request->validated());

        return response()->json([
            'status' => true,
            'message' => 'Book updated.',
        ], 200);
    }

    public function delete(BookDeleteRequest $request)
    {
        Book::find($request->id)->forceDelete();

        return response()->json([
            'status' => true,
            'message' => 'Book deleted.',
        ], 200);
    }

    public function hasCategory($bookId)
    {
        $book = Book::find($bookId);
        return $book->categories;
    }

}
