<?php

use App\Enums\UsersGender;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('first_name', 191)->nullable();
            $table->string('last_name', 191)->nullable();
            $table->enum('gender', UsersGender::all())->nullable();
            $table->string('yo')->nullable();
            $table->string('phone')->nullable();
            $table->string('country',191)->nullable();
            $table->string('city',191)->nullable();
            $table->string('avatar')->nullable();
            $table->string('email',191)->unique()->nullable();
            $table->string('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken()->nullable();
            $table->boolean('is_admin')->default(false);
            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
