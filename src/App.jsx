import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
//import ButtonMultiuso from "./components/examples/ButtonMultiuso"
import Navbar from './components/Navbar'
import NavBarBts from './components/NavBarBts';
import ItemCount from './components/ItemCount';
import FetchCountries from './components/examples/FetchCountries';
import { FetchApi } from './components/examples/FetchApi';
import { withLogging } from './hocs/withLogging';
import MiComponenteLog from './components/examples/MiComponenteLog';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const MiComponenteConHoc = withLogging(MiComponenteLog)
  const ItemListContainerConHoc= withLogging(ItemListContainer)
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
      {/*<ButtonMultiuso text = 'Hola' saludar = {hola}/>
      <ButtonMultiuso text = 'chau' saludar = {chau} />*/}
      {/* <ItemCount/>
      <FetchCountries/> */}
      {/* <FetchApi/> */}
      {/* <MiComponenteConHoc/> */}
    <ItemListContainer saludo='Bienvenidos A MoboaIndu'/>
    <ItemDetailContainer/>
    {/* <ItemListContainerConHoc saludo='Bienvenidos A MoboaIndu'/> */}
    </>
  )
}

export default App
