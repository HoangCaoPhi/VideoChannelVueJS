<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    public function videos()
    {
        return $this->belongsToMany('App\Video', 'video__categories', 'category_id');
    }
    public function users()
    {
        return $this->belongsToMany('App\User', 'user__categories', 'category_id');
    }
}
