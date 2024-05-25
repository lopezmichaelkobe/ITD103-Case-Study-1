import React, {useState, useEffect}from 'react'
import Card from './Card';
import Reports from './Reports';
import RecentSales from './RecentSales';
import './dashboard.css';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
function Dashboard() {

  const [cars, setCards] = useState([])
  const [users, setUsers] = useState([])
  const [admins, setAdmins] = useState([])

  const fetchData1 =() =>{
    fetch ("http://localhost:5000/cars")
    .then(res =>res.json())
    .then(cars => {
      console.log(cars);
      setCards(cars);
    })
    .catch(e => console.log(e.message));
  };



  const fetchData2 =() =>{
    fetch ("http://localhost:5000/users-list")
    .then(res =>res.json())
    .then(users => {
      console.log(users);
      setUsers(users);
    })
    .catch(e => console.log(e.message));
  };

  const fetchData3 =() =>{
    fetch ("http://localhost:5000/admins-list")
    .then(res =>res.json())
    .then(admins => {
      console.log(admins);
      setAdmins(admins);
    })
    .catch(e => console.log(e.message));
  };



  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();

  }, []);

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
            <div className="row">
             <Card cars={cars} users ={users} admins={admins}/>
             <div className='col-12'>
              <Reports/>
             </div>
             <div className='col-12'>
               <RecentSales/>
             </div>
            </div>
            </div>
            <div className="col-lg-4">
              <RecentActivity/>
              <BudgetReport/>
              <WebTraffic/>
            </div>
        </div>
    </section>
  );
}

export default Dashboard