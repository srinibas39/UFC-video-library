import { createContext, useContext, useState } from "react";
import { LoginServices } from "../services/LoginService";
import { SignupServices } from "../services/SignupServices";
import { handleToastError } from "../utils/toastUtils";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const local = JSON.parse(localStorage.getItem("login"));
    const [user, setUser] = useState(local?.user);
    const [token, setToken] = useState(local?.token);



    const loginHandler = async (email, password) => {
        try {
            const { data, status } = await LoginServices({ email, password });

            if (status === 200 || status === 201) {
                localStorage.setItem("login", JSON.stringify({ token: data.encodedToken, user: data.foundUser }))
            }
            setUser(data.foundUser);
            setToken(data.encodedToken);
        }
        catch (err) {
            handleToastError(err.message)
        }
    }
    const signupHandler = async (email, password, firstName, lastName) => {
        try {
            const { data, status } = await SignupServices({ email, password, firstName, lastName });
            if (status === 200 || status === 201) {
                localStorage.setItem("login", JSON.stringify({ token: data.encodedToken, user: data.createdUser }))
            }
            setUser(data.createdUser);
            setToken(data.encodedToken);

        }
        catch (err) {
            handleToastError(err.message)
        }
    }
    const logoutHandler = () => {
        localStorage.removeItem("login");
        setUser(null);
        setToken(null)
    }


    return <AuthContext.Provider value={{ loginHandler, signupHandler, logoutHandler, user, token, setToken }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);