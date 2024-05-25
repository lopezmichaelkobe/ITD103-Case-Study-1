import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BorrowCarForm({ userData }) {
    const [cars, setCars] = useState([]); 
    // State to hold the list of cars
    const [CarName, setSelectedCar] = useState("");
    const [Power, setPower] = useState("");
    const [Name, setName] = useState(`${userData.fname} ${userData.lname}`);  
    const [Provincecity, setProvincecity] = useState(userData.provincecity); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:5000/cars") // Fetch list of cars from backend
            .then(res => {
                console.log(res.data);
                setCars(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/borrow-create', { CarName, Name, Power, Provincecity})
            .then(res => {
                console.log(res);
                navigate('/dashboard-main');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Rental Car Form</h2>
                    <div className="mb-2">
    <label>Please Choose a Car</label>
    <select
        className="form-select"
        value={CarName}
        onChange={(e) => {
            setSelectedCar(e.target.value);
            setPower(e.target.selectedOptions[0].getAttribute('data-power'));
        }}
    >
        <option value="">Choose a Car</option>
        {cars.map(car => (
            <option key={car._id} value={car.CarName} data-power={car.Power}>{car.CarName} - {car.Power}</option>
        ))}
    </select>
</div>
                    <div className="mb-2">
                        <label>Select your name:</label>
                        <select
                            className="form-select"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        >
                            <option value="">{userData.fname} {userData.lname}</option>
                        </select>
                    </div>
                    



                    <div className="mb-2">
                        <label>Select your Province/City:</label>
                        <select
                            className="form-select"
                            value={Provincecity}
                            onChange={(e) => setProvincecity(e.target.value)}
                        >
                            <option value="">{userData.provincecity}</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BorrowCarForm;
