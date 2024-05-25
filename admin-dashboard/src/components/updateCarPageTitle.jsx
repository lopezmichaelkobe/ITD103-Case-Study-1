import React from 'react';
import './pageTitle.css';
import { useLocation } from 'react-router-dom';




function UpdateCarPageTitle({page}) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userData = JSON.parse(params.get('userData'));
    
  return (
    <div className="pagetitle">
        <h1>Edit a Car</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">{page}</li>
            </ol>
        </nav>
    </div>
  )
}

export default UpdateCarPageTitle;