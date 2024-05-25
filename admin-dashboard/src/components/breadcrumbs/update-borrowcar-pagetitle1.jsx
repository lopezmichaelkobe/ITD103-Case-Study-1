import React from 'react';
import '../pageTitle.css';




function ManageAdminsPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Edit Rented Car Details</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">
                <a href="/update-borrowcar">
                    {page}
                </a>
                    </li>
                <li className="breadcrumb-item">
                    Edit Rented Car Details
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default ManageAdminsPageTitle;