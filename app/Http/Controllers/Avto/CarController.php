<?php

namespace App\Http\Controllers\Avto;

use App\Http\Controllers\Controller;
use App\Http\Controllers\User\UserController;
use App\Http\Resources\CarCollection;
use App\Models\Car;

class CarController extends Controller
{
    public function getCars(): CarCollection
    {
        $role = UserController::getUserRole();
        $carClass = match ($role) {
          'worker' => 3,
          'manager' => 2,
          'top-manager' => 1
        };

        $cars = Car::where('class', $carClass)->get();
        return CarCollection::make($cars);
    }
}
