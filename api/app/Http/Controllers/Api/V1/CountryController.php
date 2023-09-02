<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Database\Eloquent\Collection;

class CountryController extends Controller
{
    public function index($id): string
    {
        return Country::find($id);
    }

    public function all(): Collection
    {
        return Country::all(); //->getDictionary(); если нужен только json вне массива
    }
}
