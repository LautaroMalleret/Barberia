import Slider from "react-slick";

export default function Clientes() {
  const testimonios = [
    {
      nombre: "Juan P.",
      mensaje: "Excelente atención, salí como nuevo. Muy recomendable.",
    },
    {
      nombre: "Martín G.",
      mensaje: "Cortes modernos y prolijos, ¡un 10! Me hice cliente fijo.",
    },
    {
      nombre: "Lucas D.",
      mensaje: "Ambiente cómodo, buena onda y profesionales de verdad.",
    },
    {
      nombre: "Ramiro B.",
      mensaje: "La mejor barbería de la zona, súper conforme con el servicio.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section id="clientes" className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Nuestros Clientes</h2>
        <Slider {...settings}>
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded shadow text-center mx-4">
              <p className="text-gray-600 italic mb-4">“{t.mensaje}”</p>
              <h4 className="font-semibold text-gray-900">– {t.nombre}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
