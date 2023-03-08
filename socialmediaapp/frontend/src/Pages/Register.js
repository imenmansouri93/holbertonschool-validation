import React, { useState } from "react";
import UserService from "../Services/UserService";
import  toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const [birthdate, setBirthdate] = useState('')
   


    const register  = async (e)=> {
        e.preventDefault();
        console.log("form submited");
        console.log("form data", firstname, lastname, email, password, bio, birthdate)

        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            bio: bio,
            birthdate: birthdate,
           
        }

        try {
            const  response = await UserService.register(data)
            console.log("response ===>",response);
            toast.success('User created successfuly ...');

            setFirstname('')
            setLastname('')
            setEmail('')
            setPassword('')
            setBio('')
            setBirthdate('')
            
            
        } catch (err) {
            console.log(err);
            toast.error('Failed while Signup ...');
        }

        
    } 
    return (
        <div className="register">
            <Toaster/>
            <div className="register-cover">

            </div>
            <div className="register-content">
                <div>
                    <h1>DARK SPACE</h1>
                    <p>Dark Space Social Media Application </p>
                </div>
                <div>
                    <form onSubmit= {register}>
                        <div className="form-group">
                            <label> Firstname </label>
                            <input className="input" type="text" value={firstname}
                                onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label> Lastname </label>
                            <input className="input" type="text" value={lastname}
                                onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label> Email </label>
                            <input className="input" type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label> Password </label>
                            <input className="input" type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label> Bio </label>
                            <textarea value={bio}
                                onChange={(e) => setBio(e.target.value)} ></textarea>
                        </div>

                        <div className="form-group">
                            <label> Picture </label>
                            <input className="input" type="file"/>
                        </div>

                        <div className="form-group">
                            <label> Birthdate </label>
                            <input className="input" type="date" value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)} />
                        </div>

                        <button className='btn signup' type="submit">Sign up</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;