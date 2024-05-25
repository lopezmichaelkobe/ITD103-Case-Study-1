import React from 'react'
import './main.css';
import PageTitle from './PageTitle';
import CarTable from '../components/carTable';



function Main() {
  return (
    <main id ="main" className="main">
        <PageTitle page ='Car Lists'/>
        <CarTable/>

        
    </main>
  );
  
}

export default Main;    