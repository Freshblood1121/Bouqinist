<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title', 191)->nullable();
            $table->string('author', 191)->nullable();
            $table->foreignIdFor(User::class, 'user_id')->constrained()->onDelete('cascade');
            $table->text('company')->nullable();
            $table->string('description')->nullable();
            $table->integer('age')->nullable();
            $table->boolean('status')->default(true);
            $table->text('image')->nullable();
            $table->integer('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
