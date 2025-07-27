import React, { useEffect,useState } from 'react'
import { FetchCard } from './fetchCard'
import { useFetch } from '../../hooks/useFetch'

export const FetchApi = () => {
    // const[fetchData, setFetchData]= useState([])
    const{data, loading, error}= useFetch('https://dragonball-api.com/api/characters')

    // useEffect(()=>{
    //     //pedir data
    //     fetch('https://dragonball-api.com/api/characters')
    //     .then((res)=> res.json())//lo traduzco
    //     .then((response)=> setFetchData(response.items || response))
    //     .catch((error)=> console.log(error))
    // },[])

    // console.log(fetchData, 'fetchData')
    console.log('data:', data, 'loading:' ,loading, 'error:', error)

    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
            {loading
            ? <p>cargando...</p>
            : data?.items?.map((personaje)=> (<FetchCard personaje={personaje} key={personaje.id}/>))}
            {
                // fetchData.map((personaje)=> <FetchCard personaje={personaje} key={personaje.id}/>)
            }
        </ div>
    )
}
export default FetchApi
