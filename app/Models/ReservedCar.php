<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ReservedCar extends Model
{
    use HasFactory;

    public function cars(): hasOne
    {
        return $this->hasOne(Car::class, 'id', 'car_id');
    }
}
