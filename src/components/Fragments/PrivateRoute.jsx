import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
    const { children } = props;
    const location = useLocation();
    const token = localStorage.getItem("token");
    if(!token) {
        return <Navigate to={'/login'} state={{ formPath: location.pathname }} />
    }
    return children;
}

export default PrivateRoute;