import React, { Component, useEffect, useState } from "react";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmainuser.css';
import Header from "./headeruser";
import SideBar from "./sidebaruser";
import Main from "./Main";

export default function appmainuser({ userData }) {
  return (
    <>
      <Header userData={userData} />
      <SideBar userData ={userData}/>
      <Main />

    </>
  );
}



