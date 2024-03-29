import { useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Signup.css"
import { useAuth } from "../../context/AuthContext";
import { ToastContainer } from 'react-toastify';
import { handleToast, handleToastWarning } from "../../utils/toastUtils";

export const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "", firstName: "", lastName: "" });
    const { signupHandler } = useAuth();


    const handleSignup = () => {
        if (form.email.trim().length && form.password.trim().length && form.firstName.trim().length && form.lastName.trim().length) {
            handleToast("Signup successful");
            setTimeout(() => {
                signupHandler(form.email, form.password, form.firstName, form.lastName);
                navigate("/explore")
            }, 1000)
        }
        else {
            handleToastWarning("Please fill up the sign up form");
        }
    }
    const handleSignupData = () => {
        handleToast("filled up with Dummy Data");
        setTimeout(()=>{
           setForm({...form,email:"sriyasri39@gmail.com",password:"12345678",firstName:"Sriyasri",lastName:"Khuntia"})
        },1000)
    }

    return <>
        <div className="signup-container">
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

                <button className="btn-register" onClick={handleSignup}>Create New Account</button>
                <button className="btn-register" onClick={handleSignupData}>Fill up with Dummy details</button>
                <div className="account-login" onClick={() => navigate("/login")}>
                    <p>Already have an account</p>
                    <span className="material-icons"> arrow_forward_ios </span>
                </div>
            </div>
        </div>
    </>
}