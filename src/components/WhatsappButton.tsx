import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber: string = "918608481094"; // change to your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5
        w-12 h-12
        bg-green-500
        text-white
        rounded-full
        flex items-center justify-center
        text-2xl
        shadow-lg
        z-50
        animate-bounce
        hover:scale-110
        transition-transform
      "
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;