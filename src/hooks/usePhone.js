import { useEffect, useState } from "react";

const usePhone = () => {
    const [userPhone, setUserPhone] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
            const fetchData = async () => await fetch('https://skillshikhun.herokuapp.com/users')
            .then(async res => await res.json())
            .then(async data => await setUserPhone(data))
            .catch(async err => await setError(err));
            fetchData()
    }, [])

    return {
        userPhone,
        error
    }
}

export default usePhone;