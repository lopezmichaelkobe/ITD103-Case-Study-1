import {Link} from "react-router-dom";
import React from 'react';
import '../pageTitle.css';




function addCarPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Edit User Details</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active"><Link to="/manage-users">{page}</Link></li>
                <li className="breadcrumb-item">
                    Edit User Details
                </li>
            </ol>
       
        </nav>
    </div>
  )
}

export default addCarPageTitle;