<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //
    public function get(){
        return response()->json(Project::get());
    }
    public function delete($id){
        return response()->json(Project::destroy($id));
        
    }
    public function put(Request $request,$id){
        $project = Project::find($id);

        $project->title =$request->input('title');
        $project->subtitle =$request->input('subtitle');
        $project->description =$request->input('description');
        $project->link =$request->input('link');

        $project->save();
        return response()->json($project);

    }
    public function post(Request $request){
        $project = new Project();
        $project->title =$request->input('title');
        $project->subtitle =$request->input('subtitle');
        $project->description =$request->input('description');
        $project->link =$request->input('link');

        $project->save();
        return response()->json($project);

    }
}
