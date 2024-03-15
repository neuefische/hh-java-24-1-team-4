import './Workoutplan.css';
import axios from "axios";
import {Workout} from "../../Types/Workout.ts";
import {NewWorkoutplan, WorkoutPlan} from "../../Types/WorkoutPlan.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {UserData} from "../../Types/UserData.ts";


export default function Workoutplan() {

    const [workouts, setWorkouts] = useState<Workout[]>([])
    const [currentWeekWorkoutPlan, setCurrentWeekWorkoutPlan] = useState<NewWorkoutplan>({})
    const [caloriesNeedToReduce, setCaloriesNeedToReduce] = useState<number>(0)

    function fetchWorkouts() {
        axios.get("/api/workout")
            .then(response => {
                console.log("Response: ", response.data);
                setWorkouts(response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))
    }

    function onWorkoutChange(e: ChangeEvent<HTMLSelectElement>) {
        setCurrentWeekWorkoutPlan({
            ...currentWeekWorkoutPlan, [e.target.name]: {
                ...currentWeekWorkoutPlan[e.target.name as keyof WorkoutPlan]
                , workout: workouts.find(workout => workout._id === e.target.value),
            }
        })
    }

    function onDurationChange(e: ChangeEvent<HTMLInputElement>) {
        setCurrentWeekWorkoutPlan({
            ...currentWeekWorkoutPlan, [e.target.name]: {
                ...currentWeekWorkoutPlan[e.target.name as keyof WorkoutPlan]
                , durationPerDay: e.target.valueAsNumber
            }
        })
    }

    const loadUser = () => {
        axios.get('/api/user/me')
            .then(response => {
                fetchUserById(response.data)
            })
    }
    const [profileData, setProfileData] = useState<UserData | undefined>(undefined)

    const fetchUserById = (id: string) => {
        axios.get(`api/user/${id}`)
            .then(response => {
                setProfileData(response.data)
            })
            .catch(error => console.log("Error fetching data: ", error))
    }

    function calculateCaloriesNeedToReducePerWeekForTargetWeightReduce(): number {
        if (profileData?.weightInKg && profileData?.caloriesEatPerDay &&
            profileData?.targetWeightReduce && profileData?.targetTimeInWeek) {
            const caloriesUsedPerDayFromWeight: number = profileData?.weightInKg * 24 * 1.2;
            const caloriesOverflowPerDay: number = profileData?.caloriesEatPerDay - caloriesUsedPerDayFromWeight;
            const targetWeightReduce: number = profileData?.targetWeightReduce;
            const targetTimeInWeek: number = profileData?.targetTimeInWeek;
            return (caloriesOverflowPerDay * 7) + ((targetWeightReduce * 7000) / targetTimeInWeek);
        }
        return 0;
    }

    function calculateCaloriesReducedByCurrentWorkoutplan(): void {
        if (currentWeekWorkoutPlan) {
            const caloriesBurnedOnMonday = (currentWeekWorkoutPlan.monday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.monday?.durationPerDay ?? 0);
            const caloriesBurnedOnTuesday = (currentWeekWorkoutPlan.tuesday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.tuesday?.durationPerDay ?? 0);
            const caloriesBurnedOnWednesday = (currentWeekWorkoutPlan.wednesday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.wednesday?.durationPerDay ?? 0);
            const caloriesBurnedOnThursday = (currentWeekWorkoutPlan.thursday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.thursday?.durationPerDay ?? 0);
            const caloriesBurnedOnFriday = (currentWeekWorkoutPlan.friday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.friday?.durationPerDay ?? 0);
            const caloriesBurnedOnSaturday = (currentWeekWorkoutPlan.saturday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.saturday?.durationPerDay ?? 0);
            const caloriesBurnedOnSunday = (currentWeekWorkoutPlan.sunday?.workout?.caloriesPerMinute ?? 0) * (currentWeekWorkoutPlan.sunday?.durationPerDay ?? 0);
            const sum = caloriesBurnedOnMonday + caloriesBurnedOnTuesday + caloriesBurnedOnWednesday + caloriesBurnedOnThursday
                + caloriesBurnedOnFriday + caloriesBurnedOnSaturday + caloriesBurnedOnSunday;
            setCaloriesNeedToReduce(sum)
        }
    }

    useEffect(() => {
        fetchWorkouts();
        loadUser();

    }, []);
    useEffect(() => {
        calculateCaloriesReducedByCurrentWorkoutplan();
    }, [currentWeekWorkoutPlan]);

    function postWorkoutPlan(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/workoutplan", currentWeekWorkoutPlan)
            .then(response => {
                console.log("Response: ", response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))

    }

    return (
        <div>
            <div className="workout-plan">
                <h2>Workoutplan</h2>
                <div className="workoutplan-form">
                    <form className="form" onSubmit={postWorkoutPlan}>
                        <div className="day-area">
                            <label htmlFor="monday">Monday</label>
                            <select className="select-activity" name="monday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="duration-input-field-container">
                            <input type="number" name="monday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>

                        <div className="day-area">
                            <label htmlFor="tuesday">Tuesday</label>
                            <select name="tuesday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="duration-input-field-container">
                            <input type="number" name="tuesday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>
                        <div className="day-area">
                            <label htmlFor="wednesday">Wednesday</label>
                            <select name="wednesday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="duration-input-field-container">
                            <input type="number" name="wednesday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>
                        <div className="day-area">
                            <label htmlFor="thursday">Thursday</label>
                            <select name="thursday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="duration-input-field-container">
                            <input type="number" name="thursday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>
                        <div className="day-area">
                            <label htmlFor="friday">Friday</label>
                            <select name="friday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="duration-input-field-container">
                            <input type="number" name="friday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>
                        <div className="day-area">
                            <label htmlFor="saturday">Saturday</label>
                            <select name="saturday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="duration-input-field-container">
                            <input type="number" name="saturday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>
                        <div className="day-area">
                            <label htmlFor="sunday">Sunday</label>
                            <select name="sunday" onChange={onWorkoutChange}>
                                {workouts.map(workout => (
                                    <option key={workout._id} value={workout._id}>{workout.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="save">Save</button>
                        <div className="duration-input-field-container">
                            <input type="number" name="sunday" min="0" onChange={onDurationChange}
                                   placeholder="duration in min"/>
                        </div>

                    </form>
                </div>
                <p>Calories you need to reduce per week for whished weight
                    reduction: {calculateCaloriesNeedToReducePerWeekForTargetWeightReduce()}</p>
                <p>Calories you will reduce this week with through your current workoutplan: {caloriesNeedToReduce}</p>
            </div>
        </div>
    )
}