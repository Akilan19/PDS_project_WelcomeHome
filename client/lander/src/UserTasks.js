import React, { useEffect, useState } from "react";
import axios from "axios";

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

const UserTasks = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
    // Fetch all orders related to the current user
    const fetchOrders = async (e) => {
    setError(""); // Clear previous error messages
    setOrders([]); // Clear previous results
    try {
        const response = await axios.get("http://127.0.0.1:5000//api/person-orders/");
        setOrders(response.data.order_details);
      } catch (err) {
        console.log(orders);
        if (err.response) {
            setError(err.response.data.message); // Show error returned from API
        } else {
            setError("An error occurred while fetching data");
        }
    }
    };
  return (
    <div>
        <h1>User's Tasks</h1>
        <button onClick={fetchOrders}>Load Tasks</button>
        {orders.length === 0 ? (
            <p>No orders found.</p>
        ) : (
            orders.map((order) => (
                <div key={order.orderid} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                    <h3>Order ID: {order.orderid}</h3>
                    <p>Role: {order.role}</p>
                </div>
            ))
        )}
        {error && <p>{error}</p>}
        <button onClick={doit}>Logout</button>
    </div>
);
};

export default UserTasks;
