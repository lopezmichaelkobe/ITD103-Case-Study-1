import React, { Component, useEffect, useState } from "react";
import CarListsPageTitle from "./carListsPageTitle";
import CarTable from './carTable';
import { useLocation } from 'react-router-dom';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import Header from "./HeaderManageAdmin";


export default function CarLists() {

  return (
    <main id="main" className="main">
      <SideBar />
      <Header />
      <CarListsPageTitle page ='Car Lists'/>
      <CarTable/>
      
    </main>
  );
}
