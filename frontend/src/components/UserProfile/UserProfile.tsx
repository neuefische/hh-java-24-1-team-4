import './UserProfile.css'
import {UserData} from "../../Types/UserData.ts";
import {useState} from "react";

import axios from 'axios';
import {FaRegUser} from "react-icons/fa";
import {FaWeightScale} from "react-icons/fa6";
import {GiBodyHeight} from "react-icons/gi";

export default function UserProfile() {

    const [userData, setUserData] = useState<UserData>({
        firstName: " ", weightInKg: undefined, heightInCm: undefined
    });
    const [allUsers, setAllUsers] = useState<UserData[]>([]);
    function updateInputFields(event: React.ChangeEvent<HTMLInputElement>) {
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

    const fetchUserData = () => {
        axios.get("api/user")
            .then(response => {
                console.log("Response: ", response.data);
                setAllUsers(response.data);
            })
            .catch(error => console.log("Error fetching data: ", error))
    }

    const fetchUserById = (id: string) => {
        axios.get(`api/user/${id}`)
            .then(response => {
                console.log("Response: ", response.data.firstName);
            })
            .catch(error => console.log("Error fetching data: ", error))
    }

    function updateUserData(userData: UserData) {
        axios.put(`api/user/${userData._id}`,
            userData
        )
            .then(response => {
                console.log("Response: ", response.data.firstName);
                setUserData(response.data)
            })
            .catch(error => console.log("Error fetching data: ", error))
    }

    /*const deleteUserById = (id: string) => {
        axios.delete(`api/user/${id}`)
            .then(response => {
                console.log("Response: ", response.data.firstName);
                setAllUsers(allUsers.filter(user => user._id !== id));
            })
            .catch(error => console.log("Error fetching data: ", error))
    }*/

  return (
      <div className="UserCard">
          <h1>My Profile</h1>
          <p>Name: {userData.firstName}</p>
          <p>Weight: {userData.weightInKg}</p>
          <p>Height: {userData.heightInCm}</p>

          <div>
              <ul>
                    {allUsers.map((user) => (
                        <li key={user._id}>
                            {user.firstName}
                            {/*<button onClick={deleteUserById(user._id)}>Delete</button>*/}
                        </li>

                    ))}
                </ul>
          </div>

            <button onClick={() => fetchUserData()}>Fetch</button>
            <button onClick={() => fetchUserById("1")}>Fetch 1</button>
            <button onClick={() => fetchUserById("2")}>Fetch 2</button>
            <button onClick={() => updateUserData(userData)}>Update</button>
          <form className="userDataInputForm">
              <div className="input-field">
                  <div className="icon"><FaRegUser/></div>
                  <label htmlFor="name">First Name:</label>
                  <input type="text" name="firstName" onChange={updateInputFields}/>
              </div>
              <div className="input-field">
                  <div className="icon"><FaWeightScale /></div>
                  <label htmlFor="weight">Weight (kg):</label>
                  <input type="number" name="weightInKg" onChange={updateInputFields}/>
              </div>
              <div className="input-field">
                  <div className="icon"><GiBodyHeight/></div>
                      <label htmlFor="height">Height (cm):</label>
                  <input type="number" name="heightInCm" onChange={updateInputFields}/>
              </div>
              <button className="signin" onClick={() => postUserData(userData)}>Sign In</button>
          </form>
      </div>
  )
}