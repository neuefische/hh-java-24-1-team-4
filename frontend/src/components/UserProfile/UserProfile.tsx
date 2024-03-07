import './UserProfile.css'
import {UserData} from "../../Types/UserData.ts";
import {useEffect, useState} from "react";

import axios from 'axios';



export default function UserProfile() {

    const [userData, setUserData] = useState<UserData>({
        firstName: " ", weightInKg: undefined, heightInCm: undefined
    });

    function updateUserData(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    const postUserData = (userData: UserData) => {
        axios.post("api/user",
            userData
        )
            .then(response => {
                console.log("Response: ", response);
            })
            .catch(error => console.log("Error posting data: ", error))
    }

  return (
      <div className="UserCard">
          <h1>My Profile</h1>
          <p>Name: {userData.firstName}</p>
          <p>Weight: {userData.weightInKg}</p>
          <p>Height: {userData.heightInCm}</p>

            <button onClick={() => postUserData(userData)}>Save</button>

          <form className="userDataInputForm">
              <div className="input-field">
                  <label htmlFor="name">First Name:</label>
                  <input type="text" name="firstName" onChange={updateUserData}/>
              </div>
              <div className="input-field">
                  <label htmlFor="weight">Weight (kg):</label>
                  <input type="number" name="weightInKg" onChange={updateUserData}/>
              </div>
              <div className="input-field">
                  <label htmlFor="height">Height (cm):</label>
                  <input type="number" name="heightInCm" onChange={updateUserData}/>
              </div>
          </form>
      </div>
  )
}