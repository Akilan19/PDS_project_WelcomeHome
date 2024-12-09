import React, { useState } from "react";
import Axios from "axios";
import Inventory from './Inventory';
import OrderModify from './OrderModify';
import { useNavigate, NavLink } from "react-router-dom";

function doit() 
{
    try {
        const response = Axios.post("http://127.0.0.1:5000/api/logout/");
        console.log(response.data);
        alert("Logged out successfully!");
    } catch (error) {
        console.log(formData);
        console.error(error.response ? error.response.data : error.message);
        alert("Error!");
    }    
}

function Shopping()
{
    return (
        <div>
            <OrderModify />
            <Inventory />

            <button onClick={doit}>Logout</button>
        </div>
    )
}

export default Shopping;