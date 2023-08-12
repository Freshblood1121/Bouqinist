<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index($id = '	
2d31dc28-a471-303f-b187-a21bf7ae22bf')
    {
        $one = Book::query()
            ->where('id', $id)
            ->get()
            ->toJson();
        dd($one);
    }

    public function all()
    {
        $all = Book::all()
            ->toJson();
        dd($all);
    }
}
