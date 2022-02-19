<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    //
    public function get(){
        return response()->json(Skill::get());
    }
    public function delete($id){
        return response()->json(Skill::destroy($id));
        
    }
    public function put(Request $request,$id){
        $skill = Skill::find($id);
        $skill->skill =$request->input('skill');
        $skill->save();
        return response()->json($skill);

    }
    public function post(Request $request){
        $skill = new Skill();
        $skill->skill =$request->input('skill');
        $skill->save();
        return response()->json($skill);

    }
}
