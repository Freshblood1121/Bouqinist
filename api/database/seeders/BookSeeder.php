<?php

namespace Database\Seeders;

use App\Enums\BooksStatus;
use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
        'Научно-популярные',
        'Научные',
        'Полиграфия',
        'Справочные',
        'Учебные',
        'Художественные',
        ];

        for ($i = 0; $i < count($data); $i++) {
            $images = File::files(storage_path("app/storage/images/test/Книги/".$data[$i]));

            foreach ($images as $image) {

                $destinationPath = realpath($image);
                $path = str_replace(DIRECTORY_SEPARATOR,'/', $destinationPath);
                $compilation = str_replace('C:/OSPanel/domains/Bouqinist/api/storage/app/', '/', $path);
                $editToOne = substr($compilation, 1);
                $profileImage = $editToOne;

                Book::create([
                    'id' => fake()->uuid(),
                    'title' => fake()->jobTitle(),
                    'author' => fake()->name(),
                    'user_id' => User::query()->inRandomOrder()->latest()->get()[0]->id,
                    'company' => fake()->company(),
                    'description'=> fake()->text(100),
                    'age' => fake()->year(),
                    'status' => true,
                    'image' => $profileImage,
                    'price' => fake()->numberBetween(10, 50000),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

            }
        }


    }

}
