<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;
use App\Http\Resources\LessonResource;
use Carbon\Carbon;

class LessonController extends Controller
{
    public function index(Request $request) {
        // return LessonResource::collection(Lesson::all());
        $lessons = Lesson::all();
        $lessonsByDate = $lessons->groupBy(function ($item) {
            return Carbon::parse($item->start_time)->format('Y-m-d');
        });

        return response()->json($lessonsByDate);
    }
}
