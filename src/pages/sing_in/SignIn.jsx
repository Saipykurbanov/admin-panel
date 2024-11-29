import React from 'react';
import './css/sign_in.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import useSignIn from './hooks/useSignIn';

const SignIn = () => {

    const auth = useSignIn()

    return (
        <div className='sing_in'>

            <form action="" onSubmit={(e) => auth.signin(e)}>
                <h2>Админ-панель</h2>

                <div className="input_block">
                    <Input mode={auth.error ? 'input_error' : ''} placeholder={'Логин'} name={'email'} changeValue={auth.changeValue} value={auth.inputs.email}/>
                    <Input mode={auth.error ? 'input_error' : ''} type={'password'} placeholder={'Пароль'} name={'password'} changeValue={auth.changeValue} value={auth.inputs.password}/>
                    <div className='error'>{auth.error || ''}</div>
                </div>

                <Button type={'submit'} mode={''} title={'Отправить'}/>
            </form>

        </div>
    );
};

export default SignIn;