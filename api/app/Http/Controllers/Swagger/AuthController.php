<?php

namespace App\Http\Controllers\Swagger;

use App\Http\Controllers\Controller;

/**
 * @OA\Post (
 *     path="/api/v1/register",
 *     summary="Регистрация пользователей.",
 *     tags={"Users"},
 *
 *     @OA\RequestBody (
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema(
 *                      @OA\Property (property="first_name", type="string", example="Genady"),
 *                      @OA\Property (property="last_name", type="string", example="Ivanov"),
 *                      @OA\Property (property="email", type="string", example="ivanov@mail.ru"),
 *                      @OA\Property (property="password", type="string", example="12345678"),
 *                      @OA\Property (property="password_confirmation", type="string", example="12345678"),
 *                  ),
 *             }
 *         ),
 *     ),
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Authenticated"),
 *                 @OA\Property(property="user", type="object",
 *                     @OA\Property(property="first_name", type="string", example="Genady"),
 *                     @OA\Property(property="last_name", type="string", example="Ivanov"),
 *                     @OA\Property(property="gender", type="string", example=null),
 *                     @OA\Property(property="yo", type="string", example=null),
 *                     @OA\Property(property="phone", type="string", example=null),
 *                     @OA\Property(property="country", type="string", example=null),
 *                     @OA\Property(property="city", type="string", example=null),
 *                     @OA\Property(property="email", type="string", example="ivanov@mail.ru"),
 *                     @OA\Property(property="id", type="string", example="2843968d-2b0e-470f-821d-ec7ca9783bc0"),
 *                     @OA\Property(property="updated_at", type="string", example="2023-09-16T17:01:28.000000Z"),
 *                     @OA\Property(property="created_at", type="string", example="2023-09-16T17:01:28.000000Z"),
 *                 ),
 *                 @OA\Property(property="token", type="string", example="1|yMu7HwM4REVBPEuHs6SKh5nOBEhb9p4fODm3KLdy0df06317"),
 *             ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 * @OA\Post (
 *     path="/api/v1/login",
 *     summary="Авторизация пользователей.",
 *     tags={"Users"},
 *     security={{ "bearerAuth": {} }},
 *
 *     @OA\RequestBody (
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema(
 *                      @OA\Property (property="email", type="string", example="ivanov@mail.ru"),
 *                      @OA\Property (property="password", type="string", example="12345678"),
 *                  ),
 *             }
 *         ),
 *     ),
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Authenticated"),
 *                 @OA\Property(property="user", type="object",
 *                     @OA\Property(property="id", type="string", example="2843968d-2b0e-470f-821d-ec7ca9783bc0"),
 *                     @OA\Property(property="first_name", type="string", example="Genady"),
 *                     @OA\Property(property="last_name", type="string", example="Ivanov"),
 *                     @OA\Property(property="gender", type="string", example=null),
 *                     @OA\Property(property="yo", type="string", example=null),
 *                     @OA\Property(property="phone", type="string", example=null),
 *                     @OA\Property(property="country", type="string", example=null),
 *                     @OA\Property(property="city", type="string", example=null),
 *                     @OA\Property(property="avatar", type="string", example=null),
 *                     @OA\Property(property="email", type="string", example="ivanov@mail.ru"),
 *                     @OA\Property(property="email_verified_at", type="string", example=null),
 *                     @OA\Property(property="is_admin", type="string", example=0),
 *                     @OA\Property(property="updated_at", type="string", example="2023-09-16T17:01:28.000000Z"),
 *                     @OA\Property(property="created_at", type="string", example="2023-09-16T17:01:28.000000Z"),
 *                 ),
 *                 @OA\Property(property="token", type="string", example="1|yMu7HwM4REVBPEuHs6SKh5nOBEhb9p4fODm3KLdy0df06317"),
 *             ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 *
 * @OA\Get (
 *     path="/api/v1/me",
 *     summary="Информация о пользователе.",
 *     tags={"Users"},
 *     security={{ "bearerAuth": {} }},
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Authenticated"),
 *                 @OA\Property(property="user", type="object",
 *                     @OA\Property(property="id", type="string", example="2843968d-2b0e-470f-821d-ec7ca9783bc0"),
 *                     @OA\Property(property="first_name", type="string", example="Genady"),
 *                     @OA\Property(property="last_name", type="string", example="Ivanov"),
 *                     @OA\Property(property="gender", type="string", example=null),
 *                     @OA\Property(property="yo", type="string", example=null),
 *                     @OA\Property(property="phone", type="string", example=null),
 *                     @OA\Property(property="country", type="string", example=null),
 *                     @OA\Property(property="city", type="string", example=null),
 *                     @OA\Property(property="avatar", type="string", example=null),
 *                     @OA\Property(property="email", type="string", example="ivanov@mail.ru"),
 *                     @OA\Property(property="email_verified_at", type="string", example=null),
 *                     @OA\Property(property="is_admin", type="string", example=0),
 *                     @OA\Property(property="updated_at", type="string", example="2023-09-16T17:01:28.000000Z"),
 *                     @OA\Property(property="created_at", type="string", example="2023-09-16T17:01:28.000000Z"),
 *                 ),
 *                 @OA\Property(property="token", type="string", example="1|yMu7HwM4REVBPEuHs6SKh5nOBEhb9p4fODm3KLdy0df06317"),
 *             ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 * @OA\Put (
 *     path="/api/v1/me/update",
 *     summary="Обновление информации о пользователе.",
 *     tags={"Users"},
 *     security={{ "bearerAuth": {} }},
 *
 *      @OA\RequestBody (
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema(
 *                      @OA\Property (property="first_name", type="string", example="Genady"),
 *                      @OA\Property (property="last_name", type="string", example="Ivanov"),
 *                      @OA\Property (property="gender", type="string", example="Мужской"),
 *                      @OA\Property (property="yo", type="string", example="01.03.1998"),
 *                      @OA\Property (property="phone", type="string", example="+79999999999"),
 *                      @OA\Property (property="country", type="string", example="Russia"),
 *                      @OA\Property (property="city", type="string", example="Moscow"),
 *                      @OA\Property (property="avatar", type="string", example="img\jhvujvuyvuvuvuyv"),
 *                  ),
 *             }
 *         ),
 *     ),
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="User updated successfully."),
 *             ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 *  * @OA\Post (
 *     path="/api/v1/email-verification",
 *     summary="Проверка кода для верификации почты.",
 *     tags={"Mails"},
 *     security={{ "bearerAuth": {} }},
 *
 *     @OA\RequestBody (
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema(
 *                      @OA\Property (property="email", type="string", example="ivanov@mail.ru"),
 *                      @OA\Property (property="otp", type="string", example="873492"),
 *                  ),
 *             }
 *         ),
 *     ),
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="success", type="string", example="true"),
 *         ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 *  * @OA\Get (
 *     path="/api/v1/email-verification",
 *     summary="Повторная отправка письма на почту.",
 *     tags={"Mails"},
 *     security={{ "bearerAuth": {} }},
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="success", type="string", example="true"),
 *         ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 */

class AuthController extends Controller
{

}
