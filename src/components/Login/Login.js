import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Login.css"
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { handleToast, handleToastWarning } from "../../utils/toastUtils";
import { ToastContainer } from 'react-toastify';

export const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const { loginHandler, token } = useAuth();
    const location = useLocation();

    useEffect(() => {
        if (token) {
            navigate(`${location?.state?.from?.pathname}`);
        }
    }, [token])

    const handleLogin = () => {
        if (form.email.trim().length && form.password.trim().length) {
            handleToast("login successful")
            setTimeout(() => {
                loginHandler(form.email, form.password);
                
            }, 1500)

        }
        else {
            handleToastWarning("Please fill up the login form");
        }
    }

    const handleGuestLogin = () => {
        handleToast("login successful")
        setTimeout(() => {
            loginHandler("srinibaskhuntia39@gmail.com", "srinibaskhuntia");
           
        }, 1500)

    }

    return <>
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <div className="email-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>

                <button className="btn-logins" onClick={handleLogin}>Login</button>
                <button className="btn-logins" onClick={handleGuestLogin}>Guest Login</button>

                <div className="create-new" onClick={() => navigate("/signup")}>
                    <p>Create new Account</p>
                    <span className="material-icons"> arrow_forward_ios </span>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}