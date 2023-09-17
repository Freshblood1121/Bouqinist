<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use Uuids;
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'created_at',
        'updated_at',
    ];

    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Book::class, 'books_has_categories');
    }
}
