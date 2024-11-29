import { useEffect, useState } from "react";
import useMode from "./utils/useMode";
import Store from "./Store";
import Api from "./Api";


export default function useMain() {

    const [load, setLoad] = useState(false)
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    const mode = useMode()

    const loadTime = () => {
        setTimeout(() => {
            setLoad(true)
        }, 3000)
    }

    useEffect(() => {
                
        (async () => {
            const token = localStorage.getItem('accessToken')

            if(!token) {
                setTimeout(() => {
                    loadTime()
                }, 2000)
                return
            }

            let res = await Api.init(token)

            if(res.success) {
                setAuth(true)
                setUser(res.data)
                loadTime()
                return
            }

            loadTime()
            return
            
        })()

        setTimeout(() => {
            Store.setListener('start_mode', mode)
        }, 3200)

    }, [])

    return {
        load, 
        mode,
        auth,
        user
    }
}