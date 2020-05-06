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
    public function searchableAs()
    {
       return 'name';
    }
 
    public function toSearchableArray()
    {
       $array = $this->toArray();
    //    $array['video'] = $this->video['name'];
       return $array;
    }
}
