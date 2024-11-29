import { useEffect, useState } from "react"
import Api from "../../../Api"
import Store from "../../../Store"


export default function useUser() {

    const [isOpen, setIsOpen] = useState('')

    const closeMenu = () => {
        setIsOpen('')
    }

    const toggleMenu = (e) => {
        e.stopPropagation()
        if(isOpen === 'active') {
            setIsOpen('')
        } else {
            setIsOpen('active')
        }
    }

    useEffect(() => {

        window.addEventListener('click', closeMenu)

        return () => {
            window.removeEventListener('click', closeMenu)
        }

    }, [])

    const deleteUser = async (id) => {

        let res = await Api.delete(`api/users/delete/${id}`)
        
        if(res === 'error') {
            return
        }

        Store.setListener('deleteUser', id)
        return 'Пользователь удалён'

    }

    const bannedUser = async (id) => {

        let res = await Api.post('ds', `api/users/banned/${id}`)

        if(res === 'error') {
            return
        }

        return 'Пользователь заблокирован'
    }

    return { toggleMenu, closeMenu, isOpen, deleteUser, bannedUser }

}