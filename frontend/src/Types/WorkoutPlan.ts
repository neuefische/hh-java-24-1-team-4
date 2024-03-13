import {Workout} from "./Workout.ts";

export type WorkoutPlan = {
    monday: Workout;
    tuesday: Workout;
    wednesday: Workout;
    thursday: Workout;
    friday: Workout;
    saturday: Workout;
    sunday: Workout;
}