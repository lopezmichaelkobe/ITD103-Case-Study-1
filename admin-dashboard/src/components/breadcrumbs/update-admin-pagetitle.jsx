import {Link} from "react-router-dom";
import React from 'react';
import '../pageTitle.css';




function addCarPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Edit Admin Details</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active"><Link to="/manage-admins">{page}</Link></li>
                <li className="breadcrumb-item">
                    Edit Admin Details
                </li>
            </ol>
       
        </nav>
    </div>
  )
}

export default addCarPageTitle;