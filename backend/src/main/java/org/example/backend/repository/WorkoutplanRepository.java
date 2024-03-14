package org.example.backend.repository;

import org.example.backend.model.Workoutplan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutplanRepository extends MongoRepository<Workoutplan, String> {
}
