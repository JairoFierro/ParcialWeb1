import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../img/login.png";
import "../styless/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "a.acosta" && password === "1234") {
            navigate("/robots/");
        } else {
            setError("Error de autenticación. Revise sus credenciales");
        }
    };

    return (
        <div className="container">
            <h1>Adopta un Robot con Robot Lovers!</h1>
            <div className="login-box">
                <div className="banner">
                    <img src={banner} alt="Login Banner"/>
                </div>
                <h2>Inicio de sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="error">{error}</p>}

                    <div className="buttons">
                        <button type="submit" className="btn ingresar">Ingresar</button>
                        <button type="button" className="btn cancelar" onClick={() => { setUsername(""); setPassword(""); setError(""); }}>
                            Cancelar
                        </button>
                    </div>
                </form>
                <p className="footer">
                    Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
                </p>
            </div>
        </div>
    );
}

export default Login;
