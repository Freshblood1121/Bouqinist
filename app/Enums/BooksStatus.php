<?php

namespace App\Enums;

enum BooksStatus: string
{
    case GOOD = "good";
    case MEDIUM = "medium";
    case BADLY = "badly";

    public static function all(): array
    {
        return [
            self::GOOD->value,
            self::MEDIUM->value,
            self::BADLY->value,
        ];
    }
}
