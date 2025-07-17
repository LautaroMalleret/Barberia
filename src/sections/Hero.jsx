/////////////////////////////////////////////////////////////////////////////////
// Fondo liso de banner con texto encima

// // import { WHATSAPP_NUMBER } from "../config";
// export default function Hero() {
//   return (
//     <section id="inicio" className="pt-24 bg-gray-900 text-white h-screen flex items-center justify-center text-center">
//       <div>
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">Estilo y precisión para el hombre moderno</h2>
//         <p className="mb-6 text-lg">Cortes clásicos, modernos, barba y más.</p>
//         <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="bg-green-500 px-6 py-3 rounded text-white font-semibold hover:bg-green-600 transition">
//           Reservá tu turno
//         </a>
//       </div>
//     </section>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//imagen de banner de fondo con texto encima

import banner from "../assets/banner2.jpg";
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0 left-0 z-0" />
      <div className="z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Estilo y precisión para nosotros</h2>
        <p className="mb-6 text-lg">Cortes, barba y atención personalizada.</p>
        {/* <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 px-6 py-3 rounded text-white font-semibold hover:bg-green-600 transition"
        >
          Reservá tu turno
        </a> */}
      </div>
    </section>
  );
}

// src/sections/Hero.jsx



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Imagen de banner completa 
// import banner from "../assets/banner.jpg";

// export default function Hero() {
//   return (
//     <section id="inicio" className="pt-24 bg-white text-center">
//       <img src={banner} alt="Banner barbería" className="w-full h-auto max-h-[500px] object-cover" />
//       <div className="py-12 px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu estilo empieza acá</h2>
//         <p className="mb-6 text-gray-700">Atención personalizada y cortes de primera.</p>
//         <a
//           href="https://wa.me/5491123456789"
//           target="_blank"
//           rel="noreferrer"
//           className="bg-green-500 px-6 py-3 rounded text-white font-semibold hover:bg-green-600 transition"
//         >
//           Reservá tu turno
//         </a>
//       </div>
//     </section>
//   );
// }

