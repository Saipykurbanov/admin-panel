import React, { useState } from 'react';
import './css/header.css'
import Store from '../../Store';


const Header = ({user}) => {

    const [title, setTitle] = useState('Главная')
    Store.useListener('title', setTitle)

    return (
        <header className='header'>
            <h2>{title}</h2>
            <nav></nav>
            <div className="user">
                {user?.name} {user?.surname}
            </div>
        </header>
    );
};

export default Header;