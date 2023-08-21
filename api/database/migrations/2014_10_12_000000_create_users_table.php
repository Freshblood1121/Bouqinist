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
            $table->string('first_name', 191);
            $table->string('last_name', 191);
            $table->enum('gender', UsersGender::all());
            $table->integer('yo');
            $table->string('avatar')->nullable();
            $table->string('email')->unique();
            $table->nullableTimestamps();
            $table->rememberToken();
            $table->string('email_verified_at');
            $table->string('password');
            $table->boolean('is_admin');
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
