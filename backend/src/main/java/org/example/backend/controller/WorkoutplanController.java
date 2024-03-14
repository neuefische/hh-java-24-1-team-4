package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.Workoutplan;
import org.example.backend.service.WorkoutplanService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/workoutplan")
@RequiredArgsConstructor
public class WorkoutplanController {

    private final WorkoutplanService service;
    @PostMapping
    public Workoutplan postWorkoutplan(@RequestBody Workoutplan workoutplan) {
        return service.saveWorkoutplan(workoutplan);
    }
}
