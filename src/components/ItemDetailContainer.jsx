import React, { useEffect,useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const {id}=useParams()
    console.log(id,'useparams')

    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[])


    return (
        <>
        <ItemDetail detalle={detalle}/>
        </>
    )
}

export default ItemDetailContainer