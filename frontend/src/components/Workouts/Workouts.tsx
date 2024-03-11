import './Workouts.css';
import {Workout} from "../../Types/Workout.ts";
import WorkoutCard from "../WorkoutCard/WorkoutCard.tsx";

type WorkoutsProps = {
    workouts: Workout[]
}
export default function Workouts({workouts}: Readonly<WorkoutsProps>) {

    console.log("Workouts: ", workouts);

    return (
        <div className="workout-list">
            <h2>Workout List</h2>
            <ul className="workouts">
                {workouts.map((workout) => (
                    <li key={workout._id}>
                        <WorkoutCard workout={workout}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}