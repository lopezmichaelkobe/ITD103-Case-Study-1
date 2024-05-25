import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateUserMenu() {
    const { id } = useParams()

    const[CarName, setCarName] = useState()
    const[Power, setPower] = useState()
    const[Name, setName] = useState()
    const[Provincecity, setProvincecity] = useState()

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/getborrow-cars/" + id);
                    console.log(response);   
                    setCarName(response.data.CarName)
                    setPower(response.data.Power) 
                    setName(response.data.Name)
                    setProvincecity(response.data.Provincecity)

                } catch (err){
                    console.log(err);   
                }
            }
            fetchData(); 
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
    axios.put('http://localhost:5000/update-borrowcars/' + id, {CarName, Power, Name, Provincecity})
        .then(res =>{
            console.log(res);
            navigate('/update-borrowcar')
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update User Details</h2>
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
                        <label htmlFor="">Power</label>
                        <input
                            type="text"
                            placeholder="Enter Power"
                            className="form-control"
                            value = {Power}
                            onChange={(e) => setPower(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Power"
                            className="form-control"
                            value = {Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
            <label htmlFor="provincecity">ProvinceCity</label>
            <select
                    id="provincecity"
                    className="form-select"
                    value={Provincecity}
                    onChange={(e) => setProvincecity(e.target.value)}
            >
            <option value="">Choose a Province/City</option>
            <option value="Iligan">Iligan</option>
            <option value="CDO">CDO</option>
            <option value="LanaoDelNorte">LanaoDelNorte</option>
            <option value="Bukidnon">Bukidnon</option>
            <option value="MisamisOriental">MisamisOriental</option>
            <option value="MisamisOcciental">MisamisOcciental</option>
            <option value="Camiguin">Camiguin</option>
            </select>
            </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUserMenu;