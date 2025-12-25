import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export default function Dashboard() {
    const navigate = useNavigate();

    const callBackend = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:5000/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            console.log(data);
            alert(`User: ${data.email}`);
        } catch (error) {
            console.error(error);
            alert("Error calling backend");
        }
    };

    const handleLogout = async () => {
            await logout();
            navigate("/");
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={callBackend}>
                Call Protected API
            </button>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}