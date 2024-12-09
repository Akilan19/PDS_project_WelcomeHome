import React, { useState } from "react";
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

const UpdateOrderStatus = () => {
    const [formData, setFormData] = useState({
        OrderID: "",
        status: "",
        date: "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleUpdateStatus = async (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        setError(""); // Clear previous error messages
        setMessage(""); // Clear previous success messages

        const formatDate = (date) => {
            const d = new Date(date);
            const day = String(d.getDate()).padStart(2, "0");
            const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
            const year = d.getFullYear();
            return `${day}-${month}-${year}`;
        };

        try {
            const formattedData = {
                OrderID: formData.OrderID,
                status: formData.status,
                date: formatDate(formData.date), // Use correct date formatting
            };

            const response = await axios.post("http://127.0.0.1:5000/api/order/status", formattedData);
            setMessage(response.data.message); // Set success message from backend
        } catch (err) {
            console.log(message);
            if (err.response) {
                setError(err.response.data.message); // Show error returned from API
            } else {
                setError("An error occurred while updating the order status.");
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>Update Order Status</h1>
            <form onSubmit={handleUpdateStatus}>
                <label>
                    Order ID:
                    <input
                        type="text"
                        name="OrderID"
                        value={formData.OrderID}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Status:
                    <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Update Order Status</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <button onClick={doit}>Logout</button>
        </div>
    );
};

export default UpdateOrderStatus;
