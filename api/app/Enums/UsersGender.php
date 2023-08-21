<?php

namespace App\Enums;

enum UsersGender: string
{
    case MALE = "Male"; //Мужской
    case FEMALE = "Female"; //Женский
    case EMPTY = "Empty"; //Пусто

    public static function all(): array
    {
        return [
            self::MALE->value,
            self::FEMALE->value,
            self::EMPTY->value,
        ];
    }
}
