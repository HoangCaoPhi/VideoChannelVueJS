<?php

namespace App\Http\Controllers;

use App\Video;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $videos = Video::orderBy('created_at','desc')->paginate(8);
        $videos = Video::with('user')->get();
        return response()->json($videos, 200);
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

        $videos = new Video();
        $videos->name = $request->name;
        $image_path = $request->file('image')->store('video_images');
        $video_path = $request->file('video')->store('video_videos');
        $videos->image = $image_path;
        $videos->video = $video_path;
        $videos->user_id = $request->user_id;

        if ($videos->save()) 
        {
            return response()->json($videos, 200);
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
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(Video $video)
    {
        //
        return response()->json($video);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Video $video)
    {
  
        $request->validate([
            'name'=> 'required|min:3',
        ]);

        $video->name = $request->name;
        $oldPath = $video->image;

        if($request->hasFile('image')) {
            $request->validate([
                'image'=> 'required|image|mimes:jpg,png,jpeg'
            ]);
            $path = $request->file('image')->store('categories_images');
            $video->image = $path;

            Storage::delete($oldPath);
        }

        if ($video->save()) 
        {
            return response()->json($video, 200);
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
     * @param  \App\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        //
        // dd($video);
        if($video->delete())
        {
            Storage::delete($video->image);

            return response()->json([
                'message' => 'Video deleted successful !!',
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
        $videos = Video::where('user_id',$id)->get();
        return response()->json($videos, 200);
    }

    public function search(Request $request) {
        $filters = 'checkView = 1';
        $videoSearch = Video::search($request->name)->where('checkView', '1')->get();
        if($videoSearch != "[]") {
            return response()->json($videoSearch);
        }
        else {
            return response()->json([
                'message' => 'Not Found Video !!',
                'status_code' => 404
            ], 404);
        }
    }
}
