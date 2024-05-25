import React, {useState, useEffect} from 'react'
import CardFilter from './CardFilter'
import RecentActivityItem from './RecentActivityItem'
import './recentActivity.css'



function RecentActivity() {
 
        const [items, setItems] = useState([]);
        const[filter, setFilter] = useState('Today');
        const handleFilterChange = filter => {
            setFilter(filter);
        };

  return (
    <div className='card'>
        <CardFilter filterChange={handleFilterChange}/>

        <div className='card-body'>
            <h5 className='card-title'>
                Recent Activity <span>|{filter}</span>
            </h5>

            <div className='activity'>
                <RecentActivityItem/>
            </div>
        </div>
    </div>
  )
}

export default RecentActivity