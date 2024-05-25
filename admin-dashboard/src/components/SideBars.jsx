import React from 'react';
import './sideBar.css';
import navList from '../data/navItem';
import NavItem from './NavItem';
import ManageUsersMain from './ManageUsersMain';

function SideBars({userData}){
    return(
        <aside id ="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                
                
                <li className="nav-item">
                    <a className="nav-link" href = "/dashboard-main">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>


                <li className="nav-item">
                    
                    <a className="nav-link collapsed" data-bs-target="#components-nav" href="./manage-users">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Manage Users</span>
                    </a>
                </li>


                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#forms-nav" href="./manage-admins">
                        <i className="bi bi-journal-text"></i>
                        <span>Manage Admins</span>
                    </a>   
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed"
                    data-bs-target="#tables-nav"
                    data-bs-toggle="collapse"
                    href="#"
                    >
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Manage a Car</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                    id="tables-nav"
                    className="nav-content collapse"
                    data-bs-parent ="#sidebar-nav"
                    >
                        <li>
                            <a href="/car-lists">
                                <i className="bi bi-circle"></i>
                                <span>Car Lists</span>
                            </a>
                        </li>
                        <li>
                            <a href="/edit-car">
                                <i className="bi bi-circle"></i>
                                <span>Edit Cars</span>
                            </a>
                        </li>
                        <li>
                            <a href="/delete-car">
                                <i className="bi bi-circle"></i>
                                <span>Delete Cars</span>
                            </a>
                        </li>
                    </ul>
                </li>                
                <li className="nav-item">
                    <a className="nav-link collapsed"
                    data-bs-target="#charts-nav"
                    data-bs-toggle="collapse"
                    href="#"
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Manage Rented Cars</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                    id="charts-nav"
                    className="nav-content collapse"
                    data-bs-parent ="#sidebar-nav"
                    >
                        <li>
                            <a href="/borrowcar-list">
                                <i className="bi bi-circle"></i>
                                <span>Rented Cars List</span>
                            </a>
                        </li>
                        <li>
                            <a href="/update-borrowcar">
                                <i className="bi bi-circle"></i>
                                <span>Edit Rented Cars</span>
                            </a>
                        </li>
                        <li>
                            <a href="/delete-borrowcar">
                                <i className="bi bi-circle"></i>
                                <span>Delete Rented Cars</span>
                            </a>
                        </li>
                    </ul>
                </li>    

                <li className="nav-heading"></li>
                {navList.map(nav => (
                    <NavItem key = {nav.Id} nav = {nav}/>
                ))}

            </ul>
        </aside>
    );
}

export default SideBars;