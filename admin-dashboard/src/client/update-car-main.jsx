import React, { Component, useEffect, useState } from "react";
import UpdateCarPageTitle from "./update-car-main-pagetitle";
import UpdateCarMenu from "./UpdateCarMenu";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "./headeruser1";

export default function AddCar() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <UpdateCarPageTitle page ='Edit a Car'/>
      <UpdateCarMenu/>
      
    </main>
  );
}
