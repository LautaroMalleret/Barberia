// src/sections/Contacto.jsx
// export default function Contacto() {
//   return (
//     <section id="contacto" className="py-16 bg-white">
//       <div className="container mx-auto px-4 max-w-lg" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
//         <form onSubmit={(e) => { e.preventDefault(); alert("¡Gracias por contactarnos!"); }}>
//           <input type="text" placeholder="Tu nombre" className="w-full mb-4 p-3 border rounded" required />
//           <input type="email" placeholder="Tu email" className="w-full mb-4 p-3 border rounded" required />
//           <textarea placeholder="Tu mensaje" rows="4" className="w-full mb-4 p-3 border rounded" required />
//           <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
//             Enviar mensaje
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// src/sections/Contacto.jsx
import { useState } from "react";
import { WHATSAPP_NUMBER } from "../config"; // Importa el número de WhatsApp desde config.js

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const numero = WHATSAPP_NUMBER // Reemplazá con el número real del local
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
        <form onSubmit={enviarWhatsApp}>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mb-4 p-3 border rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            className="w-full mb-4 p-3 border rounded"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
