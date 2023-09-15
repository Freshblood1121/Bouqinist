<?php

namespace App\Http\Requests;

use App\Models\Category;
use Illuminate\Foundation\Http\FormRequest;

class BookCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:191',
            'author' => 'required|string|max:191',
            'company' => 'required|string',
            'description' => 'required|string',
            'age' => 'required|int',
            'status' =>  'required|string',
            'image' => 'required|string',
            'price' => 'required|int',
            'categories' => 'required|string',
        ];
    }
}
