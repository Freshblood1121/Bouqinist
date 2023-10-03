<?php

namespace App\Models;


use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{

    use HasFactory;
    use Uuids;

    protected $fillable = [
        'user_id',
        'title',
        'author',
        'company',
        'description',
        'age',
        'image',
        'price',
        'status',
        'created_at',
        'updated_at',
        'category_id'
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'books_has_categories');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
