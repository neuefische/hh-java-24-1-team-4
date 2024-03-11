import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import UserProfile from "./components/UserProfile/UserProfile.tsx";
import WorkoutList from "./components/WorkoutList/WorkoutList.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Workout} from "./Types/Workout.ts";
import {Route, Routes} from "react-router-dom";
import Workoutplan from "./components/Workoutplan/Workoutplan.tsx";



export default function App() {



const [workouts, setWorkouts] = useState<Workout[]>([])

    function fetchWorkouts() {
        axios.get("api/workout")
            .then(response => {
                console.log("Response: ", response.data);
                setWorkouts(response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))
    }
    useEffect(() => {
        fetchWorkouts();
        console.log("Workouts: ", workouts);
    } ,[])

  return (
     <Layout>
         <Routes>
             <Route path="/userprofile" element={<UserProfile/>}/>
             <Route path="/workouts" element={<WorkoutList/>}/>
             <Route path="/workoutplan" element={<Workoutplan/>}/>
         </Routes>
        {/*<UserProfile/>*/}
         {/*<Signin/>*/}
     </Layout>
  )
}


