import { createContext, useState } from "react"
import { BsEvStation } from "react-icons/bs"

//creamos el contexto 
export const CartContext = createContext()


//creamos el proveedor
export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState([])

    //las funciones para modificar el carrito:


    //Agregar Items
        const addItem= (item, qty)=>{
            if(isInCart(item.id)){
                //existe en el carrito y yo tengo que sumar cantidades
                const carritoActualizado = cart.map((prod)=>{
                    if(prod.id === item.id){
                        //actualiza con la nueva cantidad
                        return{...prod, quantity: (prod.quantity || 0) + qty}
                    }else{
                        //devuelvo el prod como esta
                        return prod
                    }
                })
                setCart(carritoActualizado)
            }else{
                //agregar y modificar el estado del carrito manteniendo los datos
                setCart([...cart, {...item, quantity:qty}])
            }
            
        }

    //borre todo el carrito
        const clear = ()=>{
            setCart([])
        }

    //elimine un item
        const removeItem= (id) =>{
            setCart(cart.filter((prod)=> prod.id !== id))
        }

    //diga el total a pagar
        const cartTotal = ()=>{
            return cart.reduce((acc, prod)=> acc += prod.quantity,0)
        }

    //diga total de items en el carrito
    const cartQuantity = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity,0)
    }

    //devolver true o false si esta o no en el carrito 
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}