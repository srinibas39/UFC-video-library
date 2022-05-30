import { createContext, useContext, useState } from "react";
import { LoginServices } from "../services/LoginService";


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
            console.log(err);
        }
    }
    // const signupHandler = async (email, password, firstName, lastName) => {
    //    try{
    //     const {data,}
    //    }
    //    catch(err){
    //        console.log(err);
    //    }
    // }

    return <AuthContext.Provider value={{ loginHandler }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);