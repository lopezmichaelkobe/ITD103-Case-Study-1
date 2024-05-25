import React, { Component, useEffect, useState } from "react";
import ManageAdminsPageTitle from "./ManageAdminsPageTitle";
import AdminsTable from './adminsTable';
import { useLocation } from 'react-router-dom';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import Header from "./HeaderManageAdmin";

export default function ManageUsersMain() {

  return (
    <main id="main" className="main">
      <SideBar/>
      <Header/>
      <ManageAdminsPageTitle page ='Manage Admins'/>
      <AdminsTable/>
      
    </main>
  );
}
