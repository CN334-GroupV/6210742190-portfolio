<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function get(){
        return response()->json(About::take(1)->first());
        // return About::count() + 1;
    }
    public function put(Request $request){
        $about = About::take(1)->first();
        $about->name = $request->input('name');
        $about->greeting = $request->input('greeting');
        $about->description = $request->input('description');
        $about->save();
        return response()->json($about);
    }
    public function post(Request $request){
        $count = About::count();
        if ($count == 0){
            $about = new About();
            $about->name = $request->input('name');
            $about->greeting = $request->input('greeting');
            $about->description = $request->input('description');
            $about->save();
            return response()->json($about);
        }
        else{
            return $this->put($request);
        }
    }

}
