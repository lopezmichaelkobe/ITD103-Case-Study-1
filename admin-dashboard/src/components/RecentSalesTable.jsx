import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function RecentSalesTable({ cars }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCars, setFilteredCars] = useState(cars);

    // Function to handle changes in the search input
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        // Filter carss based on the search query
        const filtered = cars.filter(car =>
            car.CarName.toLowerCase().includes(query.toLowerCase()) ||
            car.Manufacturer.toLowerCase().includes(query.toLowerCase()) ||
            car.Year.toString().includes(query) ||
            car.DriveType.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCars(filtered);
    };

    return (
        <div className = "search-container">
            
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder={` Search...`} // Using the Font Awesome search icon
                style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='${encodeURIComponent(
                        faSearch.icon[4]
                    )}'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    paddingLeft: '30px', // Adjust padding-left to ensure space for the icon
                    paddingRight: '10px' // Adjust padding-right to ensure space for the text
                }}
            />
            <table className='table table-borderless datatable'>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Car Name</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Year</th>
                        <th scope="col">Drive Type</th>
                        <th scope="col">Power</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCars.map((car, index) => (
                        <tr key={index}>
                            <td>{car.CarName}</td>
                            <td>{car.Manufacturer}</td>
                            <td>{car.Year}</td>
                            <td>{car.DriveType}</td>
                            <td>{car.Power}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentSalesTable;
