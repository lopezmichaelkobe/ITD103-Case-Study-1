import {Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Users()
{
    const {id: _} = useParams();
    const[data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => { 
        axios.get('http://localhost:3001/')
        .then(res =>{
            console.log(res);
            setData(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/'+ id)
            .then(res =>{
                console.log(res)   
            }).catch(err => console.log(err))
    }
    //search button

    const filteredUsers = data.filter((cars) => cars.CarName.toLowerCase().includes(searchQuery.toLowerCase())
    ,(cars) => cars.Manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
    ,(cars) => cars.Year.toLowerCase().includes(searchQuery.toLowerCase())
    ,(cars) => cars.DriveType.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand text-white" href="#">Car Directory Management System</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item active">
    <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <Link to ="/create" className="nav-link text-white">
                    Add a Car
        </Link>
    </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
    <input type = "text" placeholder="Seach by Car Name"className="form-control mb-2"
                     value ={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
    </form>
  </div>
</nav>
            <div className="row">
            <div className="w-120 bg-white rounded p-4">
  
                <table class="table table-striped table-light">
                    <thead class = "thead-dark">
                        <tr>
                            
                            <th scope = "col mx-2">Car Name</th>
                            <th scope = "col">Manufacturer</th>
                            <th scope = "col">Year</th>
                            <th scope = "col mx-2">DriveType</th>
                            <th scope = "col mx-2">Action</th>
                            <th scope = "col mx-2">{data.length}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUsers.map((cars, index) =>{
                                return <tr key={index}>
                                    <td>{cars.CarName}</td>
                                    <td>{cars.Manufacturer}</td>
                                    <td>{cars.Year}</td>
                                    <td>{cars.DriveType}</td>
                                    <td className="">
                                        <Link to={`/edit/${cars._id}`} className="btn btn-outline-success mx-2">Update</Link>
                                        <button onClick={() => handleDelete(cars._id)} className = "btn btn-outline-danger">Delete</button>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        
    )
}

export default Users;