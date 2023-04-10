import { signInWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react'
import {auth} from "../../firebase";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Pages/Account/AuthContext';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
        console.log(e.message)
      }
    }
  };

  /*const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    }catch (err) {
      console.error(err);
    }
    };
  */

  return (
    <div className='signin-container'>
      <div>
        <h1>Sign in to your account</h1>
        <p>
          Don't have an account yet?{' '}
          <Link to='Signup' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
         type='email'
          placeholder='Enter your email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
        <input 
        type='password' 
        placeholder='Enter your password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit"> Sign In</button>
      </form>
    </div>
  )
  }

export default Signin