<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'class' => fake()->randomElement([1, 2, 3,]),
            'model' => fake()->randomElement(['bmv', 'audi', 'volkswagen', 'lada', 'toyota', 'volvo']),
            'type' => fake()->randomElement(['type1', 'type2', 'type3', 'type4', 'type5', 'type6']),
            'vin' => fake()->uuid,
            'vrm' => fake()->uuid,
        ];
    }
}
