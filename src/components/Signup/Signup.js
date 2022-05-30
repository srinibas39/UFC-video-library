import { useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Signup.css"
import { useAuth } from "../../context/AuthContext";

export const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "", firstName: "", lastName: "" });
    const { signupHandler } = useAuth();

    const handleSignup = () => {
        signupHandler(form.email, form.password, form.firstName, form.lastName)
    }

    return <div className="signup-container">
        <div className="signup">
            <h2>Sign up</h2>
            <div className="firstname-container">
                <label htmlFor="firstname">Firstname</label>
                <input type="firstname" name="firstname" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
            </div>
            <div className="lastname-container">
                <label htmlFor="lastname">Lastname</label>
                <input type="lastname" name="lastname" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            </div>
            <div className="email-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>

            <div className="terms">
                <input type="checkbox" name="remember-me" />
                <label htmlFor="terms">{`I accept all terms & conditions`}</label>
            </div>

            <button className="btn-register" onClick={handleSignup}>Create New Account</button>
            <div className="account-login" onClick={() => navigate("/login")}>
                <p>Already have an account</p>
                <span className="material-icons"> arrow_forward_ios </span>
            </div>
        </div>
    </div>
}