import './Workoutplan.css';
import axios from "axios";
import {Workout} from "../../Types/Workout.ts";
import {WorkoutPlan} from "../../Types/WorkoutPlan.ts";
import {useEffect, useState} from "react";


export default function Workoutplan(){

    const [workouts, setWorkouts] = useState<Workout[]>([])
    const [currentWeekWorkoutPlan, setCurrentWeekWorkoutPlan] = useState<WorkoutPlan>()
    function fetchWorkouts() {
        axios.get("/api/workout")
            .then(response => {
                console.log("Response: ", response.data);
                setWorkouts(response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))
    }

    function saveCalender(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        setCurrentWeekWorkoutPlan({
            monday: form.monday.value,
            tuesday: form.tuesday.value,
            wednesday: form.wednesday.value,
            thursday: form.thursday.value,
            friday: form.friday.value,
            saturday: form.saturday.value,
            sunday: form.sunday.value,
        } as WorkoutPlan);
    }

    console.log("Workoutplan: ", currentWeekWorkoutPlan);

    useEffect(() => {
        fetchWorkouts();
    }, []);

return (
    <div className="workout-plan">
        <h3>Workoutplan</h3>
        <div className="workoutplan-form">
            <form onChange={saveCalender}>
                <div className="day-area">
                    <label htmlFor="monday">Monday</label>
                    <select name="monday">
                        {workouts.map(workout => (
                                <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
                <div className="day-area">
                    <label htmlFor="tuesday">Tuesday</label>
                    <select name="tuesday">
                        {workouts.map(workout => (
                            <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
                <div className="day-area">
                    <label htmlFor="wednesday">Wednesday</label>
                    <select name="wednesday">
                        {workouts.map(workout => (
                            <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
                <div className="day-area">
                    <label htmlFor="thursday">Thursday</label>
                    <select name="thursday">
                        {workouts.map(workout => (
                            <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
                <div className="day-area">
                    <label htmlFor="friday">Friday</label>
                    <select name="friday">
                        {workouts.map(workout => (
                            <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
                <div className="day-area">
                    <label htmlFor="saturday">Saturday</label>
                    <select name="saturday">
                        {workouts.map(workout => (
                            <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
                <div className="day-area">
                    <label htmlFor="sunday">Sunday</label>
                    <select name="sunday">
                        {workouts.map(workout => (
                            <option key={workout._id}>{workout.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    </div>
)
}