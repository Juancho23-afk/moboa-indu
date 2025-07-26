import React from 'react'
import Item from './item'

const ItemList = ({data}) => {
    return (
        <div style={{display:'flex', flexWrap: 'wrap', alignItems:'center',}}>
            {data.map((prod) => (
        <div
        key={prod.id}
        style={{
            flex: '0 0 33.33%',
            padding: '10px',
            boxSizing: 'border-box'
        }}
        >
        <Item prod={prod} />
        </div>
    ))}
    </div>
);
};

export default ItemList