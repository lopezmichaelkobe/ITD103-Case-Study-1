import React from 'react';
import './pageTitle.css';




function deleteCarPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Delete a Car's Data</h1>
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

export default deleteCarPageTitle;