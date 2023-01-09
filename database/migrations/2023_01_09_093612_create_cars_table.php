<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->enum('class', [1, 2, 3]);
            $table->string('model');
            $table->string('type');
            $table->string('vin');
            $table->string('vrm');
            $table->date('start_busy_date')->nullable();
            $table->date('end_busy_date')->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users')->references('id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
};
