<?php

namespace Database\Seeders;

use App\Models\ReservedCar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReservedCarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ReservedCar::factory()->count(1)->create();
    }
}
