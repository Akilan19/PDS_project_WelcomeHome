import React, { useState, useEffect} from "react";
import Axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

function Orderstart() {
    const [widgets, setWidgets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("http://127.0.0.1:5000/api/dashboard");
                setWidgets(response.data.widgets || []);
            } catch (error) {
                console.error("Error fetching widgets:", error);
            }
        };
        fetchData();
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            {widgets.length > 0 ? (
                widgets.map((widget, index) => (
                    <button
                        key={index}
                        onClick={() => handleNavigation(widget.path)}
                        style={{ display: "block", margin: "10px 0", padding: "10px" }}
                    >
                        {widget.label} 
                    </button>
                ))
            ) : (
                <p>Loading widgets...</p>
            )}
        </div>
    );
}

export default Orderstart;
