import React, { useState } from "react";
import Axios from "axios";

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

return(
    <button onClick={doit}>Logout</button>
);
