package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.Workout;
import org.example.backend.service.WorkoutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/workout")
@RequiredArgsConstructor
public class WorkoutController {

    private final WorkoutService workoutService;

    @GetMapping
    public List<Workout> getAllWorkouts() {
        try {
            return workoutService.getAllWorkouts();
        } catch ( NoSuchElementException e) {
                return List.of();
            }
        }

    @GetMapping("/{id}")
    public ResponseEntity<Workout> getWorkoutById(@PathVariable String id) {
        try {
            Workout workout = workoutService.getWorkoutById(id);
            return ResponseEntity.ok(workout);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

}