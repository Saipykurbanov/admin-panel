import React from 'react';
import './css/input.css';


const Input = ({type, value, placeholder, changeValue, name}) => {
    return <input 
                type={type} 
                className={`main_input ${value ? 'active' : ''}`} 
                value={value} 
                onChange={(e) => changeValue(name, e.target.value)} 
                placeholder={placeholder}
            />
};

export default Input;