import './Workouts.css';
import {Workout} from "../../Types/Workout.ts";
import WorkoutCard from "../WorkoutCard/WorkoutCard.tsx";
import {useState} from "react";

type WorkoutsProps = {
    workouts: Workout[]
}
export default function Workouts({workouts}: Readonly<WorkoutsProps>) {

    const [showWorkoutDetails, setShowWorkoutDetails] = useState<boolean>(false);

    console.log("Workouts: ", workouts);
    function handleShowWorkoutDetails() {
        setShowWorkoutDetails(!showWorkoutDetails);
    }
    return (
        <div className="workout-list">
            <h2>Workout List</h2>
            <ul className="workouts">
                {workouts.map((workout) => (
                    <li key={workout._id}>
                        <WorkoutCard workout={workout} toggleShowWorkoutDetails={handleShowWorkoutDetails}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}