import React, { Component, useEffect, useState } from "react";
import AddCarPageTitle from "./create-car-main-pagetitle";
import CreateCarMenu from './create-car-menu';

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
      <AddCarPageTitle page ='Car Lists'/>
      <CreateCarMenu/>
      
    </main>
  );
}
