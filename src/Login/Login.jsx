import './Login.css';
import warning from '../assets/warning.png';
import logo from '../assets/logo1.svg'
import { useState } from 'react';
import { auth } from "../Firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setError(false)
        
        if (newUser) {
            createUserWithEmailAndPassword(auth, email, pass)
                .then(() => {
                    localStorage.setItem("username", user);
                    localStorage.setItem("email", email)
                })
                .catch((error) => {
                    setError(true)
                    const errormessage = error.message;
                    setErrorMsg(errormessage);
                })
        } else {
            signInWithEmailAndPassword(auth, email, pass)
                .then(() => {
                localStorage.setItem("email", email)
                })
                .catch((error) => {
                    setError(true);
                    const errormessage = error.message;
                    setErrorMsg(errormessage);

                })
        }
    };





    return (
        <div className='login-page'>
            <header>
                <span>from <i>Omar Abordn</i></span>
            </header>

            <img className='logo' src={logo} alt='' />
            <h2 className="title">Social Media <br />Dashboard</h2>
            <form onSubmit={submit}>
                {newUser && (<div className='username'>
                    <input onChange={(e) => setUser(e.target.value)}
                        type='username' id='username' required />
                    <label htmlFor='username'>Username</label>
                </div>)}
                <div className='email'>
                    <input onChange={(e) => setEmail(e.target.value)}
                        type='email' id='email' required />
                    <label htmlFor='email'>E-mail</label>
                </div>
                <div className='password'>
                    <input onChange={(e) => setPass(e.target.value)}
                        type='password' id='password' required />
                    <label htmlFor='password'>Password</label>
                </div>

                {errorMsg && <img className='status'
                    src={warning} alt='' />}
                {errorMsg && <span className="error">Process Failed</span>}
                {errorMsg && <span className="error">{errorMsg}</span>}


                <button type="submit">{newUser ? "Sign Up" : 'Log In'}</button>
                {newUser ? <span className='user-state' >
                    Already have an account? <b onClick={() => {
                        setNewUser(false)
                        setErrorMsg(false)
                    }} >Log In</b>
                </span> : <span className='user-state' >
                    Don't have an account? <b onClick={() => {
                        setNewUser(true)
                        setErrorMsg(false)
                    }} >Sign Up</b>
                </span>}


            </form>
        </div>
    )
}

export default Login
