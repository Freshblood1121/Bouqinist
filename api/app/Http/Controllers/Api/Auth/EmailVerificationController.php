<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmailVerificationRequest;
use App\Models\User;
use App\Notifications\EmailVerificationNotification;
use Ichtrojan\Otp\Otp;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{
    private Otp $otp;

    public function __construct()
    {
        $this->otp = new Otp();
    }

    //Повторная отправка кода на почту
    public function sendEmailVerification(Request $request): JsonResponse
    {
        $request->user()->notify(new EmailVerificationNotification());
        $success['success'] = true;

        return response()->json($success, 200);
    }

    public function email_verification(EmailVerificationRequest $request): JsonResponse
    {
        $otpTwo = $this->otp->validate($request->email, $request->otp);

        if (!$otpTwo->status) {
            return response()->json(['error' => $otpTwo], 401);
        }

        $user = User::where('email', $request->email)->first();

        $user->markEmailAsVerified();

        $success['success'] = true;

        return response()->json($success, 200);
    }

}
