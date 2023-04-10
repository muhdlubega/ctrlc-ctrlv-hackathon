import React, { useState } from "react";
import "../Styles/main.scss";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from '../Pages/Account/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '../Pages/Account/AuthContext';
import ProtectedRoute from '../Pages/Account/ProtectedRoute';

// Define types for props
interface LoginProps {
  handleClose: () => void;
}

interface RegisterProps {
  handleClose: () => void;
}

// Component for login form
function Login(props: LoginProps) {
  return <div>  <AuthContextProvider>
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/genres' element={<Signin />} />
    <Route path='/about' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
    <Route
      path='/account'
      element={
        <ProtectedRoute>
          <Account />
        </ProtectedRoute>
      }
    />
  </Routes>
</AuthContextProvider>
</div>;
}

// Component for register form
function Register(props: RegisterProps) {
  return <div>  <AuthContextProvider>
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/genres' element={<Signin />} />
    <Route path='/about' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
    <Route
      path='/account'
      element={
        <ProtectedRoute>
          <Account/>
        </ProtectedRoute>
      }
    />
  </Routes>
</AuthContextProvider></div>;
}

// Main authentication modal component
export default function AuthModal() {
  // State for whether modal is open and which form is active
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(0);

  // Open and close modal
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Render the component
  return (
    <div className="auth">
      {/* Open modal on click */}
      <a
        className="auth-button"
        onClick={() => {
          handleOpen();
          setActiveForm(0); // Default to login form
        }}
      >
        Login
      </a>

      {/* Modal content */}
      {isOpen && (
        <div className="auth-modal" onClick={handleClose}>
          <div className="auth-content" onClick={(e) => e.stopPropagation()}>

            {/* Render the active form */}
            <div className="auth-form">
              {activeForm === 0 && <Login handleClose={handleClose} />}
              {activeForm === 1 && <Register handleClose={handleClose} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
