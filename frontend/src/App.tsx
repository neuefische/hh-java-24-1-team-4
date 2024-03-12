import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import UserProfile from "./components/UserProfile/UserProfile.tsx";
import Workouts from "./components/Workouts/Workouts.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Workout} from "./Types/Workout.ts";
import {Route, Routes} from "react-router-dom";
import WorkoutDetailsPage from "./components/WorkoutDetailsPage/WorkoutDetailsPage.tsx";
import Workoutplan from "./components/Workoutplan/Workoutplan.tsx";

export default function App() {

    const [workouts, setWorkouts] = useState<Workout[]>([])

    function fetchWorkouts() {
        axios.get("/api/workout")
            .then(response => {
                console.log("Response: ", response.data);
                setWorkouts(response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))
    }
    console.log("Workouts: ", workouts);

    useEffect(() => {
        fetchWorkouts();
    } ,[])

  return (
     <Layout>
         <Routes>
             <Route path="/userprofile" element={<UserProfile/>}/>
             <Route path="/workoutplan" element={<Workoutplan/>}/>
             <Route path="/workouts" element={<Workouts workouts={workouts}/>}/>
             <Route path="/workouts/:id" element={<WorkoutDetailsPage/> }/>
         </Routes>
         {/*<Signin/>*/}
     </Layout>
  )
}