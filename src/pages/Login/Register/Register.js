import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword , setConfirmPassword] = useState('');
    const [error , setError] = useState('');
    const [success , setSuccess] = useState('')
    const {signUp,user} = useAuth();

    const handleNameCheck = e => {
        setName(e.target.value)
    };

    const handleEmailCheck = e => {
        setEmail(e.target.value);
    }

    const handlePasswordCheck = e => {
        setPassword(e.target.value)
    };

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    };

    const handleRegistration = async(e) => {
        e.preventDefault();
        if(password !== confrimPassword) {
            return setError('Password Not Match')
        }

        if(password.length <6) {
            return setError('Password At Least 6 or More Character')
        }

        try {
            await signUp(name, email, password);
            setError('')
            setSuccess('User Created Successfully');

        } catch (error) {
            setSuccess('')
            setError('Users Already Exists ! Please Login')
            console.log(error)
        }

    }
    return (
        <div>
           <form onSubmit={handleRegistration}>
           <div className='container mt-5'>
                <h2 className='text-primary text-center mt-5'>Please Login </h2>

            <div className="form-floating mb-3 ">
            <input type="text" className="form-control" id="floatingInput" onBlur={handleNameCheck} placeholder="Your Name"/>
            <label htmlFor="floatingInput">Your Name</label>
            </div>

            <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" onBlur={handleEmailCheck} placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" onBlur={handlePasswordCheck} placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div> <br />

            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" onBlur={handleConfirmPassword} placeholder=" Confirm Password"/>
            <label htmlFor="floatingPassword">Confirm Password</label> <br />
            </div> 
                    <br />
                    <p style={{color : "red"}}>{error && <span>{error}</span>}</p>
                    <p style={{color : "green"}}>{success && <span>{success}</span>}</p>
            
                        <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Button</button>
                       </div>
            </div> <br />
           </form>

            <p>Already Have An Account Please <Link to="/login">Login</Link></p>
           {!user.email ? <button className='btn btn-outline-warning'>Google Sign In</button>
            : <button className='btn btn-outline-warning'>Logout</button>
           }
        </div>
    );
};

export default Register;