import {Link} from "react-router-dom";
import React from 'react';
import '../pageTitle.css';




function addCarPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Add Car Details</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/userDetails">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active"><Link to="/car-lists">{page}</Link></li>
                <li className="breadcrumb-item">
                    Add Car Details
                </li>
            </ol>
       
        </nav>
    </div>
  )
}

export default addCarPageTitle;