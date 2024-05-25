
import React, { Component, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './auth.css';
import Pic from '../images/dealership.png';

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [provincecity, setProvincecity] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "dilidiayko") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password, provincecity);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
          provincecity,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
            navigate('/sign-in');
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper" style={{ 
          backgroundImage: `url(${Pic})`,
          backgroundSize: 'cover', // Ensures the background covers the entire element
          backgroundRepeat: 'no-repeat' // Prevents the background from repeating
        }}>
          <div className="auth-inner">
            <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              <div>
                Register as:  <br></br>
                <input
                  type="radio"
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />
                User
                <input
                  type="radio"
                  name="UserType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                />
                Admin
              </div>
              {userType == "Admin" ? (
                <div className="mb-3">
                  <label>Secret Key</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Secret Key"
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>
              ) : null}
    
              <div className="mb-3">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
    
              <div className="mb-3">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
    
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
              {userType == "User" ? (
                <div className="mb-3">
        <label>Province/City Name</label>
        <select
            className="form-select"
            onChange={(e) => setProvincecity(e.target.value)}
        >
            <option value="">Choose a Province or City</option>
            <option value="Iligan">Iligan</option>
            <option value="CDO">CDO</option>
            <option value="LanaoDelNorte">Lanao Del Norte</option>
            <option value="Bukidnon">Bukidnon</option>
            <option value="MisamisOriental">Misamis Oriental</option>
            <option value="MisamisOccidental">Misamis Occidental</option>
            <option value="Camiguin">Camiguin</option>    </select>
    </div>
              ) : null}
    
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered your account? <a href="/sign-in">sign in?</a>
              </p>
            </form>
          </div>
        </div>
      );
    }