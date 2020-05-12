<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware'=>'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('profile ', 'AuthController@profile');
    });
    
});
Route::group(['prefix' => 'user', 'middleware'=>'auth:api'], function() {
    Route::group(['middleware'=>'scope:user'], function() {
        Route::get('/user-scope', function() {
            return response()->json([
                'message' => 'User access'
                ,'status_code' => 200
            ]);
        });
    });
    Route::group(['middleware'=>'scope:administrator'], function() {
        Route::get('/admin', function() {
            return response()->json([
                'message' => 'Admin access'
                ,'status_code' => 200
            ]);
        });
    });
});

Route::resource('users','UserController');

Route::resource('videos','VideoController');

Route::get('profile/{id}','VideoController@profile');

Route::post('/search', 'VideoController@search');