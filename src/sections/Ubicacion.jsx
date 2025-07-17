export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Dónde estamos</h2>
        <p className="mb-4 text-gray-700">
          Nos encontrás en el centro de la ciudad. Te esperamos con atención
          personalizada.
        </p>
        <div
          className="w-full h-96 rounded overflow-hidden shadow-lg"
          data-aos="fade-up"
        >
          <iframe
            title="Ubicación Barbería"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.6141089820403!2d-58.7132369008149!3d-34.54373655884938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0d7e07c78b%3A0xf879e262f796e21a!2sPlaza%20de%20San%20Miguel!5e0!3m2!1ses!2sar!4v1752770757328!5m2!1ses!2sar"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
