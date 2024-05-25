import React, { useState } from 'react';
import './card.css';

function Card({cars, users, admins}) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div className='row'>
            <div className='col-xxl-4 col-md-6'>
                <div className='card info-card sales-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Total Cars Stored
                        </h5>
                        <div className='d-flex align-items-center'>
                            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                                <i className='bi bi-car'></i>
                            </div>
                            <div className='ps-3'>
                                <h6>{cars.length}</h6>
                                <span className='text-success small pt-1 fw-bold'>20%</span>
                                <span className='text-muted small pt-2 ps-1'>Increase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6'>
                <div className='card info-card sales-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                        Admins
                        </h5>
                        <div className='d-flex align-items-center'>
                            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                                <i className="bi bi-person"></i>
                            </div>
                            <div className='ps-3'>
                                <h6>{admins.length}</h6>
                                <span className='text-success small pt-1 fw-bold'>3</span>
                                <span className='text-muted small pt-2 ps-1'>Users Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6'>
                <div className='card info-card sales-card'>

                    <div className='card-body'>
                        <h5 className='card-title'>
                            Users
                        </h5>
                        <div className='d-flex align-items-center'>
                            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className='ps-3'>
                                <h6>{users.length}</h6>
                                <span className='text-success small pt-1 fw-bold'>104</span>
                                <span className='text-muted small pt-2 ps-1'>Users Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
