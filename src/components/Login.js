import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { auth } from './firebase'


const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);

            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);

            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }


  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Logo"/>
        </Link>

        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login_signIn' onClick={signIn}>Sign In</button>
            </form>
            <p>By Signing in, you agrree to Amazon clone's Terms and Conditions of use & sale. Please see our Privacy Notice, Our Cookie Policie and our internet based ads Notice</p>
            <button className='login_register' onClick={register} >Create account</button>
        </div>
    </div>
  )
}

export default Login