import { useEffect, useState } from "react"
import Api from "../../../Api"


export default function useSignIn() {

    const [inputs, setInputs] = useState({
        email: undefined,
        password: undefined
    })
    const [error, setError] = useState(null)

    const changeValue = (name, value) => {
        setInputs(prev => ({...prev, [name]: value}))
    }

    const signin = async (e) => {

        e.preventDefault()

        setError(false)

        let res = await Api.auth(inputs)

        if(res.status === 200) {
            localStorage.setItem('accessToken', res.accessToken)
            return window.location.reload()
        } else {
            setError(res.message)
            return
        }
    }

    return {
        inputs,
        error,
        setError,
        signin,
        changeValue
    }
}