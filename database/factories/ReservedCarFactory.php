<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ReservedCar>
 */
class ReservedCarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'car_id' => 1,
            'user_id' => 2,
            'start_busy_date' => '2023-01-11',
            'end_busy_date' => '2023-01-12',
        ];
    }
}
