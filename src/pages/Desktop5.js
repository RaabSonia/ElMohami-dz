import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Desktop5.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('Success');
    };

    return (
        <div className="login-container">
            <div className="left-content">
                <img className="img1" alt="" src="/group-2@2x copy.png" />
                <div className="form-content">
                    <h2 className='titre'>LOGIN</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"  name="email" value={email} onChange={e => onChange(e)} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"  name="password" value={password} onChange={e => onChange(e)} minLength="6" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="mt-3">
                        Don't have an account? <Link to="/Desktop7">Register</Link>
                    </p>
                </div>
            </div>
            <div className="right-content">
                <img className="img2" alt="" src="/Capture d'écran 2024-01-02 110611.png" />
            </div>
        </div>
    );
};

export default Login;
