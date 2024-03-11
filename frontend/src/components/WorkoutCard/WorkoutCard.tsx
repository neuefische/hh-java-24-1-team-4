import './WorkoutCard.css';
import {Workout} from "../../Types/Workout.ts";

type WorkoutCardProps = {
    workout: Workout
    toggleShowWorkoutDetails: () => void;

}
export default function WorkoutCard({workout, toggleShowWorkoutDetails}: Readonly<WorkoutCardProps>){
    return (
        <button className="workout-card" onClick={toggleShowWorkoutDetails}>
            <h3>{workout.name}</h3>
            <p>{workout.description}</p>
            <p>Intesity: {workout.intensity}</p>
            <p>Duration in min: {workout.duration}</p>
        </button>
    )
}