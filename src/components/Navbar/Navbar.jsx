
import './Navbar.scss'
import logo from '../../assets/veterinario.png'
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Boton from "../../extra/Boton";




const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "remedios",
    href: "/productos/remedios",
  },
  {
    label: "higiene",
    href: "/productos/higiene",
  },
  {
    label: "alimentos",
    href: "/productos/alimentos",
  },
  {
    label: "juguetes",
    href: "/productos/juguetes",
  },
  {
    label: "indumentaria",
    href: "/productos/indumentaria",
  },
];


const Navbar = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <header className="bg-green-600">      
    <div className="container m-auto py-6 flex justify-between items-center">
   
                
        <img className="header__logo"  src={logo} alt="Logo" />
        <h1 className="header__title">Veterinaria</h1>
        <nav className="flex gap-4">
          {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-white"}`
              )}
            >
              {link.label}
            </NavLink>

          ))}

          <CartWidget />
        </nav>

        {/* <CartWidget /> */}
      </div>

      {user.logged && <div className="flex gap-4 items-center container m-auto">
        <p className="text-white">{user.email}</p>
        <Boton onClick={logout}>Cerrar sesión</Boton>
      </div>}
    </header>
  );
};

export default Navbar;