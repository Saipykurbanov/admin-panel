import React, { useEffect, useState } from 'react';
import Store from '../../Store';
import './css/users.css';
import User from './components/User';
import Api from '../../Api';
import LoadingGeneral from '../../components/loading/LoadingGeneral';
import NoItems from '../../components/no_items/NoItems';


const Users = () => {

    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {

        (async () => {

            let res = await Api.get('api/users/all')

            if(res === 'error') {
                return setLoad(true)
            } else {
                setUsers(res)
                setLoad(true)
                return 
            }

        })()

        Store.setListener('title', 'Пользователи')
    }, [])

    Store.useListener('deleteUser', (id) => {
        setUsers(prev => prev.filter(el => el.userid !== id))
    })
    
    return (
        <div className='users container'>

            {load ?
                <>{users?.length ? 
                    <>{users.map((el, i) => (
                        <User el={el} key={el.userid} number={i+1}/>
                    ))}</>
                :<NoItems />}</>
            
            :<LoadingGeneral />}
        </div>
    );
};

export default Users;