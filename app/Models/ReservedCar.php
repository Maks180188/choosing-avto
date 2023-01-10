<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ReservedCar extends Model
{
    use HasFactory;

    protected $fillable = ['car_id', 'user_id', 'start_busy_date', 'end_busy_date',];

    public function cars(): hasOne
    {
        return $this->hasOne(Car::class, 'id', 'car_id');
    }
}
