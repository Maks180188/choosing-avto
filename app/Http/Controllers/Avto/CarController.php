<?php

namespace App\Http\Controllers\Avto;

use App\Http\Controllers\Controller;
use App\Http\Controllers\User\UserController;
use App\Http\Requests\GetAvailableCarsRequest;
use App\Http\Resources\CarCollection;
use App\Models\Car;
use App\Models\ReservedCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CarController extends Controller
{
    public function getCars(GetAvailableCarsRequest $request)
    {
        $role = UserController::getUserRole();

        $carClass = match ($role) {
            'worker' => 3,
            'manager' => 2,
            'top-manager' => 1
        };

        $startDate = $request->get('startDate');
        $endDate = $request->get('endDate');

        $freeCars = ReservedCar::has('cars')->where(function ($query) use ($startDate, $endDate) {
            $query->where('start_busy_date', '<', $startDate)
                ->where('end_busy_date', '<', $startDate);
        })->orWhere(function ($query) use ($startDate, $endDate) {
            $query->where('start_busy_date', '>', $endDate)
                ->where('end_busy_date', '>', $endDate);
        })
            ->pluck('id')->toArray();

        $notReservedCars = Car::doesntHave('reservedCars')->where('class', $carClass)->pluck('id')->toArray();

        $ids = array_merge($freeCars, $notReservedCars);
        $cars = Car::whereIn('id', $ids)->where('class', $carClass)->get();

        return CarCollection::make($cars);
    }

    public function reserveCar(Request $request): string
    {
        ReservedCar::create([
            'car_id' => $request->get('id'),
            'user_id' => Auth::user()->id,
            'start_busy_date' => $request->get('startDate'),
            'end_busy_date' => $request->get('endDate'),
        ]);

        return "OK";
    }
}
