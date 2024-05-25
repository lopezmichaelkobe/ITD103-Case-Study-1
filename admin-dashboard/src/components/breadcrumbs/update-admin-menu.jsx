import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateAdminMenu() {
    const { id } = useParams()

    const[fname, setfname] = useState()
    const[lname, setlname] = useState()
    const[email, setemail] = useState()

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/getusers/" + id);
                    console.log(response);   
                    setfname(response.data.fname)
                    setlname(response.data.lname) 
                    setemail(response.data.email)
                } catch (err){
                    console.log(err);   
                }
            }
            fetchData(); 
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
    axios.put('http://localhost:5000/updateuser/' + id, {fname, lname, email})
        .then(res =>{
            console.log(res);
            navigate('/manage-admins')
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update Admin Details</h2>
                    <div className="mb-2">
                        <label htmlFor="">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value = {fname}
                            onChange={(e) => setfname(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Author"
                            className="form-control"
                            value = {lname}
                            onChange={(e) => setlname(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Enter Publish Year"
                            className="form-control"
                            value = {email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateAdminMenu;