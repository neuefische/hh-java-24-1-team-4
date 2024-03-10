import {RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineEmail} from "react-icons/md";
import {FaRegUser} from "react-icons/fa";
import './Signin.css';
import {useState} from "react";
export default function Signin() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return(
        <>
            <div>
                <div className="formSignin">
                    <h2>Welcome Back</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="inputbox">
                            <input type="text" name={"firstname"} value={formData.firstname} id={"firstname"} onChange={handleChange} required={true}/>
                            <div className="icon"><FaRegUser/></div>
                            <label htmlFor={"firstname"}>Firstname:</label>

                        </div>

                        <div className="inputbox">
                            <input type="text" name={"lastname"} value={formData.lastname} id={"lastname"} onChange={handleChange} required={true}/>
                            <div className="icon"><FaRegUser/></div>
                            <label htmlFor={"lastname"}>Lastname: </label>

                        </div>

                        <div className="inputbox">
                            <input type="email" name={"email"} value={formData.email} id={"email"} onChange={handleChange} required={true}/>
                            <div className="icon"><MdOutlineEmail/></div>
                            <label htmlFor="email">Email:</label>

                        </div>

                        <div className="inputbox">
                            <input type="password" name={"password"} value={formData.password} id={"password"} onChange={handleChange} required={true}/>
                            <div className="icon"><RiLockPasswordLine/></div>

                            <label htmlFor="password">Password:</label>

                        </div>

                        <button type="submit" className="signin">Sign In</button>
                    </form>
                </div>

            </div>
        </>
    )
}