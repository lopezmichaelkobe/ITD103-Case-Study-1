import React, { Component, useEffect, useState } from "react";
import UpdateBorrowCarPageTitle from './update-borrowcar-pagetitle';
import UpdateBorrowCarTable from './update-borrowcar-table';


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
      <UpdateBorrowCarPageTitle page ='Update Rented Cars'/>
      <UpdateBorrowCarTable/>
      
    </main>
  );
}
