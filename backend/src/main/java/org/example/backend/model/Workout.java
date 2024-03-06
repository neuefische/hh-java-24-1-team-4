package org.example.backend.model;

public record Workout(String id, String name, Intensity intensity, String description, int duration, int burnedCaloriesPerHourAndUserWeight) {
}
