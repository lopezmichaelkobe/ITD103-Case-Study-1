import React from "react"
import './logo.css';


function Logo(){

    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return(
        <div className="d-flex align-items-center justify-content-between">
            <a href = "/dashboard-main" className="logo d-flex align-items-center">
                {/*<img src =""alt=""/>*/}
                <span className="d-none d-lg-block">Prancep Motors</span>
            </a>
            <i
            className="bi bi-list toggle-sidebar-btn"
            onClick={handleToggleSidebar}
            ></i>
        </div>
    );
}

export default Logo