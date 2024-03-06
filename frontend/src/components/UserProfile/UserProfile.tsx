import './UserProfile.css'
import {UserData} from "../../Types/UserData.ts";
import {useState} from "react";



export default function UserProfile() {

    const [userData, setUserData] = useState<UserData>({name: " ", weight: undefined, height: undefined});

    function updateUserData(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setUserData({...userData, [event.target.name]: event.target.value});
    }
  return (
      <div className="UserCard">
          <h1>My Profile</h1>
          <p>Name: {userData.name}</p>
          <p>Weight: {userData.weight}</p>
          <p>Height: {userData.height}</p>

          <form className="userDataInputForm">
              <div className="input-field">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" onChange={updateUserData}/>
              </div>
              <div className="input-field">
                  <label htmlFor="weight">Weight:</label>
                  <input type="number" name="weight" onChange={updateUserData}/>
              </div>
              <div className="input-field">
                  <label htmlFor="height">Height:</label>
                  <input type="number" name="height" onChange={updateUserData}/>
              </div>
          </form>
      </div>
  )
}