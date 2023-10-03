<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookHasCategory extends Model
{
    use Uuids;
    use HasFactory;

    protected $table = 'books_has_categories';

    protected $fillable = [
        'category_id',
        'book_id',
        'created_at',
        'updated_at',
    ];
}
