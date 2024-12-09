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

const RankSystem = () => {
    const [formData, setFormData] = useState({
        start_date: "",
        end_date: "",
    });
    const [rank, setRank] = useState([]);
    const [error, setError] = useState("");

    // Function to format the date to 'dd-MM-yyyy'
    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // Fetch rankings based on the date range
    const fetchRank = async (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        setError(""); // Clear previous error messages
        setRank([]); // Clear previous rankings

        try {
            // Format dates to 'dd-MM-yyyy'
            const formattedData = {
                start_date: formatDate(formData.start_date),
                end_date: formatDate(formData.end_date),
            };

            // Send GET request with query parameters
            const response = await axios.get("http://127.0.0.1:5000/api/volunteer-scoreboard", {
                params: formattedData,
            });

            // Update state with rankings
            setRank(response.data.scoreboard);
        } catch (err) {
            console.log(rank);
            if (err.response) {
                setError(err.response.data.message); // Show error returned from API
            } else {
                setError("An error occurred while fetching data.");
            }
        }
    };

    // Handle input changes for the form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <form onSubmit={fetchRank}>
                <h2>Volunteer Rankings</h2>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Find Rankings</button>
            </form>

            {error && <p>{error}</p>}

            {rank.length > 0 ? (
                <div>
                    <h3>Rankings</h3>
                    <ul>
                        {rank.map((volunteer, index) => (
                            <li key={index}>
                                {index + 1}. {volunteer.volunteer} - {volunteer.num_tasks} tasks
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                rank.length === 0 && !error && (
                    <p>No rankings available for the selected date range.</p>
                )
            )}
            <button onClick={doit}>Logout</button>
        </div>
    );
};

export default RankSystem;
