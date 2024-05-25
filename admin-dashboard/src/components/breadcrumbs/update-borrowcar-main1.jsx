import React, { Component, useEffect, useState } from "react";
import UpdateBorrowCarPageTitle from './update-borrowcar-pagetitle1';
import UpdateCarForm from './update-borrowcar-mainform';


//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';

import HeaderManageUsers from "../HeaderManageAdmin";

export default function ManageUsersMain() {

  return (
    <main id="main" className="main">
      <HeaderManageUsers/>
      <UpdateBorrowCarPageTitle page ='Update Rented Cars'/>
      <UpdateCarForm/>
      
    </main>
  );
}
