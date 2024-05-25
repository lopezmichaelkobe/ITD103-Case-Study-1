import React, { Component, useEffect, useState } from "react";
import ShowBorrowCarList from "./show-borrowcar-list-pagetitle";
import BorrowCarTable from './borrowcartable';
import SideBars from "./SideBars";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
    


import HeaderManageUsers from "./HeaderManageAdmin";

export default function AddCar() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <SideBars/>
      <ShowBorrowCarList page ='Rented Cars List'/>
      <BorrowCarTable/>
      
    </main>
  );
}
