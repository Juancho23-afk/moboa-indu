import { HiMiniShoppingCart } from "react-icons/hi2";
import Badge from 'react-bootstrap/Badge';
const CartWidget = () => {
    return(
        <>
        <HiMiniShoppingCart fontSize={'1.5rem'} color="white"/>
        <Badge bg="danger">7</Badge>
        </>
    )
}
export default CartWidget