import { HiMiniShoppingCart } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Badge from 'react-bootstrap/Badge';
const CartWidget = () => {
    const {cartQuantity, cart} = useContext(CartContext)
    return(
        <>
        <HiMiniShoppingCart fontSize={'1.5rem'} color="white"/>
        {cart.length && <Badge bg="danger">{cartQuantity()}</Badge>}
        </>
    )
}
export default CartWidget