import React, {useState, useEffect} from 'react'
import './recentSales.css';
import RecentSalesTable from './RecentSalesTable';
import CardFilter from './CardFilter';

function RecentSales() {
    
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);

    };

        const [cars, setCards] = useState([]);

        const fetchData =() =>{
          fetch ("http://localhost:5000/cars")
          .then(res =>res.json())
          .then(cars => {
            console.log(cars);
            setCards(cars);
          })
          .catch(e => console.log(e.message));
        };
      
      
      
        useEffect(() => {
          fetchData();
        }, []);
    

  return (
    <div className='card recent-sales overflow-auto'>
        <CardFilter filterChange ={handleFilterChange}/>
        <div className='card-body'>
            <h5 className='card-title'>
                Search for Cars<span>|{filter}</span>
            </h5>
            <RecentSalesTable cars ={cars}/>
        </div>
    </div>
  )
}

export default RecentSales;