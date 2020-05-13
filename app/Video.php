<?php

namespace App;
 
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Video extends Model
{
    use Searchable;

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Category', 'video-category', 'category_id');
    }
    
    public function searchableAs()
    {
        return 'name';
    }
 
    public function isChecked()
    {
        return $this->checkView !== 0;
    }
     
    public function shouldBeSearchable()
    {
        return $this->isChecked();
    }
    
    public function toSearchableArray()
    {
       $array = $this->toArray();
       return $array;
    }
}
