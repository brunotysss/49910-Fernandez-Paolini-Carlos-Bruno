
import './Navbar.css'
import logo from '../../assets/veterinario.png'
import NavLink from './NavLink'
const Navbar = () => {
      return (
        <header className="bg-green-600">
            <div className="container m-auto py-6 flex justify-between items-center">
              
                <img className="header__logo" src={logo}  alt="logo" />
                <h1 className="header__title">Veterinaria</h1>
                <nav className="flex gap-4">
                  <NavLink href={"#"} text= {"Inicio"}/>
                  <NavLink href={"#"} text= {"Productos"}/>
                  <NavLink href={"#"} text= {"Turnos de mascota"}/>
                  <NavLink href={"#"} text= {"Realizar pedido"}/>
                  <NavLink href={"#"} text= {"Registro"}/>
                </nav>
            </div>
        </header>
 )

}

export default Navbar