<?php

namespace App\Enums;

enum BooksStatus: string
{
    case GOOD = "Good";
    case MEDIUM = "Medium";
    case BADLY = "Badly";

    public static function all(): array
    {
        return [
            self::GOOD->value,
            self::MEDIUM->value,
            self::BADLY->value,
        ];
    }
}
