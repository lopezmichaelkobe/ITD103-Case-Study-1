  import React, { Component, useEffect, useState } from "react";
  import AddCarPageTitle from "./create-borrowcar-pagetitle";
  import CreateCarMenu from './create-borrowcar-menu';
  import { useLocation } from 'react-router-dom';

  //import Icons
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import 'remixicon/fonts/remixicon.css';

  //import bootstrap 

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';

  import '../components/appmain.css';
      


  import Headeruser from "./headeruser";

  export default function AddCar() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userData = JSON.parse(params.get('userData'));

    return (
      <main id="main" className="main">
        <Headeruser userData={userData}/>
        <AddCarPageTitle page ='Borrow a Car'/>
        <CreateCarMenu userData ={userData}/>
        
      </main>
    );
  }
