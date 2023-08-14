<?php

namespace Database\Seeders;

use App\Enums\BooksStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert($this->getData());
    }

    public function getData(): array
    {
        $data = [];

        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'id' => fake()->uuid(),
                'title' => fake()->jobTitle(),
                'category_id' => 2,
                'author' => fake()->name(),
                'company' => fake()->company(),
                'description' => fake()->text(100),
                'age' => fake()->year(),
                'status' => BooksStatus::MEDIUM->value,
                'image' => fake()->imageUrl(),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $data;
    }
}
