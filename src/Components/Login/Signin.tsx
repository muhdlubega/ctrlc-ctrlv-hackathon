import { signInWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react'
import {auth} from "../../firebase";


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
      console.log(useCredential)
    }).catch((error) => {
      console.log(error)
    })
  }

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
      <form onSubmit={signIn}>
        <h1>Log in to your account</h1>
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