import './UserProfile.css'
import {UserData} from "../../Types/UserData.ts";
import {useEffect, useState} from "react";

import axios from 'axios';


export default function UserProfile() {

    const [userGitHubId, setUserGitHubId] = useState<string>("")

    const loadUser = () => {
        axios.get('/api/user/me')
            .then(response => {
                console.log("Response: ", response.data)
                setUserGitHubId(response.data)
                fetchUserById("1")
            })
    }

    const [profileData, setProfileData] = useState<UserData>()

    const fetchUserById = (id: string) => {
            axios.get(`api/user/${id}`)
                .then(response => {
                    setProfileData(response.data)
                })
                .catch(error => console.log("Error fetching data: ", error))
    }

    useEffect(() => {
        loadUser()
    }, []);

  return (
      <div className="UserCard">
          <h1>My Profile</h1>
          <div className="UserProfile">
            <p>Firstname: {profileData?.firstName}</p>
            <p>Lastname: {profileData?.lastName}</p>
            <p>Email: {profileData?.email}</p>
            <p>Password: {profileData?.password}</p>
              <p>GitHubId: {userGitHubId}</p>
          </div>


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