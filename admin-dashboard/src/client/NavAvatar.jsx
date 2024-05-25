import React from "react";
import profileImg from '../images/profile.png';



function NavAvatar({userData}){

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
      };
    return(
        <li className = "nav-item dropdown pe-3">
                <a 
                className="nav-link nav-profile d-flex aliign-items-center pe-0"
                href="#" 
                data-bs-toggle = "dropdown"
                >
                    <img src = {profileImg} alt ="Profile" className="rounded-circle"/>
                    <span className="d-none d-md-block dropdown-toggle ps-2">{userData.fname}</span>
                    </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>{userData.fname} {userData.lname}</h6>
                    <span>Web Developer</span>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>    
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li>
                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                        <span>Need Help?</span> 
                </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li>
                    <a className="dropdown-item d-flex align-items-center" href = "#" onClick={logOut}>
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </li>
    );

}

export default NavAvatar;