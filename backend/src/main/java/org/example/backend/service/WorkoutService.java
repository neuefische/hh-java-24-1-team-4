package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.Workout;
import org.example.backend.repository.WorkoutRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkoutService {
    private final WorkoutRepository workoutRepo;

    public List<Workout> getAllWorkouts() {
        return workoutRepo.findAll();
    }
}
