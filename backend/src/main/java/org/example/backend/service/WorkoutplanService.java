package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.Workoutplan;
import org.example.backend.repository.WorkoutplanRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WorkoutplanService {
    private final WorkoutplanRepository repo;
    public Workoutplan saveWorkoutplan(Workoutplan workoutplan) {
        repo.save(workoutplan);
        return repo.findById(workoutplan.get_id()).orElseThrow();
    }
}
