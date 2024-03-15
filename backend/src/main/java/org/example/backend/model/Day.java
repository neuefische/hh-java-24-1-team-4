package org.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Day {
    private Workout workout;
    private int durationPerDay;
}
