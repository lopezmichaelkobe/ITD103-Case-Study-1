import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/appmain";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/dashboard-main";
import Sample from "./components/sample";
import ManageUsersMain from "./components/ManageUsersMain";
import ManageAdminsMain from "./components/ManageAdminsMain";

import CarLists from "./components/carLists";
import UpdateCar from "./components/updateCar"; 
import DeleteCar from "./components/deleteCar";
import UpdateCarMain from './components/breadcrumbs/update-car-main';
import CreateCarMenu from './components/breadcrumbs/create-car-main';
import UpdateAdminMain from './components/breadcrumbs/update-admin-main';
import UpdateUserMain from './components/breadcrumbs/update-user-main';
import Appmainuser from './client/appmainuser';
import AddBorrowCar from './client/create-borrowcar-main';
import ShowBorrowCarList from './components/show-borrowedcar-list-main';
import UpdateBorrowCar from './components/update-borrowcar-main';
import UpdateBorrowCarForm from './components/breadcrumbs/update-borrowcar-main1';
import DeleteBorrowCarsMain from './components/DeleteBorrowCarsMain';

import Test from'./components/test';


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <Login /> : <Main />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard-main" element={<UserDetails />} />
          <Route path="/appmain" element={<Main />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/manage-users"element={<ManageUsersMain/>}/>
          <Route path="/manage-admins"element={<ManageAdminsMain/>}/>
          <Route path="/car-lists"element={<CarLists/>}/>
          <Route path="/edit-car"element={<UpdateCar/>}/>
          <Route path="/delete-car"element={<DeleteCar/>}/>
          <Route path = '/edit/:id' element={<UpdateCarMain />}></Route>
          <Route path = '/editadmin/:id' element={<UpdateAdminMain />}></Route>
          <Route path = 'car-lists/create-car-main' element={<CreateCarMenu />}></Route>
          <Route path = '/edituser/:id' element={<UpdateUserMain />}></Route>
          <Route path = '/borrowcar-list' element={<ShowBorrowCarList />}></Route>
          <Route path = '/update-borrowcar' element={<UpdateBorrowCar />}></Route>
          <Route path = '/edit-borrowcar/:id' element={<UpdateBorrowCarForm />}></Route>
          <Route path = '/delete-borrowcar' element={<DeleteBorrowCarsMain />}></Route>
          




          {/*User Routes*/}
          <Route path = '/user-main' element={<Appmainuser />}></Route>
          <Route path = '/borrow-car' element={<AddBorrowCar />}></Route>

          {/*Texting Area */}
          <Route path = '/test' element={<Test />}></Route>


          


 
          
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
