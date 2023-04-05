import React, {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='login-container'>
      <form>
        <h1>Log in</h1>
        <input type='email' placeholder='Enter your email' value={email}></input>
        <input type='password' placeholder='Enter your password' value={password}></input>

      </form>
    
    </div>
  )
}

export default Login