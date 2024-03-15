import './Workoutplan.css';
import axios from "axios";
import {Workout} from "../../Types/Workout.ts";
import {WorkoutPlan} from "../../Types/WorkoutPlan.ts";
import React, {useEffect, useState} from "react";


export default function Workoutplan() {

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

    function saveWorkoutplan(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const mondayDuration = formData.get('monday-duration') as string;
        const tuesdayDuration = formData.get('tuesday-duration') as string;
        const wednesdayDuration = formData.get('wednesday-duration') as string;
        const thursdayDuration = formData.get('thursday-duration') as string;
        const fridayDuration = formData.get('friday-duration') as string;
        const saturdayDuration = formData.get('saturday-duration') as string;
        const sundayDuration = formData.get('sunday-duration') as string;
        setCurrentWeekWorkoutPlan({
            monday: workouts.find(workout => workout._id === form.monday.value),
            tuesday: workouts.find(workout => workout._id === form.tuesday.value),
            wednesday: workouts.find(workout => workout._id === form.wednesday.value),
            thursday: workouts.find(workout => workout._id === form.thursday.value),
            friday: workouts.find(workout => workout._id === form.friday.value),
            saturday: workouts.find(workout => workout._id === form.saturday.value),
            sunday: workouts.find(workout => workout._id === form.sunday.value),
        } as WorkoutPlan);
    }

    //console.log("Workoutplan: ", currentWeekWorkoutPlan);


    useEffect(() => {
        fetchWorkouts();
    }, []);

    function postWorkoutPlan(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/workoutplan", currentWeekWorkoutPlan)
            .then(response => {
                console.log("Response: ", response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))

    }

    return (
        <div className="workout-plan">
            <h2>Workoutplan</h2>
            <div className="workoutplan-form">
                <form className="form">
                    <div className="day-area">
                        <label htmlFor="monday">Monday</label>
                        <select className="select-activity" name="monday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="duration-input-field-container">
                        <input type="number" name="monday-duration" min="0"
                               placeholder="duration in min"/>
                    </div>

                    <div className="day-area">
                        <label htmlFor="tuesday">Tuesday</label>
                        <select name="tuesday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="duration-input-field-container">
                        <input type="number" name="tuesday-duration" min="0"
                               placeholder="duration in min"/>
                    </div>
                    <div className="day-area">
                        <label htmlFor="wednesday">Wednesday</label>
                        <select name="wednesday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="duration-input-field-container">
                        <input type="number" name="wednesay-duration" min="0"
                               placeholder="duration in min"/>
                    </div>
                    <div className="day-area">
                        <label htmlFor="thursday">Thursday</label>
                        <select name="thursday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="duration-input-field-container">
                        <input type="number" name="thursday-duration" min="0"
                               placeholder="duration in min"/>
                    </div>
                    <div className="day-area">
                        <label htmlFor="friday">Friday</label>
                        <select name="friday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="duration-input-field-container">
                        <input type="number" name="friday-duration" min="0"
                               placeholder="duration in min"/>
                    </div>
                    <div className="day-area">
                        <label htmlFor="saturday">Saturday</label>
                        <select name="saturday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="duration-input-field-container">
                        <input type="number" name="saturday-duration" min="0"
                               placeholder="duration in min"/>
                    </div>
                    <div className="day-area">
                        <label htmlFor="sunday">Sunday</label>
                        <select name="sunday">
                            {workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="save">Save</button>
                    <div className="duration-input-field-container">
                        <input type="number" name="sunday-duration" min="0"
                               placeholder="duration in min"/>
                    </div>

                </form>
            </div>
        </div>
    )
}