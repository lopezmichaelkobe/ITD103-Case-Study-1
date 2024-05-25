import React, { Component, useEffect, useState } from "react";
import CarListsPageTitle from "./carListsPageTitle";
import UsersTable from './usersTable';
import UpdateCarPageTitle from './updateCarPageTitle';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import HeaderManageUsers from "./HeaderManageUsers";


export default function editCar() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <SideBar/>
      <UpdateCarPageTitle page ='Update a Car '/>
      <UsersTable/>
      
    </main>
  );
}
