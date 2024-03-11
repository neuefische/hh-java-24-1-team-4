import './WorkoutList.css';
import {Workout} from "../../Types/Workout.ts";
import WorkoutCard from "../WorkoutCard/WorkoutCard.tsx";
import {useState} from "react";

type WorkoutsProps = {
    workouts: Workout[]
}
export default function WorkoutList({workouts}: Readonly<WorkoutsProps>) {

    const [showWorkoutDetails, setShowWorkoutDetails] = useState<boolean>(false);

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