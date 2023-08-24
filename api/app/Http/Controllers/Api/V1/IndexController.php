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

    /**
     * Получить все книги.
     * http://host/api/v1/allbooks
     * @return json { "success": true, "data": [], "message": "success"}
     */
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


    /**
     * Получить последние поступившие книги из категории ID 2 в количестве 5 штук.
     * http://host/api/v1/lastbooks/2/5
     * 
     * Получить все последние поступившие книги из категории 2
     * http://host/api/v1/lastbooks/2/0
     *
     * Получить последние поступившие книги в количестве 9 штук, без учета категории 
     * http://host/api/v1/lastbooks/0/9
     *
     * Получить все последние поступившие книги
     * http://host/api/v1/lastbooks/0/0
     *
     * @return json { "success": true, "data": [{},{},..], "message": "Found: N elements"}
     */

    public function lastbooks($categ, $count)
    {
            $msg = "";
            $msg_kod = 500;
            $success = false;
            $isOk = false;

            if($categ && $count){
                $books = Book::query()->where('category_id', $categ)->latest()->take($count)->get();
            }
            elseif(!$categ && $count){
                $books = Book::query()->latest()->take($count)->get();    
            }
            elseif($categ && !$count){
                $books = Book::query()->where('category_id', $categ)->latest()->get();
            }
            elseif(!$categ && !$count){
                $books = Book::query()->latest()->get();
            }
            $k=count($books);
             if($k>=0){
                 $msg = 'Found '.$k.' elements';
                 $msg_kod = 200;
                 $success = true;
             }
        return $this->sendResponse($books, $msg, $msg_kod, $success);
    }    
}
