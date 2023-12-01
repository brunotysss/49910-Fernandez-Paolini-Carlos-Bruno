import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="La veterinaria ofrece servicios de atención médica para mascotas, con un enfoque en la calidad y el bienestar animal."/>
    </>
  )
}

export default App
