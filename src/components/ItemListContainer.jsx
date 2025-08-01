import { useEffect } from "react"
import { getProducts } from "../mock/AsyncService"
import { useState } from 'react';
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) =>{
    //declaramos el estado donde vamos a guardar los productos
    const [data, setData] = useState([])
    const {category}= useParams()
    console.log(category, 'categoria')

    //declaramos el use effect para que se ejecute una sola vez,[]
    useEffect(()=>{
        ///llamar a la funcion que retorna una promesa
        getProducts()
        //tratar la promesa
        .then((res)=>{
            if(category){
                //filtrar
                setData(res.filter((prod)=> prod.category === category))
            }else{
                //respuesta enter
                setData(res)
            }
        }) //garadmos la respuesta para poder utilizar
        .catch((error)=> console.log(error));
    },[category]);

    return(
        <div>
            <h1>{saludo}</h1>
            {/* {
            data.map((product)=> ( <p key={product.id}>{product.name}</p>))
            } */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer