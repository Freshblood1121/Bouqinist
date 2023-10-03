<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class VerifyTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next) {
        $token = $request->bearerToken();
        if (!$token) {
            return response('Unauthorizeded', 401);
        }

        $user = User::where('access_token', $token->token)->first();


        if (!$user) {
            return response()->json([
                "message" => "Invalid token",
                "status" => 403,
            ]);
        }
        return $next($request);
    }
}
