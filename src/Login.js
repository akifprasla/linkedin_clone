import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth } from './Firebase'
import './Login.css'
import img from './Group_3.png'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [email_register, setEmail_register] = useState("");
    const [password_register, setPassword_register] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert("Please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email_register, password_register)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            }).catch(error => alert(error))
    }

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            }).catch(error => alert(error))
    }
    return (
        <div className="login">
            {/* https://www.utm.utoronto.ca/careers/sites/files/careers/public/shared/images/linkedin/linkedin-336x14-logo.png */}
            <img src={img} alt="LinkedIn logo" />
            <form className="login__form">

                <div className="login__left">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email id" />

                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                  
                    <button type="submit" onClick={loginToApp}> Sign in</button>
                </div>

                <div className="login__right">
                    <p>Not a member?</p>

                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name(required if registering)" />

                    <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic Url" />

                    <input value={email_register} onChange={e => setEmail_register(e.target.value)} type="email" placeholder="Email id" />

                    <input value={password_register} onChange={e => setPassword_register(e.target.value)} placeholder="Password" type="Password" />

                    <span className="login__register" onClick={register}> Register Now</span>
                </div>

            </form>
            <footer>
                <p>NOTE: this is not the orignal linkedin and a clone project made for practicing and showing my skills in React JS</p>
            </footer>
        </div>
    )
}

export default Login
