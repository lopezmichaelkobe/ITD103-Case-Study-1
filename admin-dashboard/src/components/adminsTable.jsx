import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const { id: _ } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    axios.get('http://localhost:5000/admins-list')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/deleteuser/' + id)
      .then(res => {
        console.log(res)
        navigate('/dashboard-main');
      }).catch(err => console.log(err))
  }

  const filteredUsers = data.filter((UserInfo) =>
    UserInfo.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    UserInfo.lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    UserInfo.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculation
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredUsers.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="row">
      <div className="w-120 bg-white rounded p-4">
        <form className="form-inline my-2 my-lg-0">
          <input
            type="text"
            placeholder="Search by First Name"
            className="form-control mb-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <table className="table table-borderless datatable">
          <thead className="thead-dark">
            <tr>
              <th scope="col mx-2">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col mx-2">Email</th>
              <th scope="col mx-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((UserInfo, index) => {
              return (
                <tr key={index}>
                  <td>{UserInfo.fname}</td>
                  <td>{UserInfo.lname}</td>
                  <td>{UserInfo.email}</td>
                  <td className="">
                    <Link to={`/editadmin/${UserInfo._id}`} className="btn btn-outline-success mx-2">Update</Link>
                    <button onClick={() => handleDelete(UserInfo._id)} className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredUsers.length / perPage) }).map((_, index) => (
            <li key={index} className="page-item">
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsersTable;
