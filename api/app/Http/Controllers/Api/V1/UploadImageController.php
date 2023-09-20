<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadImageController extends Controller
{
    public function one(Request $request)
    {
        $img = $request->file('image');

        if ($request->hasFile('image'))
        {
            $new_name = rand() . '.' . $img->getClientOriginalExtension();

            $img->move(public_path('/uploads/img'), $new_name);

            return response()->json([
                "status" => true,
                "message" => "Image is " . $new_name . " upload!",
            ]);
        } else {
            return response()->json([
                "status" => false,
                "message" => "Image not upload."
            ]);
        }

    }

//    public function more(Request $request)
//    {
//
//    }
}
