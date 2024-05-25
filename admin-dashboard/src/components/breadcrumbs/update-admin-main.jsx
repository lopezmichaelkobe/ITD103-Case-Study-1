import React, { Component, useEffect, useState } from "react";
import UpdateAdminPageTitle from "./update-admin-pagetitle";
import UpdateAdminMenu from "./update-admin-menu";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "../HeaderManageAdmin";

export default function AddCar() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <UpdateAdminPageTitle page ='Manage Admins'/>
      <UpdateAdminMenu/>
      
    </main>
  );
}
