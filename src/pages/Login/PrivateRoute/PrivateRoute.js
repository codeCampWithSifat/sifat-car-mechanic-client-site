import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {Spinner} from 'react-bootstrap'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading) {
       return  <Spinner animation="border" variant="info" />
    }
    return (
        user.email ? children : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;