<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public static $wrap = 'dataBook';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author,
            'company' => $this->company,
            'description' => $this->description,
            'age' => $this->age,
            'status' => $this->status,
            'image' => $this->image,
            'price' => $this->price,
        ];
    }
}
