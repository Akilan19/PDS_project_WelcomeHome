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

const PrepareOrder = () => {
    const [formData, setFormData] = useState({
        OrderID: "",
        orderNotes: "",
        date: "",
        supervisor: "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Format the date to 'dd-MM-yyyy'
    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // Handle Place Order Submission
    const handlePlaceOrder = async (e) => {
        e.preventDefault(); // Prevent form reload
        setError(""); // Clear error
        setMessage(""); // Clear message

        try {
            const formattedData = {
                OrderID: formData.OrderID,
                supervisor: formData.supervisor,
                orderNotes: formData.orderNotes,
                orderDate: formatDate(formData.date), // Correct date formatting
            };

            const response = await axios.post("http://127.0.0.1:5000/api/order/place", formattedData);
            setMessage(response.data.message); // Success message from backend
        } catch (err) {
          console.log(message);
          if (err.response) {
              setError(err.response.data.message); // Show error returned from API
          } else {
              setError("An error occurred while updating the order status.");
          }
        }
    };

    // Handle Delete Order Submission
    const handleDeleteOrder = async (e) => {
        e.preventDefault(); // Prevent form reload
        setError(""); // Clear error
        setMessage(""); // Clear message

        try {
            const response = await axios.delete("http://127.0.0.1:5000/api/order/delete", {
                data: { OrderID: formData.OrderID }, // Send data in `data` key for DELETE requests
            });
            setMessage(response.data.message); // Success message from backend
        } catch (err) {
          console.log(message);
          if (err.response) {
              setError(err.response.data.message); // Show error returned from API
          } else {
              setError("An error occurred while updating the order status.");
          }
        }
    };

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>Prepare Order</h1>

            <form onSubmit={handlePlaceOrder}>
                <h2>Place Order</h2>
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
                    Notes:
                    <input
                        type="text"
                        name="orderNotes"
                        value={formData.orderNotes}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Supervisor:
                    <input
                        type="text"
                        name="supervisor"
                        value={formData.supervisor}
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
                <br />
                <button type="submit">Place Order</button>
            </form>

            <form onSubmit={handleDeleteOrder}>
                <h2>Delete Order</h2>
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
                <br />
                <button type="submit">Delete Order</button>
            </form>
            <br />
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <button onClick={doit}>Logout</button>
        </div>
    );
};

export default PrepareOrder;
