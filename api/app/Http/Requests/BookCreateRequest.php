<?php

namespace App\Http\Requests;
use App\Enums\BooksStatus;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

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
    //@TODO Сделать такую же логику валидации для пользователей
}
