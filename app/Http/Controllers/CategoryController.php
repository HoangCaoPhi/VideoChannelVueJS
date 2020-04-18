<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categories = Category::orderBy('created_at','desc')->paginate(8);
        return response()->json($categories, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name'=> 'required|min:3',
            'image'=> 'required|image|mimes:jpg,png,jpeg',
            'video'  => 'required|mimetypes:video/avi,video/mpeg,video/mp4'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $image_path = $request->file('image')->store('categories_images');
        $video_path = $request->file('video')->store('categories_videos');
        $category->image = $image_path;
        $category->video = $video_path;
        $category->user_id = $request->user_id;

        if ($category->save()) 
        {
            return response()->json($category, 200);
        }
        else 
        {
            return response()->json([
                'message' => 'Some error occurred!!',
                'status_code' => 500
            ], 500);
        }
        dd($request->all());
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
        return response()->json($category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
  
        $request->validate([
            'name'=> 'required|min:3',
        ]);

        $category->name = $request->name;
        $oldPath = $category->image;

        if($request->hasFile('image')) {
            $request->validate([
                'image'=> 'required|image|mimes:jpg,png,jpeg'
            ]);
            $path = $request->file('image')->store('categories_images');
            $category->image = $path;

            Storage::delete($oldPath);
        }

        if ($category->save()) 
        {
            return response()->json($category, 200);
        }
        else 
        {
            
            Storage::delete($path);
            return response()->json([
                'message' => 'Some error occurred!!',
                'status_code' => 500
            ], 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
        // dd($category);
        if($category->delete())
        {
            Storage::delete($category->image);

            return response()->json([
                'message' => 'Category deleted successful !!',
                'status_code' => 200
            ], 200);
        }
        else
        {
            return response()->json([
                'message' => 'Some error occurred!!',
                'status_code' => 500
            ], 500);
        }
    }

    public function profile($id) {
        $categories = Category::where('user_id',$id)->get();
        return response()->json($categories, 200);
    }
}
