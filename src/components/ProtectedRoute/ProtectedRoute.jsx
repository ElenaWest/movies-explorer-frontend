import { Navigate } from "react-router-dom"

function ProtectedRoute({ element: Component, loggedIn, ...props }) {
    return(
        loggedIn ?
        <Component {...props} />        
        : <Navigate to={'/'} replace />
    )
}

export default ProtectedRoute;