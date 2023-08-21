<?php

namespace App\Models;


use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{
    use HasFactory;
    use Uuids;

    protected $fillable = [
        'title',
        'author',
        'company',
        'description',
        'age',
        'image',
        'price',
        'created_at',
        'updated_at',
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'books_has_categories');
    }

}
