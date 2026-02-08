import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyStore } from "../AppContext";

const PublicRoute = ({ children }) => {
    let { isAuth } = useContext(MyStore);

    if (isAuth) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default PublicRoute;
