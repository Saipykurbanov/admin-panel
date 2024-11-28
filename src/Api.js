const Api = {}

Api.url = 'http://localhost:4000/'

Api.auth = async (body) => {
    try {

        let res = await fetch(`${Api.url}api/users/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(body)
        })

        res = await res.json()

        if(res.status === 200) {
            localStorage.setItem('accessToken', res.accessToken)
            return 'success'
        } else if (res.status === 401){
            return '401'  
        } else {
            return 'error'
        }

    } catch(e) {
        console.log(e)
        return 'error'
    }
}

Api.get = async (path) => {

    try {
        let res = await fetch(`${Api.url}${path}`)

        res = await res.json()

        if(res.status) {
            return res.data
        } else {
            return 'error'
        }
    } catch(e) {
        return 'error'
    }

}

Api.postFormData = async (path, data) => {

    try {
        let res = await fetch(`${Api.url}${path}`, {
            method: 'POST',
            body: data
        })

        res = await res.json()

        return res
    } catch(e) {
        console.log(e)
        return 'error'
    }

}

Api.delete = async (path) => {
    try {

        let res = await fetch(`${Api.url}${path}`, {
            method: 'DELETE'
        })

        res = await res?.json()

        if(res.success) {
            return res
        } else {
            return 'error'
        }

    } catch(e) {
        return 'error'
    }
}

export default Api