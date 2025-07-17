import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../config"; 

export default function RedesSociales() {
  return (
    <div className="flex justify-center space-x-6 text-gray-600">
      <a href="https://instagram.com/tuusuario" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-600 text-2xl">
        <FaInstagram />
      </a>
      <a href="https://facebook.com/tuusuario" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-600 text-2xl">
        <FaFacebookF />
      </a>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-green-600 text-2xl">
        <FaWhatsapp />
      </a>
    </div>
  );
}
