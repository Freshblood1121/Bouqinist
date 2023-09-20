<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\EmailVerificationNotification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware("auth:sanctum", ['except' => ["createUser", "login"]]);
    }

    //Регистрация пользователя
    public function createUser(Request $request): JsonResponse
    {

        $request->validate([
            //'/^[а-яёa-za-яёё]{2,190}$/ui'
            //строка состоит из русских и английских букв, и ее длина находится в диапазоне от 2 до 190 символов.
            'first_name' => ['required', 'regex:/^[а-яёa-za-яёё]{2,190}$/ui'],
            'last_name' => ['required', 'regex:/^[а-яёa-za-яёё]{2,190}$/ui'],
            'email' => ['required', 'email', 'regex:/@/', 'max:191', 'unique:users'],
            'password' => ['required', 'confirmed', Password::default()],
            'gender' => ['regex:/^[а-яёa-za-яёё]{2,190}$/ui'],
            'yo' => ['regex:/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/'],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'yo' => $request->yo,
            'phone' => $request->phone,
            'country' => $request->country,
            'city' => $request->city,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'password_confirmation' => $request->password,
        ]);

        //Присваивание токена
        $token = $user->createToken("token-name")->plainTextToken;

        //Отправка OTP на почту
        $user->notify(new EmailVerificationNotification());

        return response()->json([
            "message" => "Authenticated",
            "user" => $user,
            "token" => $token,
        ]);
    }

    /**
     * Login The User
     * @param Request $request
     * @return JsonResponse
     */

    //Авторизация пользователя
    public function login(Request $request): JsonResponse
    {
        try {
            $validateUser = Validator::make($request->all(),
                [
                    'email' => ['required', 'string', 'email'],
                    'password' => ['required', 'string'],
                ]);

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if (!Auth::attempt($request->only(['email', 'password']))) {

                return response()->json([
                    'status' => false,
                    'message' => 'Пользователь с таким e-mail и паролем не найден.',
                ], 401);
            }

            $user=User::where("email",$request["email"])->firstOrFail();


            return response()->json([
                "message" => "Authenticated",
                "user"=> $user,
                "token"=> $user->createToken("token-name")->plainTextToken,
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    //Информация обо мне
    public function me(Request $request): JsonResponse
    {
            return response()->json([
                "message" => "Authenticated",
                "user" => auth()->user(),
                "token" => $request->bearerToken(),
            ]);
    }

    public function updateUser(Request $request): JsonResponse
    {
        $validateData = Validator::make($request->all(),
            [
                'first_name' => ['regex:/^[а-яёa-za-яёё]{2,190}$/ui'],
                'last_name' => ['regex:/^[а-яёa-za-яёё]{2,190}$/ui'],
                'gender' => ['regex:/^[а-яёa-za-яёё]{2,190}$/ui'],
                'yo' => ['regex:/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/'],
                'phone' => ['string', 'min:3', 'max:191'],
                'country' => ['string', 'min:2', 'max:191'],
                'city' => ['string', 'min:2', 'max:191'],
                'avatar' => ['string'],
            ]);

        if ($validateData->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'User updated fail',
                'errors' => $validateData->errors()
            ], 404);
        }
                $request->user()->update($request->all());

        return response()->json([
            'message' => 'User updated successfully',
            'data' => $request->all(),
        ], 200);
    }

    public function deleteUser($id): JsonResponse
    {
        try {

            $user = User::findOrFail($id);
            $user->delete();

        } catch (\Exception) {
            return response()->json([
                'status' => false,
                'message' => 'User not found.',
            ], 500);
        }
        return response()->json([
            'success' => true,
            'message' => 'User deleted.'
        ], 200);
    }
}
