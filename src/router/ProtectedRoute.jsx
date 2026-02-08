import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyStore } from "../AppContext";

const ProtectedRoute = ({ children }) => {
    let { isAuth } = useContext(MyStore);

    if (!isAuth) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
