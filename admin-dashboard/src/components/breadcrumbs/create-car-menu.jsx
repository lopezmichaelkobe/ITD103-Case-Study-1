import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {

    const [CarName, setCarName] = useState()
    const [Manufacturer, setManufacturer] = useState()
    const [Year, setYear] = useState()
    const [DriveType, setDriveType] = useState()
    const [Power, setPower] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/create-car', {CarName, Manufacturer, Year, DriveType, Power})
        .then(res =>{
            console.log(res);
            navigate('/dashboard-main');
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Car</h2>
                    <div className="mb-2">
                        <label htmlFor="">Car Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setCarName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Manufacturer</label>
                        <input
                            type="text"
                            placeholder="Enter Manufacturer"
                            className="form-control"
                            onChange={(e) => setManufacturer(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year Manufactured</label>
                        <input
                            type="text"
                            placeholder="Enter Manufactured Year"
                            className="form-control"
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">DriveType</label>
                        <input
                            type="text"
                            placeholder="Set Drive Type"
                            className="form-control"
                            onChange={(e) => setDriveType(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                 <label htmlFor="">Power</label>
                <select
                    className="form-select"
                    onChange={(e) => setPower(e.target.value)}
                >       
                    <option value="">Choose Propulsion Power</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Electric">Electric</option>
                </select>
                </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;