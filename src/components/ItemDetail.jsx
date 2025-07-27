import React from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({detalle}) => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Detalle de: {detalle.name}</h1>
            <img alt={detalle.name} src={detalle.img}/>
            <p>{detalle.description}</p>
            <p>Stock:{detalle.stock}</p>
            <p>Precio:${detalle.price}</p>
            <ItemCount stock={detalle.stock}/>
        </div>
    ) 
}

export default ItemDetail