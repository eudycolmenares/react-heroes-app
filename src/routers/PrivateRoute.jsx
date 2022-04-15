import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"
// 
export const PrivateRoute = ({ children }) => {
    const { pathname, search } = useLocation()
    localStorage.setItem('lastPath', pathname + search)
    const { user } = useContext( AuthContext)
    return (user.logged 
        ? children
        : <Navigate to="login" />
    )
}