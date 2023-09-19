<?php

namespace App\Enums;

enum UsersGender: string
{
    case MALE = "Мужской"; //Мужской
    case FEMALE = "Женский"; //Женский
    case EMPTY = "Другой"; //Пусто

    public static function all(): array
    {
        return [
            self::MALE->value,
            self::FEMALE->value,
            self::EMPTY->value,
        ];
    }
}
