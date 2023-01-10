<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $class
 * @property string $model
 * @property string $type
 * @property string $vin
 * @property string $vrm
 * @property int $user_id
 * */

class Car extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'class', 'model', 'type', 'vin', 'user_id'];

    public function reservedCars(): hasMany
    {
        return $this->hasMany(ReservedCar::class, 'car_id', 'id');
    }
}
