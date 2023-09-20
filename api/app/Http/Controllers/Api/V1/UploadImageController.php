<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadImageController extends Controller
{
    public function one(Request $request)
    {
        $img = $request->file('image');

        if ($request->hasFile('image')) {
            $new_name = rand() . '_' . $img->getClientOriginalExtension();
            $img->move(public_path('/uploads/images', $new_name));
        } else {
            return response()->json('image null');
        }
    }

//    public function more(Request $request)
//    {
//
//    }
}
