import { createContext, useContext } from "react/cjs/react.production.min";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    
    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);