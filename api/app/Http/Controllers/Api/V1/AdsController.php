<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\JsonResponse;


class AdsController extends Controller
{
    public function ads(): JsonResponse
    {
        $user = auth()->user();
        $books = Book::where('user_id', $user->getAuthIdentifier())->get();

        if ($books->count() > 0) {
            return response()->json([
                "message" => "Authenticated",
                "status" => "true",
                "book" => $books,
            ]);
        } else {
            return response()->json([
                "message" => "Authenticated",
                "status" => "false",
                "book" => "Публикаций нет.",
            ]);
        }
    }
}
