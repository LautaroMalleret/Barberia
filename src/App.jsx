import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import QuienesSomos from "./sections/QuienesSomos";
import Giftcard from "./sections/Giftcard";
import Contacto from "./sections/Contacto";
import AntesDespues from "./components/AntesDespues";
import Footer from "./sections/Footer";
import Ubicacion from "./sections/Ubicacion";
import Clientes from "./sections/Clientes";
import Horarios from "./sections/Horarios";

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <QuienesSomos />
        <AntesDespues />
        <Clientes />
        <Giftcard />
        <Contacto />
        <Horarios />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// export default App;
