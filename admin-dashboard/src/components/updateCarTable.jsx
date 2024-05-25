import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";

function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const { id: _ } = useParams();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5000/cars")
      .then(res => res.json())
      .then(cars => {
        setCars(cars);
      })
      .catch(e => console.log(e.message));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deletecar/${id}`)
      .then(res => {
        console.log(res);
        // After deletion, refresh the data
        fetchData();
      })
      .catch(err => console.log(err));
  };

  const filteredCars = cars.filter((car) => (
    car.CarName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.Manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.Year.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.DriveType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.Power.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  // Pagination calculation
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredCars.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="row">
      <div className="w-120 bg-white rounded p-4">
        <form className="form-inline my-2 my-lg-0">
          <input
            type="text"
            placeholder="Search by Car Name"
            className="form-control mb-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <table className='table table-borderless datatable'>
          <thead className="thead-light">
            <tr>
              <th scope="col">Car Name</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Year</th>
              <th scope="col">DriveType</th>
              <th scope="col mx-2">Power</th>
              <th scope="col mx-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((car, index) => (
              <tr key={index}>
                <td>{car.CarName}</td>
                <td>{car.Manufacturer}</td>
                <td>{car.Year}</td>
                <td>{car.DriveType}</td>
                <td>{car.Power}</td>
                <td className="">
                  <Link to={`/edit/${car._id}`} className="btn btn-outline-success mx-2">Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredCars.length / perPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UsersTable;
