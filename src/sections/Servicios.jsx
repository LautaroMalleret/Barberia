// src/sections/Servicios.jsx
export default function Servicios() {
  const servicios = [
    { nombre: "💈​Corte moderno", desc: "Lo ultimo en tendencias." },
    { nombre: "💈​Corte + Barba", desc: "El servicio completo, listo para salir." },
    { nombre: "💈​Arreglo de barba", desc: "Definición y cuidado para tu barba." },
    { nombre: "💈​Afeitado profesional", desc: "Suavidad total con técnica clásica." },
    { nombre: "💈​Corte clasico", desc: "Para los que tienen un estilo ya definido." },
    { nombre: "💈​Corte niños", desc: "Que ellos elijan su estilo." },
    { nombre: "💈​Color completo", desc: "Cambio de look total." },
    { nombre: "💈​Reflejos", desc: "Para salir de la rutina" },




  ];

  return (
    <section id="servicios" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition" data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-2">{s.nombre}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
