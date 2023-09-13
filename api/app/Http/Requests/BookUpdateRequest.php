<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookUpdateRequest extends FormRequest
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
            'id' => 'required|string|max:36',
            'title' => 'string|max:191',
            'author' => 'string|max:191',
            'company' => 'string',
            'description' => 'string',
            'age' => 'int',
            'status' =>  'string',
            'image' => 'string',
            'price' => 'int',
        ];
    }
}
