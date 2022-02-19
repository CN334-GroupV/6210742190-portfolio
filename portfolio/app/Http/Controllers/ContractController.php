<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use Illuminate\Http\Request;

class ContractController extends Controller
{
    public function get(){
        return response()->json(Contract::take(1)->first());
        // return About::count() + 1;
    }
    public function put(Request $request){
        $contract = Contract::take(1)->first();
        $contract->name = $request->input('name');
        $contract->greeting = $request->input('greeting');
        $contract->description = $request->input('description');
        $contract->save();
        return response()->json($contract);
    }
    public function post(Request $request){
        $contract = Contract::count();
        if ($contract == 0){
            $contract = new Contract();
            $contract->name = $request->input('name');
            $contract->greeting = $request->input('greeting');
            $contract->description = $request->input('description');
            $contract->save();
            return response()->json($contract);
        }
        else{
            return $this->put($request);
        }
    }
}
