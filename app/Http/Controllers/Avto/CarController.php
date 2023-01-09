<?php

namespace App\Http\Controllers\Avto;

use App\Http\Controllers\Controller;
use App\Http\Controllers\User\UserController;
use App\Http\Resources\CarCollection;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function getCars($startDate, $endDate): CarCollection
    {
        $role = UserController::getUserRole();
        $carClass = match ($role) {
          'worker' => 3,
          'manager' => 2,
          'top-manager' => 1
        };

        $cars = Car::where(function ($query) use ($startDate, $endDate) {
            $query->where('start_busy_date', '<', $startDate)
                ->where('end_busy_date', '<', $startDate);
        })->orWhere(function ($query) use ($startDate, $endDate) {
            $query->where('start_busy_date', '>', $endDate)
                ->where('end_busy_date', '>', $endDate);
        })
            ->where('class', $carClass)
            ->get();

//        $cars = Car::where('class', $carClass)
//            ->where('start_busy_date', '<', $startDate)
//            ->where('end_busy_date', '<', $startDate)
//
//            ->where('start_busy_date', '>', $endDate)
//            ->where('end_busy_date', '>', $endDate)
//            ->get();
        return CarCollection::make($cars);
    }
}
