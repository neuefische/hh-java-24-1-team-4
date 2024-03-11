import {Route, Routes} from 'react-router-dom';
import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import UserProfile from "./components/UserProfile/UserProfile.tsx";
import Workoutplan from "./components/Workoutplan/Workoutplan.tsx";
import Workouts from "./components/Workouts/Workouts.tsx";



export default function App() {



  return (
    <>
     <Layout>
         <Routes>
             <Route path="/userprofile" element={<UserProfile/>}/>
             <Route path="/workouts" element={<Workouts/>}/>
             <Route path="/workoutplan" element={<Workoutplan/>}/>
         </Routes>
        {/*<UserProfile/>*/}
         {/*<Signin/>*/}
     </Layout>

    </>
  )
}


