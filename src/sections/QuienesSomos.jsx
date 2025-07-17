// src/sections/QuienesSomos.jsx
import barberImage from "../assets/barbero.jpg"; // Reemplazá con tu imagen real

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        <img src={barberImage} alt="Barbero" className="rounded-lg shadow-lg" data-aos="fade-right" />
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Quiénes somos</h2>
          <p className="text-gray-700 mb-4">
            Somos una barbería con experiencia en estilo masculino. Nos enfocamos en brindar cortes
            personalizados, atención profesional y una experiencia relajada para todos nuestros clientes.
          </p>
          <p className="text-gray-700">
            Nosotros estamos en los detalles.
          </p>
        </div>
      </div>
    </section>
  );
}
