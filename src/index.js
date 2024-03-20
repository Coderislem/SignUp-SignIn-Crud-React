import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dash from "./Dash";
import Users from "./Users";
import "./topstyle.css";
import "./sidestyle.css"

import './all.min.css';
import UpdateUser from "./UpdateUser";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>

    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
      <Route path="/Dash" element={<Dash/>}>
        <Route path="users" element={<Users/>}/>
          <Route path="users/:id" element={<UpdateUser/>}/>
        
      </Route>
     
        
    </Routes>
    </BrowserRouter>
  </div>
);
