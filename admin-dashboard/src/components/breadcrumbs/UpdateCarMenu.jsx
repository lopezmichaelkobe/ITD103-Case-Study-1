import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateCarMenu() {
    const { id } = useParams()

    const[CarName, setCarName] = useState()
    const[Manufacturer, setManufacturer] = useState()
    const[Year, setYear] = useState()
    const[DriveType, setDriveType] = useState()
    const[Power, setPower] = useState()

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/get/" + id);
                    console.log(response);   
                    setCarName(response.data.CarName)
                    setManufacturer(response.data.Manufacturer) 
                    setYear(response.data.Year)
                    setDriveType(response.data.DriveType)
                    setPower(response.data.Power)

                } catch (err){
                    console.log(err);   
                }
            }
            fetchData(); 
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
    axios.put('http://localhost:5000/update/' + id, {CarName, Manufacturer, Year, DriveType, Power})
        .then(res =>{
            console.log(res);
            navigate('/edit-car')
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update Car Details</h2>
                    <div className="mb-2">
                        <label htmlFor="">Car Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value = {CarName}
                            onChange={(e) => setCarName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Manufacturer</label>
                        <input
                            type="text"
                            placeholder="Enter Manufacturer"
                            className="form-control"
                            value = {Manufacturer}
                            onChange={(e) => setManufacturer(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year Manufactured</label>
                        <input
                            type="text"
                            placeholder="Enter Manufactured Year"
                            className="form-control"
                            value = {Year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Drive Type</label>
                        <input
                            type="text"
                            placeholder="Enter DriveType"
                            className="form-control"
                            value = {DriveType}
                            onChange={(e) => setDriveType(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
    <label htmlFor="power">Power</label>
    <select
        id="power"
        className="form-select"
        value={Power}
        onChange={(e) => setPower(e.target.value)}
    >
        <option value="">Choose an Engine Power</option>
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

export default UpdateCarMenu;