import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

function Orderstart() {

    console.log(document.cookie);

    const navigate = useNavigate();
    const changee = async() => {
        navigate("/OrderMain");  
    };

    const changee1 = async() => {
        navigate("/PrepareOrder")
    }

    const changee2 = async() => {
        navigate("/UserTasks")
    }

    const changee3 = async() => {
        navigate("/RankSystem")
    }

    const changee4 = async() => {
        navigate("/UpdateOrderStatus")
    }

    const changee5 = async() => {
        navigate("/ItemLocation")
    }

    const changee6 = async() => {
        navigate("/OrderLocations")
    }

    const changee7 = async() => {
        navigate("/Donated")
    }

return (
    <div>
        <button onClick={changee7}>Click here to Donate</button>
        <button onClick={changee}>Click to start your order</button>
        <button onClick={changee1}>Click to prepare your order</button>
        <button onClick={changee2}>Click here to display current orders</button>
        <button onClick={changee3}>Click here to display ranking</button>
        <button onClick={changee4}>Click here to Update the status of order</button>
        <button onClick={changee5}>Click here to View Location of Pieces by ItemID</button>
        <button onClick={changee6}>Click here to View Loaction of Pieces by OrderID</button>
    </div>
);
};

export default Orderstart;