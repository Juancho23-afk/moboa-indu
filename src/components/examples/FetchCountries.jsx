import React, { useEffect } from 'react'

const FetchCountries = () => {

    useEffect(()=>{
        //pedir los datos
    fetch('https://restcountries.com/v3.1/name/argentina')
    .then((response)=> response.json())//lo traduzco
    .then((data)=> console.log(data))
    .catch((eror)=> console.log(error))
},[])

    return (
        <div>FetchCountries</div>
    )
}

export default FetchCountries