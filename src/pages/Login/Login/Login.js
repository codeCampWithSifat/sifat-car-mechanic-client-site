import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignIn, logout,user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(() => {
            navigate(from, { replace: true });
        })
    }
    return (
        <div>

            <div className='container mt-5'>
                <h2 className='text-primary text-center'>Please Login </h2>
            <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div>   <br />

            <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">Button</button>
            </div>            
            </div>
            <br />
            <p>If You Are A New User Please <Link to="/register">Register</Link></p>
           <div>----------------------------</div>
           {user.email ? <button 
            onClick={logout}
            className='btn btn-outline-warning'>Logout</button> : <button 
            onClick={googleSignIn}
            className='btn btn-outline-warning'>Google Sign In</button>}
        </div>
    );
};

export default Login; 