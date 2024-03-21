import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './PasswordInput.css';

const PasswordInput = ({ onPasswordChange }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length > 5) strength += 1;
        if (password.length > 7) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;

        switch (strength) {
            case 0:
            case 1:
                return 'Weak';
            case 2:
            case 3:
                return 'Moderate';
            case 4:
            case 5:
                return 'Strong';
            default:
                return '';
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        onPasswordChange(value);
        setPasswordStrength(calculatePasswordStrength(value));
    };

    return (
        <div >
            
            <input
                type={passwordShown ? 'text' : 'password'}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
            />
            <button onClick={togglePasswordVisibility} type="button">
                <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
            </button>
            <div className={`strength-${passwordStrength.toLowerCase()}`}>Password strength: {passwordStrength}</div>

        </div>
    );
};

export default PasswordInput;
