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
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::default()]
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

                //Время жизни сессии 120мин в config/session.php
                $request->session()->regenerate();

                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user=User::where("email",$request["email"])->firstOrFail();

            return response()->json([
                "message" => "Authenticated",
                "user"=> $user,
                "token"=> $request->bearerToken(),
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
}
