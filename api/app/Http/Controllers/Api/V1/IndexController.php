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
use App\Http\Controllers\Api\V1\BaseController as BaseController;

class IndexController extends BaseController
{
    public function one($id)
    {
        return Book::query()
            ->where('id', $id)
            ->get()
            ->toJson();
    }

    public function all()
    {
        return Book::all()
            ->toJson();
    }

    public function allbooks()
    {
        $msg = "";
        $msg_kod = 500;
        $success = false;
        $isOk = false;

        $books = Book::query()->get();

        $isOk = true;  //проверка
        if (!$isOk) {
            $msg = 'Not found';
            $msg_kod = 404;
            $success = false;
        } else {
            $msg = 'success';
            $msg_kod = 200;
            $success = true;
        }
        return $this->sendResponse($books, $msg, $msg_kod, $success);
    }
}
