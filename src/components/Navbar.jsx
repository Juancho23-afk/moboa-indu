import '../css/Navbar.css'
import CartWidget from './CartWidget'
const Navbar = () => {
    return (
        <nav className='nav-container'>
            <img alt='logo' src='../logo-shop.jpg' className='logo'/>
            <a className='enlaces'>Inicio</a>
            <a className='enlaces'>Productos</a>
            <a className='enlaces'>¿Que Estas Buscando?</a>
            <CartWidget/>
            
        </nav>
    )
}
export default Navbar