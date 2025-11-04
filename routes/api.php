<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware(['auth:sunctum'])->get('/api/user', function (Request $request) {
    return $request->user();
});
