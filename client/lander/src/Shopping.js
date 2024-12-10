import React, { useState } from "react";
import Axios from "axios";
import Inventory from './Inventory';
import OrderModify from './OrderModify';
import { useNavigate, NavLink } from "react-router-dom";


function Shopping()
{
    const changee1 = async() => {
        navigate("/PrepareOrder")
    }
    
    function Doit() 
{
    try {
        const response = Axios.post("http://127.0.0.1:5000/api/logout/");
        console.log(response.data);
        navigate("/");
        alert("Logged out successfully!");
    } catch (error) {
        // console.log(formData);
        console.error(error.response ? error.response.data : error.message);
        alert("Error!");
    }    
}
    const navigate = useNavigate();
    return (
        <div>
            <OrderModify />
            <Inventory />

            <button onClick={Doit}>Logout</button>

            <button onClick={changee1}>Click to prepare your order</button>
        </div>
    )
}

export default Shopping;