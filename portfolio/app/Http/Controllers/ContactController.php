<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function get(){
        return response()->json(Contact::take(1)->first());
        // return About::count() + 1;
    }
    public function put(Request $request){
        $contact = Contact::take(1)->first();
        $contact->address = $request->input('address');
        $contact->email = $request->input('email');
        $contact->phone = $request->input('phone');
        $contact->map = $request->input('map');

        $contact->save();
        return response()->json($contact);
    }
    public function post(Request $request){
        $count = Contact::count();
        if ($count == 0){
            $contact = new Contact();
            $contact->address = $request->input('address');
            $contact->email = $request->input('email');
            $contact->phone = $request->input('phone');
            $contact->map = $request->input('map');
            $contact->save();
            return response()->json($contact);
        }
        else{
            return $this->put($request);
        }
    }
}
