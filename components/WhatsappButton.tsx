"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsappButton() {
  const phone = "555199204815"; // coloque seu número
  const link = `https://wa.me/${phone}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">

      {/* Balão */}
      <div className="hidden md:block bg-white text-gray-700 text-sm px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
        Fale conosco
      </div>

      {/* Botão */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg hover:scale-110 transition"
      >

        <FaWhatsapp size={28} className="relative z-10" />
      </a>
    </div>
  );
}