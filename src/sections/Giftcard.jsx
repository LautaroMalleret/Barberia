import giftcardImage from "../assets/giftcard.png"; // Imagen ilustrativa
import { WHATSAPP_NUMBER } from "../config"; // Importa el número de WhatsApp desde la configuración
export default function Giftcard() {
  return (
    <section id="giftcard" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6">¿Querés hacer un regalo?</h2>
        <p className="mb-4 text-gray-700">¡Regalá un cambio de look con nuestras giftcards digitales!</p>
        <img src={giftcardImage} alt="Giftcard" className="mx-auto w-full max-w-sm rounded shadow" />
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
          Pedila por WhatsApp
        </a>
      </div>
    </section>
  );
}
