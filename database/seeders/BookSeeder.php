<?php

namespace Database\Seeders;

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
                    'title' => fake()->jobTitle(),
                    'description'=> fake()->text(100),
                    'age' => fake()->year(),
                    'author' => fake()->name(),
                    'publishing' => fake()->company(),
                    'image' => fake()->imageUrl(),
                    'category_id' => 5,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
            return $data;
    }
}
