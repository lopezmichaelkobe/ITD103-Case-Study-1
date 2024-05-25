import React, { Component, useState, ReactDOM } from "react";
import './auth.css';
import Pic from '../images/dealership.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if (data.status == "ok") {
        alert("login successful");
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);

        window.location.href = "./dashboard-main";
      }
      else{
        alert("Wrong Username and Password! Please try again!");
      }
    });


  }

  return (
    <div className="auth-wrapper" style={{ 
          backgroundImage: `url(${Pic})`,
          backgroundSize: 'cover', // Ensures the background covers the entire element
          backgroundRepeat: 'no-repeat' // Prevents the background from repeating
        }}>
          <div className="auth-inner" >
            <form onSubmit={handleSubmit}>
              <h3>Sign In</h3>
    
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
    
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
    
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>
    
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
              Don't have an account?   <a href="/sign-up">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      );
    }
