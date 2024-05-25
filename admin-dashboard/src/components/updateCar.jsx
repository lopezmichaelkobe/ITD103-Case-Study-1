import React, { Component, useEffect, useState } from "react";
import UpdateCarPageTitle from "./updateCarPageTitle";
import UsersTable from './usersTable';
import UpdateCarTable from './updateCarTable';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import { useLocation } from 'react-router-dom';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';


import HeaderManageUsers from "./HeaderManageUsers";
import SideBars from "./SideBars";

export default function AddCar() {


  return (
    <main id="main" className="main">

      <HeaderManageUsers /> 
    <SideBars/>
      <UpdateCarPageTitle page ='Edit a Car'/>
      <UpdateCarTable/>
      
    </main>
  );
}
