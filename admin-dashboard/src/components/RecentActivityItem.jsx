import React from 'react';

function RecentActivityItem() {
  return (
    <div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>32 min</div>
        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
        <div className='activity-content'>Welcome to Prancep Motors! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Michael Kobe</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
        <div className='activity-content'>Welcome to Prancep Motors! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Charles</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
        <div className='activity-content'>Welcome to Prancep Motors! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Kevin</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
        <div className='activity-content'>Welcome to Prancep Motors!</div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Welt</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
        <div className='activity-content'>Welcome to Prancep Motors!</div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Riel</a>
        </div>
      </div> 
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-dark align-self-start'></i>
        <div className='activity-content'>Welcome to Prancep Motors! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Hans</a>
        </div>
      </div> 
    </div>
  );
}

export default RecentActivityItem;