import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Desktop7.css'; // Assurez-vous d'avoir votre fichier CSS approprié

const Registration = () => {
    const [formData, setFormData] = useState({ 
        fullName: '', 
        domain: '', 
        yearsOfExperience: '', 
        lang: '', 
        cost: '', 
        email: '', 
        password: '', 
        phone: '', 
        location: '' 
    });

    const { 
        fullName, 
        domain, 
        yearsOfExperience, 
        lang, 
        cost, 
        email, 
        password, 
        phone, 
        location 
    } = formData;

    const [selectedLang, setSelectedLang] = useState(null);

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
    };

    const [experience, setExperience] = useState(0);

    const decreaseExp = () => {
        if (experience > 0) {
            setExperience(experience - 1);
        } 
    };

    const increaseExp = () => {
        setExperience(experience + 1);
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('Registration Success');
        // Ajoutez ici la logique pour soumettre les données d'inscription
    };

    return (
        <div className="registration-container">
        <div className="left-content">
            <h2 className='title'>REGISTRATION</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={fullName} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <label>Domain</label>
                    <input type="text" name="domain" value={domain} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <div className="years-experience">
                    <label>Years of Exp:</label>
                    <div className="exp-input">
                    <button type="button" className="exp-button" onClick={decreaseExp}>-</button>
                    <input type="text" className="exp-text" value={experience} readOnly />
                    <button type="button" className="exp-button" onClick={increaseExp}>+</button>
                    </div>
                </div>
                </div>
                <div className="form-group">
                    <div className="lang-container">
                    <label className="lang-label">Lang :</label>
                    <div className="lang-options">
                    <div className={`lang-option ${selectedLang === 'Arb' ? 'selected' : ''}`} onClick={() => handleLangSelect('Arb')}>
                    <div className="lang-circle"></div>
                    <p>Arb</p>
                    </div>
                    <div className={`lang-option ${selectedLang === 'Fr' ? 'selected' : ''}`} onClick={() => handleLangSelect('Fr')}>
                    <div className="lang-circle"></div>
                    <p>Fr</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className='ccc'>
                    <label>Cost :</label>
                    <input type="text" name="cost" value={cost} onChange={e => onChange(e)} required />
                    <span> DZ</span>
                    </div>
                </div>
        
        
            </form>
            
                <p className="mt-3">
                    Already have an account? <Link to="/Desktop5">Login</Link>
                </p>
        
           

            </div>
            <div className="right-content">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required />
                </div>
                <div className="form-group">
                    <div className='telephone-group'>
                    <label>Tlp</label>
                    <input type="tel" name="phone" value={phone} onChange={e => onChange(e)} required />
                    </div>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location" value={location} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                <div className="buttons">
                    <button type="button" className="btn1 ">+ Resume</button>
                    <button type="submit" className="btn2 "
                            style={{backgroundColor:'#1D371D',
                                    marginRight:'-0.8cm'}}
                    >Register</button>
                </div>
                </div>
            </form>
        </div>
    </div>

    );
};

export default Registration;
