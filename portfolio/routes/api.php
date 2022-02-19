<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/about',[AboutController::class,'get']);
Route::put('/about',[AboutController::class,'put']);
Route::post('/about',[AboutController::class,'post']);

Route::get('/contact',[ContactController::class,'get']);
Route::put('/contact',[ContactController::class,'put']);
Route::post('/contact',[ContactController::class,'post']);

Route::get('/project',[ProjectController::class,'get']);
Route::put('/project/{id}',[ProjectController::class,'put']);
Route::post('/project',[ProjectController::class,'post']);
Route::delete('/project/{id}',[ProjectController::class,'delete']);

Route::get('/skill',[SkillController::class,'get']);
Route::put('/skill/{id}',[SkillController::class,'put']);
Route::post('/skill',[SkillController::class,'post']);
Route::delete('/skill/{id}',[SkillController::class,'delete']);