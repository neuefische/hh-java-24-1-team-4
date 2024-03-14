import {Workout} from "./Workout.ts";

export type WorkoutPlan = {
    monday: {
        workout: Workout;
        duration: number;
    };
    tuesday: {
        workout: Workout;
        duration: number;
    };
    wednesday: {
        workout: Workout;
        duration: number;
    };
    thursday: {
        workout: Workout;
        duration: number;
    };
    friday: {
        workout: Workout;
        duration: number;
    };
    saturday: {
        workout: Workout;
        duration: number;
    };
    sunday: {
        workout: Workout;
        duration: number;
    };
}