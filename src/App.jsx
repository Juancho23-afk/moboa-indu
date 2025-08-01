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
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';

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
    <BrowserRouter>
    {/*<Navbar/>*/}
    <NavBarBts/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Bienvenidos A MoboaIndu'/>}/>
      <Route path='/categories/:category' element={<ItemListContainer saludo='Estas en la categoria de:'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      {/*<ButtonMultiuso text = 'Hola' saludar = {hola}/>
      <ButtonMultiuso text = 'chau' saludar = {chau} />*/}
      {/* <ItemCount/>
      <FetchCountries/> */}
      {/* <FetchApi/> */}
      {/* <MiComponenteConHoc/> */}
    {/* <ItemListContainerConHoc saludo='Bienvenidos A MoboaIndu'/> */}
    </BrowserRouter>
  )
}

export default App
