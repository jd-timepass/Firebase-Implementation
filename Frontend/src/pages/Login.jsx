import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, loginWithGoogle, signup } from "../services/authService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            setError("");
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSignup = async () => {
        try {
            setError("");
            await signup(email, password);
            navigate("/dash");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {

        try {
            setError("");
            await loginWithGoogle();
            navigate("/dash");
        } catch (error) {
            setError(error.message);

        }
    }

    return (
        <div>
            <h2>Login / Signup</h2>
            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>SignUp</button>

            <hr style={{ margin: "20px 0" }} />

            <button onClick={handleGoogleLogin}>
                Sign in with Google
            </button>
        </div>
    );
}