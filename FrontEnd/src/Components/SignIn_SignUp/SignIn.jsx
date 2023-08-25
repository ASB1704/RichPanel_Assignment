// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
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

  const handleSignIn = () => {
    // Perform sign-up logic
    console.log("Sign in clicked");

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
      <div className="SignIn-wrapper">
        <div className="signin-container">
          <h2>Login to your account</h2>
          <form>
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
              onClick={handleSignIn}
            />
          </form>
          <p>
            New to MyApp?{" "}
            <span onClick={() => navigate("/")}>Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
};


