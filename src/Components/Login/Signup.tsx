import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from "../../firebase";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Pages/Account/AuthContext';

export {};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
        console.log(e.message)
      }
    }
  };

  return (
    <div className='signup-container'>
      <div>
        <h1>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account ?{' '}
          <Link to='/' className='underline'>
            Sign in.
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
        <button type="submit"> Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Signup;
