
import './Navbar.scss'
import logo from '../../assets/veterinario.png'
//import NavLink from './NavLink'

import { Link, NavLink } from "react-router-dom";


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
      return (
        <header className="bg-green-600">
            <div className="container m-auto py-6 flex justify-between items-center">
              
                <img className="header__logo" src={logo}  alt="logo" />
                <h1 className="header__title">Veterinaria</h1>
                <nav className="flex gap-4">
          {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-green-400" : "text-white"}`
              )}
            >
              {link.label}
            </NavLink>

          ))}
        </nav>
            </div>
        </header>
 )

}

export default Navbar