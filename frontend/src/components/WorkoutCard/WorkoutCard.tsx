import './WorkoutCard.css';
import {Workout} from "../../Types/Workout.ts";
import {useNavigate} from "react-router-dom";

type WorkoutCardProps = {
    workout: Workout
}
export default function WorkoutCard({workout}: Readonly<WorkoutCardProps>){

    const navigate = useNavigate();

    function goToWorkoutDetailsPage(id: string) {
        navigate("/workouts/" + id);
    }
    return (
        <button className="workout-card" onClick={() => (goToWorkoutDetailsPage(workout._id))}>
            <h3>{workout.name}🏅</h3>
            <p>{workout.description}</p>
            <p>Intesity: {workout.intensity}</p>
            <p>Duration in min: {workout.duration}</p>
        </button>
    )
}