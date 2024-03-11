import './WorkoutDetailsPage.css';
import {Workout} from "../../Types/Workout.ts";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function WorkoutDetailsPage(){

    const [workout, setWorkout] = useState<Workout | null | undefined >(undefined);
    const params = useParams();
    const id: string | undefined = params.id;

    const navigate = useNavigate();

    function navigateToAllWorkouts() {
        navigate("/workouts");
    }

    function fetchWorkoutById() {
        axios.get(`/api/workout/${id}`)
            .then(response => {
                console.log("Response: ", response.data);
                setWorkout(response.data);
            })
            .catch(error => {
                console.log("Error fetching data: ", error);
                setWorkout(null);
                }
                )
    }

    useEffect(() => {
        fetchWorkoutById();
    }, [])

    if (workout === null) {
        return <Navigate to="/workouts"/>
    }
    if (workout === undefined) {
        return <p>loading ... </p>
    }
    console.log("Workout: ", workout);
  return (
    <div className="workoutDetailsPage">
        <h1>{workout.name} Details</h1>
        <p>{workout.description}</p>
        <p>Intensity: {workout.intensity}</p>
        <p>Duration in min: {workout.duration}</p>
        <button onClick={navigateToAllWorkouts}>back to all Workouts</button>
    </div>

  )
}