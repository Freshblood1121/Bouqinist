<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UploadImageController extends Controller
{
//    public function avatar(Request $request, User $user): JsonResponse
//    {
//        $request->file('image');
//
//        if ($request->hasFile('image')) {
//
//        $name = rand() . '.' . $request->file('image')->getClientOriginalExtension();
//
//        $request->file('image')->storeAs('storage/images/avatars', $name);
//
//        $user->avatar = "storage/images/avatars/".$name;
//
//        $user->save();
//
//        } else {
//            return response()->json([
//                'status' => false,
//                'message' => 'Image not updated.',
//            ]);
//        }
//        return response()->json([
//            'status' => true,
//            'message' => 'Image updated.',
//        ], 200);
//    }
}
