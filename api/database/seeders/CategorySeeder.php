<?php

namespace Database\Seeders;

use App\Models\BookHasCategory;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::query()
            ->insert([
                [
                    'id' => fake()->uuid(),
                    'title' => 'detective',
                    'description' => 'if you like riddles'
                ],
                [
                    'id' => fake()->uuid(),
                    'title' => 'fantasy',
                    'description' => 'if you like fairy tales'
                ],
                [
                    'id' => fake()->uuid(),
                    'title' => 'history',
                    'description' => 'if you like elder things'
                ],

            ],
            );
    }
}
