import 'WorkoutDetailsPage.css'
import {Workout} from "../../Types/Workout.ts";

type WorkoutDetailsPageProps = {
    workout: Workout
}

export default function WorkoutDetailsPage({workout}: Readonly<WorkoutDetailsPageProps>){
  return (
    <div className="WorkoutDetailsPage">
      <h1>{workout.name} Details</h1>
        <p>{workout.description}</p>
        <p>Intensity: {workout.intensity}</p>
        <p>Duration in min: {workout.duration}</p>
    </div>
  )
}