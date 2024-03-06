package org.example.backend.model;

import java.util.ArrayList;
import java.util.List;

public class WorkoutRepo {
    private List<Workout> workouts;


    public WorkoutRepo() {
        workouts = new ArrayList<>();
        workouts.add(new Workout(
                "1", "Laufen", Intensity.LOW, "Laufen ist gut für die Ausdauer", 60, 600));
        workouts.add(new Workout(
                "2", "Schwimmen", Intensity.MEDIUM, "Schwimmen ist gut für die Muskeln", 45, 500));
        workouts.add(new Workout(
                "3", "Radfahren", Intensity.LOW, "Radfahren ist gut für die Ausdauer", 60, 600));
        workouts.add(new Workout(
                "4", "Krafttraining", Intensity.HIGH, "Krafttraining ist gut für die Muskeln", 45, 400));
        workouts.add(new Workout(
                "5", "Yoga", Intensity.LOW, "Yoga ist gut für die Entspannung", 60, 300));
        workouts.add(new Workout(
                "6", "HIIT", Intensity.HIGH, "HIIT ist gut für die Ausdauer", 30, 700));
        workouts.add(new Workout(
                "7", "Zumba", Intensity.MEDIUM, "Zumba ist gut für die Ausdauer", 45, 500));
        workouts.add(new Workout(
                "8", "Wandern", Intensity.LOW, "Wandern ist gut für die Ausdauer", 120, 800));
        workouts.add(new Workout(
                "9", "Boxen", Intensity.HIGH, "Boxen ist gut für die Muskeln", 45, 600));
        workouts.add(new Workout(
                "10", "Pilates", Intensity.LOW, "Pilates ist gut für die Entspannung", 60, 300));
    }
}
