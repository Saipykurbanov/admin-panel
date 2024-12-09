import { useEffect, useState } from "react"
import Api from "../../../Api"
import Store from "../../../Store"


export default function useGetFilters() {

    const [isOpen, setIsOpen] = useState(false)
    const [load, setLoad] = useState(false)
    const [filters, setFilters] = useState({
        colors: [],
        material: []
    })

    Store.useListener('filter', setIsOpen)

    const closeFilter = () => {
        document.body.style.overflow = 'visible'
        setIsOpen('close')
    }

    useEffect(() => {

        (async () => {

            let res = await Api.get('api/products/get/filters')

            if(res !== 'error') {
                setLoad(true)
                setFilters(prev => ({...prev, colors: res.colors, material: res.material}))
                return 
            }

        })()

        window.addEventListener('mousedown', closeFilter)

        return () => {
            window.removeEventListener('mousedown', closeFilter)
        }

    }, [])

    return {
        isOpen,
        filters,
        load,
        closeFilter
    }
}