import { useState, useEffect } from 'react'


export function useFetch (url) {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => { //? Appel fetch vers l'api dés que l'url change.
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setDatas(result)
                    setLoading(false)
                },
                (error) => {
                    setError(error)
                    setLoading(false)
                }
            )
    }, [url])
    return {datas, loading, error, setDatas}
}