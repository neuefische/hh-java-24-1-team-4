package org.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Workout {
    private String _id;
    private String name;
    private Intensity intensity;
    private String description;
    private int duration;
}
