
import "./Navigation.css";
import {Link} from "react-router-dom";
export default function Navigation(): JSX.Element{
    return (

        <nav className="nav">
                 <ul>
                     <li>
                         <Link to={"/userprofile"}>Profile</Link>
                     </li>
                     <li>
                         <Link to={"/workouts"}>Workouts</Link>
                     </li>
                     <li>
                         <Link to={"/workoutplan"}>Workout-Plan</Link>
                     </li>
                 </ul>
         </nav>
    )
}

