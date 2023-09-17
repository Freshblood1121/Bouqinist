<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookCreateRequest;
use App\Http\Requests\BookDeleteRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookHasCategoryResource;
use App\Models\Book;
use App\Models\BookHasCategory;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

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

    public function create(BookCreateRequest $request): JsonResponse
    {
        $book = Book::create($request->validated());

        $category_id = $this->getCategoryIdByName($request);

        BookHasCategory::create([
            'category_id' => $category_id,
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

        if ($request->categories) {
            $category_id = $this->getCategoryIdByName($request);

            BookHasCategory::query()->update([
                'category_id' => $category_id,
            ]);
        }

        return response()->json([
            'status' => true,
            'message' => 'Book updated.',
        ], 200);
    }

    public function delete(BookDeleteRequest $request)
    {
dd(1);

//        BookHasCategory::query()
//            ->where('book_id', $request->id)
//            ->get()
//            ->first()
//            ->delete();

//        $category_id = BookHasCategory::query()
//            ->where('book_id', $request->validated())
//            ->get()
//            ->first()
//            ->id;

//       DB::select('DELETE FROM books WHERE id="fe0362ed-8722-4cfa-a5b0-9167e61a5db5" CASCADE');
////
        Book::query()->find($request->id)->delete();


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

    private function getCategoryIdByName($request) {
        return Category::query()
            ->where('title', $request->categories)->get()->first()->id;
    }
}
