package org.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Data
@AllArgsConstructor
@Builder
public class Workoutplan {
    private String _id;
    private Workout monday;
    private Workout tuesday;
    private Workout wednesday;
    private Workout thursday;
    private Workout friday;
    private Workout saturday;
    private Workout sunday;
}
