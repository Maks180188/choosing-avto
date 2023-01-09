<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public static function getUserRole(): string
    {
        return Auth::user()?->role;
    }
}
