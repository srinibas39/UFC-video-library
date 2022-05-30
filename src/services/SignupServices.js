import axios from "axios"


export const SignupServices = ({ email, password, firstName, lastName }) => {
    return axios.post("/api/auth/login", { email, password, firstName, lastName })
}