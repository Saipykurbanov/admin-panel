import React, { useEffect, useState } from 'react';
import useUser from '../hooks/useUser';

const User = ({el, number}) => {

    const user = useUser()

    return (
        <div className="user">
            <div className="number">{number}</div>
            <div className="name">{el.surname} {el.name.charAt(0)}.{el.middlename.charAt(0)}.</div>
            <div className="phone">{el.phone}</div>
            <div className="status">{el.active ? 'активный' : 'неактивный'}</div>
            <div className="burger" onClick={(e) => user.toggleMenu(e)}>
                <span></span><span></span><span></span>
            </div>

            <div className={`user_nav ${user.isOpen}`} onClick={(e) => e.stopPropagation()}>
                <div className="user_nav_wrapper">
                    <p onClick={() => user.bannedUser(el.userid)}>Заблокировать</p>
                    <p onClick={() => user.deleteUser(el.userid)}>Удалить</p>
                </div>
            </div>
        </div>
    );
};

export default User;