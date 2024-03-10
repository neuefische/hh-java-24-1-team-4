
import "./Navigation.css";
import {Link} from "react-router-dom";
export default function Navigation(): JSX.Element{
    return (

        <nav className="nav">
                 <ul>
                     <li>Home</li>
                     <li>
                         <a>Profile</a>
                     </li>
                     <li>Workouts</li>
                     <li>Workout-Plan</li>
                 </ul>
         </nav>
    )
}

