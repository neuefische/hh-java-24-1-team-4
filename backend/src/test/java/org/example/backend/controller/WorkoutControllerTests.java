package org.example.backend.controller;

import org.example.backend.model.Workout;
import org.example.backend.repository.WorkoutRepository;
import org.example.backend.service.WorkoutService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
class WorkoutControllerTests {

    @Autowired
    private MockMvc mvc;
    @Test
    void getAllWorkouts_shouldReturnEmptyList_whenRepositoryIsEmpty()throws Exception{
        mvc.perform(MockMvcRequestBuilders.get("/api/workout"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @Autowired
    private WorkoutRepository workoutRepository;

    @DirtiesContext
    @Test
    void getAllWorkouts_shouldReturnListWithOneObject_whenOneObjectWasSavedInRepository() throws Exception {
        Workout workout = new Workout("1", "Radfahren", Intensity.LOW, "Radfahren tut mir gut", 600);
        workoutRepository.save(workout);

        mvc.perform(MockMvcRequestBuilders.get("/api/workout"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                [
                                 {
                                    "_id": "1",
                                    "name": "Radfahren",
                                    "intensity": "LOW",
                                    "description": "Radfahren tut mir gut",
                                    "duration": 600
                                 }
                                ]
                                """
                ));
    }

    @DirtiesContext
    @Test
    void getWorkoutById_shouldReturnWorkoutWithId_whenWorkoutWithIdExists() throws Exception {
        Workout workout = new Workout("1", "Radfahren", Intensity.LOW, "Radfahren tut mir gut", 600);
        workoutRepository.save(workout);

        mvc.perform(MockMvcRequestBuilders.get("/api/workout/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                {
                                    "_id": "1",
                                    "name": "Radfahren",
                                    "intensity": "LOW",
                                    "description": "Radfahren tut mir gut",
                                    "duration": 600
                                }
                                """
                ));
    }

    @DirtiesContext
    @Test
    void getWorkoutById_shouldReturnNotFound_whenWorkoutWithIdDoesNotExist() throws Exception {
        Workout workout = new Workout("1", "Radfahren", Intensity.LOW, "Radfahren tut mir gut", 600);
        workoutRepository.save(workout);
        mvc.perform(MockMvcRequestBuilders.get("/api/workout/2"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Mock
    private WorkoutService workoutService;

    @InjectMocks
    private WorkoutController workoutController;

    @DirtiesContext
    @Test
    void testGetAllWorkoutsWithNoSuchElementException() {
        // Mock the behavior of workoutService to throw a NoSuchElementException
        when(workoutService.getAllWorkouts()).thenThrow(new NoSuchElementException());

        // Call the method under test
        List<Workout> result = workoutController.getAllWorkouts();

        // Verify that an empty list is returned when a NoSuchElementException is caught
        assertEquals(List.of(), result);
    }
}
