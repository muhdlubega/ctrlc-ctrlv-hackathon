import React, { useState } from "react";
import "../Styles/main.scss";
import Signin from "./Signin";
import Signup from "./Signup";

// Define types for props
interface LoginProps {
  handleClose: () => void;
}

interface RegisterProps {
  handleClose: () => void;
}

// Component for login form
function Login(props: LoginProps) {
  return <div><Signin/></div>;
}

// Component for register form
function Register(props: RegisterProps) {
  return <div><Signup/></div>;
}

// Main authentication modal component
export default function AuthModal() {
  // State for whether modal is open and which form is active
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(0);

  // Open and close modal
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Switch between login and register forms
  const handleTabClick = (index: number) => {
    setActiveForm(index);
  };

  // Render the component
  return (
    <div>
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
            {/* Tabs for switching between login and register forms */}
            <ul className="auth-tabs">
              <li
                className={activeForm === 0 ? "active-tab" : ""}
                onClick={() => handleTabClick(0)}
              >
                Login
              </li>
              <li
                className={activeForm === 1 ? "active-tab" : ""}
                onClick={() => handleTabClick(1)}
              >
                Sign Up
              </li>
            </ul>

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
