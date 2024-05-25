import React, { Component, useEffect, useState } from "react";
import UpdateCarPageTitle from "./update-car-main-pagetitle";
import UpdateCarMenu from "./UpdateCarMenu";
import { useLocation } from 'react-router-dom';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "../HeaderManageAdmin";

export default function AddCar() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userData = JSON.parse(params.get('userData'));
  return (
    
    <main id="main" className="main">
      <HeaderManageUsers userData={userData}/>
      <UpdateCarPageTitle page ='Edit a Car'/>
      <UpdateCarMenu userData={userData}/>
      
    </main>
  );
}
