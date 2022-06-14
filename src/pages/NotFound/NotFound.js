import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <h3>This page right now not working </h3>
            <Link to="/home"><button className='btn btn-danger'>Back To Home</button></Link>
        </div>
    );
};

export default NotFound;