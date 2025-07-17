// src/components/Navbar.jsx
import Redes from "./Redes";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Barbería</h1>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-blue-500">Servicios</a></li>
          <li><a href="#nosotros" className="hover:text-blue-500">Quiénes somos</a></li>
          <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
          <Redes/>
        </ul>

      </nav>
      
    </header>
  );
}
