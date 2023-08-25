// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("username");
    const storedRememberMe = localStorage.getItem("checkbox");

    if (storedRememberMe === "true") {
      setRememberMe(true);
      setEmail(storedEmail || "");
    }
  }, []);

  const handleSignUp = () => {
    // Perform sign-up logic
    console.log("Sign up clicked");

    // Store email and rememberMe in local storage
    if (rememberMe) {
      localStorage.setItem("username", email);
      localStorage.setItem("checkbox", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("checkbox");
    }
  };

  return (
    <>
      <div className="SignUp-wrapper">
        <div className="signup-container">
          <h2>Create Account</h2>
          <form>
            <label htmlFor="text">Name</label>
            <input type="text" id="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>

            <input
              type="submit"
              value="Sign Up"
              id="signUpButton"
              onClick={handleSignUp}
            />
          </form>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/SignIn")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};


