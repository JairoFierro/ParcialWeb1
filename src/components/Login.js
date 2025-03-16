import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../img/login.png";
import "../styless/Login.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
    const { t } = useTranslation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            console.error("Error: e.preventDefault is not a function");
            return;
        }

        const bodyPost = {
            login: username,
            password: password 
        };

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bodyPost)
            });

            const data = await response.json();

            if (response.status === 200 && data.status === "success") {
                navigate("/robots/");
            } else {
                setError("Error de autenticación. Revise sus credenciales");
            }
        } catch (error) {
            setError("Error de conexión con el servidor");
        }
    };

    return (
        <div className="container">
            <h1>{t("title")}</h1>

            <hr class="linea"></hr>

            <div className="banner">
                    <img src={banner} alt="Login Banner"/>
            </div>

            <hr class="linea"></hr>

            <div className="container1">
                <h2>{t("login.title")}</h2>
                <form onSubmit={handleSubmit}>
                    <label>{t("login.username")}</label>
                    <input
                        class="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label>{t("login.password")}</label>
                    <input
                        class="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="error">{error}</p>}

                    <div className="buttons">
                        <button type="submit" className="btn ingresar">{t("login.loginButton")}</button>
                        <button type="button" className="btn cancelar" onClick={() => { setUsername(""); setPassword(""); setError(""); }}>
                        {t("login.cancelButton")}
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
