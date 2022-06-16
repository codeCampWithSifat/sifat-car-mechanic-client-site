import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignIn, logout,user,signIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success ,setSuccess] = useState('');
    const [error ,setError] = useState('');

   
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(() => {
            navigate(from, { replace: true });
        })
    };

    const handleEmailCheck = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordCheck  = e => {
        setPassword(e.target.value);
    };

    const handleSignIn = async(e) => {
        e.preventDefault();
        try {
            await signIn(email,password)
            setSuccess('User Login Succesfully');
            navigate(from, { replace: true });
            setError('')
        }
        catch(error) {
            setSuccess('');
            setError('User Not Found ! Try Again Later')
            console.log(error)
        }
    }
    return (
        <div>

           <form onSubmit={handleSignIn}>
           <div className='container mt-5'>
                <h2 className='text-primary text-center'>Please Login </h2>
            <div className="form-floating mb-3 ">
            <input onBlur={handleEmailCheck} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input onBlur={handlePasswordCheck} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div>   <br />

            <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Button</button>
            </div>   
            {success && <h3 style={{color : "green"}}>{success}</h3>}         
            {error && <h3 style={{color : "red"}}>{error}</h3>}         
            </div>
           </form>
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