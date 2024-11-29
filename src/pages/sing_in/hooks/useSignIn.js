import { useEffect, useState } from "react"
import Api from "../../../Api"


export default function useSignIn() {

    const [inputs, setInputs] = useState({
        email: undefined,
        password: undefined
    })
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(false)

    const changeValue = (name, value) => {
        setInputs(prev => ({...prev, [name]: value}))
    }

    const signin = async (e) => {

        e.preventDefault()

        setError(null)

        let res = await Api.auth(inputs)

        console.log(res)
        if(res.status === 200) {
            localStorage.setItem('accessToken', res.accessToken)
            return window.location.reload()
        } else {
            setError(res.message)
            return
        }
        // if(res === 'error') {
        //     setError('Неверный логин или пароль')
        //     return
        // } else if(res === '401') {
        //     setError('У вас не хватает прав')
        //     return
        // } else {
        //     return window.location.reload()
        // }
    }

    return {
        inputs,
        error,
        setError,
        signin,
        changeValue
    }
}