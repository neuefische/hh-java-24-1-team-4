import './UserProfile.css'
import {UserData} from "../../Types/UserData.ts";
import {useEffect, useState} from "react";

import axios from 'axios';


export default function UserProfile() {

    const [userGitHubId, setUserGitHubId] = useState<string>("")

    const loadUser = () => {
        axios.get('/api/user/me')
            .then(response => {
                setUserGitHubId(response.data)
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

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080': window.location.origin

        window.open(host + '/oauth2/authorization/github', '_self')
    }

    useEffect(() => {
        loadUser()
    }, []);

    function calculateBmi (): string {
        if (profileData?.weightInKg && profileData?.heightInCm){
            return (profileData.weightInKg / ((profileData.heightInCm / 100) ** 2)).toFixed(2)
        }
        return "no data available"

    }

  return (
      <div className="UserCard">
          <h1>My Profile</h1>
          {userGitHubId === "anonymousUser" ?
                <button onClick={login}>login</button>
            :
              <div className="UserProfile">
                  <p>Firstname: {profileData?.firstName}</p>
                  <p>Lastname: {profileData?.lastName}</p>
                  <p>Email: {profileData?.email}</p>
                  <p>Weight: {profileData?.weightInKg} kg</p>
                  <p>Height: {profileData?.heightInCm} cm</p>
                  <p>Calories eaten per day: {profileData?.caloriesEatPerDay} cal/d</p>
                  <p>Target weight reduction: {profileData?.targetWeightReduce} kg</p>
                  <p>Target Duration for weight reduction: {profileData?.targetTimeInWeek} weeks</p>
                  <p>Current BMI: {calculateBmi()}</p>

{/*                  <button>logout</button>*/}
              </div>
          }

      </div>
  )
}


/*const [userData, setUserData] = useState<UserData>({
     firstName: "", lastName: "", email: "", password: ""
 });*/
/*function updateInputFields(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setUserData({...userData, [event.target.name]: event.target.value});
}*/
/*const postUserData = (userData: UserData) => {
    axios.post("api/user",
        userData
    )
        .then(response => {
            console.log("Response: ", response);
        })
        .catch(error => console.log("Error posting data: ", error))
}*/

/*const deleteUserById = (id: string) => {
    axios.delete(`api/user/${id}`)
        .then(response => {
            console.log("Response: ", response.data.firstName);
            setAllUsers(allUsers.filter(user => user._id !== id));
        })
        .catch(error => console.log("Error fetching data: ", error))
}*/

{/*<button onClick={() => fetchUserData()}>Fetch</button>
            <button onClick={() => fetchUserById("1")}>Fetch 1</button>
            <button onClick={() => fetchUserById("2")}>Fetch 2</button>
            <button onClick={() => updateUserData(userData)}>Update</button>*/}
{/*<form className="userDataInputForm">
              <div className="input-field">
                  <div className="icon"><FaRegUser/></div>
                  <input type="text" name="firstName" value={userData.firstName} placeholder="First Name" onChange={updateInputFields}/>
              </div>
              <div className="input-field">
                  <div className="icon"><FaRegUser/></div>
                  <input type="text" name="lastName" value={userData.lastName} placeholder="Last Name" onChange={updateInputFields}/>
              </div>
              <div className="input-field">
                  <div className="icon"><MdOutlineEmail/></div>
                  <input type="text" name="email" value={userData.email} placeholder="Email" onChange={updateInputFields}/>
              </div>
              <div className="input-field">
                  <div className="icon"><RiLockPasswordLine/></div>
                  <input type="password" name="password" value={userData.password} placeholder="Password" onChange={updateInputFields}/>
              </div>
              <button className="save" onClick={() => postUserData(userData)}>Save</button>
          </form>*/}