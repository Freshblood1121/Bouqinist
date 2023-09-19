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
 *     summary="Обновление информации пользователя.",
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
 * @OA\Post (
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
 * @OA\Get (
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
 * @OA\Get (
 *     path="/api/v1/books",
 *     summary="Получить 10 последних добавленных книг из таблицы books.",
 *     tags={"Books"},
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property (property="data", type="object",
 *                 @OA\Property(property="id", type="string", example="0285a4e8-f588-3d0c-9e21-734b834f2f00"),
 *                 @OA\Property(property="title", type="string", example="Usher"),
 *                 @OA\Property(property="author", type="string", example="Orie Schmitt"),
 *                 @OA\Property(property="company", type="string", example="Dickinson, Quigley and Wintheiser"),
 *                 @OA\Property(property="description", type="string", example="Doloribus iste voluptate facere maxime fugiat. Optio sed eveniet temporibus."),
 *                 @OA\Property(property="age", type="string", example=1982),
 *                 @OA\Property(property="status", type="string", example="Medium"),
 *                 @OA\Property(property="image", type="string", example="img\kqjfjkqwnfnjqwasnjkwfqwf"),
 *                 @OA\Property(property="price", type="string", example="19627"),
 *                 @OA\Property(property="categories", type="object",
 *                     @OA\Property(property="id", type="string", example="0285a4e8-f588-3d0c-9e21-734b834f2f00"),
 *                     @OA\Property(property="title", type="string", example="Usher"),
 *                     @OA\Property(property="description", type="string", example="Doloribus iste voluptate facere maxime fugiat. Optio sed eveniet temporibus."),
 *                 ),
 *             ),
 *         ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 * @OA\Post (
 *     path="/api/v1/books/create",
 *     summary="Создание книги в таблице books.",
 *     tags={"Books"},
 *     security={{ "bearerAuth": {} }},
 *
 *     @OA\RequestBody (
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema(
 *                      @OA\Property (property="title", type="string", example="Hello"),
 *                      @OA\Property (property="author", type="string", example="Genady"),
 *                      @OA\Property (property="company", type="string", example="FontsCompany"),
 *                      @OA\Property (property="description", type="string", example="Ut enim ad minima veniam, qui blanditiis praesentium voluptatum."),
 *                      @OA\Property (property="age", type="string", example=1993),
 *                      @OA\Property (property="status", type="string", example="Medium"),
 *                      @OA\Property (property="image", type="string", example="img\qqiwofnqwofnqiwfowqno"),
 *                      @OA\Property (property="price", type="string", example=3400),
 *                      @OA\Property (property="cetegories", type="string", example="06c18fb9-b764-365a-a3a7-c7908f31d12f"),
 *                  ),
 *             }
 *         ),
 *     ),
 *
 *     @OA\Response (
 *         @OA\JsonContent(
 *             @OA\Property(property="status", type="string", example="true"),
 *             @OA\Property(property="message", type="string", example="Book create!"),
 *         ),
 *         description="Ok",
 *         response=200
 *     ),
 * ),
 *
 * @OA\Get (
 *      path="/api/v1/books/show/{book_id}",
 *      summary="Получить книгу по id из таблицы books.",
 *      tags={"Books"},
 *      @OA\Parameter (
 *          description="ID книги",
 *          in="path",
 *          name="book_id",
 *          required=true,
 *          example="14581760-b0de-3f5d-bedd-a8581223871e"
 *      ),
 *      @OA\Response (
 *          @OA\JsonContent(
 *              @OA\Property(property="id", type="string", example="0285a4e8-f588-3d0c-9e21-734b834f2f00"),
 *              @OA\Property(property="title", type="string", example="Usher"),
 *              @OA\Property(property="author", type="string", example="Orie Schmitt"),
 *              @OA\Property(property="company", type="string", example="Dickinson, Quigley and Wintheiser"),
 *              @OA\Property(property="description", type="string", example="Doloribus iste voluptate facere maxime fugiat. Optio sed eveniet temporibus."),
 *              @OA\Property(property="age", type="string", example=1982),
 *              @OA\Property(property="status", type="string", example="Medium"),
 *              @OA\Property(property="image", type="string", example="img\kqjfjkqwnfnjqwasnjkwfqwf"),
 *              @OA\Property(property="price", type="string", example="19627"),
 *              @OA\Property(property="categories", type="collection", example="[]"),
 *          ),
 *          description="Ok",
 *          response=200
 *      ),
 * ),
 *
 * @OA\Put (
 *      path="/api/v1/books/update",
 *      summary="Обновление информации книги.",
 *      tags={"Books"},
 *      security={{ "bearerAuth": {} }},
 *
 *       @OA\RequestBody (
 *          @OA\JsonContent(
 *              allOf={
 *                   @OA\Schema(
 *                       @OA\Property (property="id", type="string", example="5daf6745-280f-3059-99b0-7b1499574b88"),
 *                       @OA\Property (property="title", type="string", example="Cool Chef"),
 *                   ),
 *              }
 *          ),
 *      ),
 *
 *      @OA\Response (
 *          @OA\JsonContent(
 *              @OA\Property(property="status", type="string", example=true),
 *              @OA\Property(property="message", type="string", example="Book updated."),
 *          ),
 *          description="Ok",
 *          response=200
 *      ),
 *  ),
 *
 * @OA\Delete (
 *       path="/api/v1/books/delete",
 *       summary="Удаление книги.",
 *       tags={"Books"},
 *       security={{ "bearerAuth": {} }},
 *
 *        @OA\RequestBody (
 *           @OA\JsonContent(
 *               allOf={
 *                    @OA\Schema(
 *                        @OA\Property (property="id", type="string", example="5daf6745-280f-3059-99b0-7b1499574b88"),
 *                    ),
 *               }
 *           ),
 *       ),
 *
 *       @OA\Response (
 *           @OA\JsonContent(
 *               @OA\Property(property="status", type="string", example=true),
 *               @OA\Property(property="message", type="string", example="Book deleted."),
 *           ),
 *           description="Ok",
 *           response=200
 *       ),
 *   ),
 *
 * @OA\Get (
 *      path="/api/v1/categories",
 *      summary="Получить все категории.",
 *      tags={"Categories"},
 *
 *      @OA\Response (
 *          @OA\JsonContent(
 *              @OA\Property(property="id", type="string", example="06c18fb9-b764-365a-a3a7-c7908f31d12f"),
 *              @OA\Property(property="title", type="string", example="Fraud Investigator"),
 *              @OA\Property(property="description", type="string", example="Minima ea nihil eaque in. Modi aut nihil quod totam voluptatum sit incidunt. Sequi ea sunt eos."),
 *          ),
 *          description="Ok",
 *          response=200
 *      ),
 *  ),
 *
 * @OA\Get (
 *       path="/api/v1/categories/show/{category_id}",
 *       summary="Получить категорию по id из таблицы categories.",
 *       tags={"Categories"},
 *       @OA\Parameter (
 *           description="ID категории",
 *           in="path",
 *           name="category_id",
 *           required=true,
 *           example="38a2aff4-0980-3ceb-9ccf-f65ac1feda37"
 *       ),
 *       @OA\Response (
 *           @OA\JsonContent(
 *               @OA\Property(property="id", type="string", example="38a2aff4-0980-3ceb-9ccf-f65ac1feda37"),
 *               @OA\Property(property="title", type="string", example="Fishing OR Forestry Supervisor"),
 *               @OA\Property(property="description", type="string", example="Occaecati corrupti et maxime qui. Cumque dolorem quo sed sed. Velit quae est nam aut."),
 *               @OA\Property(property="books", type="string", example="[]"),
 *           ),
 *           description="Ok",
 *           response=200
 *       ),
 *  ),
 *
 * @OA\Get (
 *        path="/api/v1/books/has/{book_id}",
 *        summary="Получить категории принадлежащие книгам(BOOK->CATEGORY).",
 *        tags={"Relationships"},
 *        @OA\Parameter (
 *            description="ID книги",
 *            in="path",
 *            name="book_id",
 *            required=true,
 *            example="5daf6745-280f-3059-99b0-7b1499574b88"
 *        ),
 *        @OA\Response (
 *            @OA\JsonContent(
 *                @OA\Property(property="id", type="string", example="5daf6745-280f-3059-99b0-7b1499574b88"),
 *                @OA\Property(property="title", type="string", example="Host and Hostess"),
 *                @OA\Property(property="description", type="string", example="Excepturi quis labore aut voluptatem eum. Animi repellendus eos ipsam aut et."),
 *                @OA\Property(property="created_at", type="string", example="2023-09-15T14:41:04.000000Z"),
 *                @OA\Property(property="updated_at", type="string", example="2023-09-15T14:41:04.000000Z"),
 *                    @OA\Property (property="pivot", type="object",
 *                        @OA\Property (property="book_id", type="string", example="5daf6745-280f-3059-99b0-7b1499574b88"),
 *                        @OA\Property (property="category_id", type="string", example="449db4d4-0716-331b-a539-83bf6d3066ad"),
 *                    ),
 *            ),
 *            description="Ok",
 *            response=200
 *        ),
 *   ),
 *
 * @OA\Get (
 *         path="/api/v1/categories/has/{category_id}",
 *         summary="Получить книги принадлежащие категориям(CATEGORY->BOOK)",
 *         tags={"Relationships"},
 *         @OA\Parameter (
 *             description="ID категории",
 *             in="path",
 *             name="category_id",
 *             required=true,
 *             example="449db4d4-0716-331b-a539-83bf6d3066ad"
 *         ),
 *         @OA\Response (
 *             @OA\JsonContent(
 *                 @OA\Property(property="id", type="string", example="5daf6745-280f-3059-99b0-7b1499574b88"),
 *                 @OA\Property(property="title", type="string", example="Cool Chef"),
 *                 @OA\Property(property="author", type="string", example="Rahsaan Rohan"),
 *                 @OA\Property(property="company", type="string", example="Bartell Ltd"),
 *                 @OA\Property(property="description", type="string", example="Repellendus exercitationem vero quo dolore. Porro recusandae dignissimos quod est."),
 *                 @OA\Property(property="age", type="string", example=2010),
 *                 @OA\Property(property="status", type="string", example="Medium"),
 *                 @OA\Property(property="image", type="string", example="img\jqbwfiqwbfijwqbfiwqbf"),
 *                 @OA\Property(property="price", type="string", example=1942),
 *                 @OA\Property(property="created_at", type="string", example="2023-09-15T14:41:04.000000Z"),
 *                 @OA\Property(property="updated_at", type="string", example="2023-09-15T14:41:04.000000Z"),
 *                     @OA\Property (property="pivot", type="object",
 *                         @OA\Property (property="category_id", type="string", example="449db4d4-0716-331b-a539-83bf6d3066ad"),
 *                         @OA\Property (property="book_id", type="string", example="5daf6745-280f-3059-99b0-7b1499574b88"),
 *                     ),
 *             ),
 *             description="Ok",
 *             response=200
 *         ),
 *    ),
 *
 * @OA\Delete (
 *        path="/api/v1/me/{id}",
 *        summary="Удаление пользователя.",
 *        tags={"Users"},
 *        security={{ "bearerAuth": {} }},
 *        @OA\Parameter (
 *            description="ID пользователя",
 *            in="path",
 *            name="id",
 *            required=true,
 *            example="c9a366d0-ac2e-462f-a66a-a1cbb3b4d464"
 *        ),
 *
 *         @OA\RequestBody (
 *            @OA\JsonContent(
 *                allOf={
 *                     @OA\Schema(
 *                         @OA\Property (property="id", type="string", example="c9a366d0-ac2e-462f-a66a-a1cbb3b4d464"),
 *                     ),
 *                }
 *            ),
 *        ),
 *
 *        @OA\Response (
 *            @OA\JsonContent(
 *                @OA\Property(property="status", type="string", example=true),
 *                @OA\Property(property="message", type="string", example="User deleted."),
 *            ),
 *            description="Ok",
 *            response=200
 *        ),
 *    ),
 *
 */

class AuthController extends Controller
{

}
