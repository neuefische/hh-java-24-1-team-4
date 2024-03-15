import {Workout} from "./Workout.ts";

export type WorkoutPlan = {
    monday: {
        workout: Workout;
        durationPerDay: number;
    };
    tuesday: {
        workout: Workout;
        durationPerDay: number;
    };
    wednesday: {
        workout: Workout;
        durationPerDay: number;
    };
    thursday: {
        workout: Workout;
        durationPerDay: number;
    };
    friday: {
        workout: Workout;
        durationPerDay: number;
    };
    saturday: {
        workout: Workout;
        durationPerDay: number;
    };
    sunday: {
        workout: Workout;
        durationPerDay: number;
    };
}

export type  NewWorkoutplan = {
    monday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
    tuesday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
    wednesday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
    thursday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
    friday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
    saturday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
    sunday?: {
        workout?: Workout;
        durationPerDay?: number;
    };
}