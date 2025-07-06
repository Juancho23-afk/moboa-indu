import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
//import ButtonMultiuso from "./components/examples/ButtonMultiuso"
import Navbar from './components/Navbar'
import NavBarBts from './components/NavBarBts';

function App() {
/*const  hola = () =>{
  alert ('hola')
}
const  chau = () =>{
  alert ('chau')
}*/

  return (
    <>
    {/*<Navbar/>*/}
    <NavBarBts/>
    <ItemListContainer saludo='Bienvenidos A MoboaIndu'/>
      {/*<ButtonMultiuso text = 'Hola' saludar = {hola}/>
      <ButtonMultiuso text = 'chau' saludar = {chau} />*/}
    </>
  )
}

export default App
