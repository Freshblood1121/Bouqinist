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
        Category::factory()
            ->has(Book::factory()->count(3))
            ->create();

        Book::factory()
            ->has(Category::factory()->count(3))
            ->create();
    }
}
