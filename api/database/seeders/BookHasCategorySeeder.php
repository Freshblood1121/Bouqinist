<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\BookHasCategory;
use App\Models\Category;
use Database\Factories\BookFactory;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Seeder;

class BookHasCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        foreach (Book::all() as $book) {
            BookHasCategory::query()
                ->insert(['book_id' => $book->id,
                    'category_id' => Category::all()
                        ->random()->id]);
        }

    }
}
