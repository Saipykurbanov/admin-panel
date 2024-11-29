import React from 'react';
import './css/input.css';


const Input = ({type, value, placeholder, changeValue, name, mode}) => {
    return <input 
                type={type} 
                className={`main_input ${value ? 'active' : ''} ${mode}`} 
                value={value} 
                onChange={(e) => changeValue(name, e.target.value)} 
                placeholder={placeholder}
            />
};

export default Input;