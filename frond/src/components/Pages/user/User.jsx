// src/components/Pages/user/User.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { perfilSocios } from "@/assets/Aliados/Aliados";
import {
  FaInstagram,
  FaFacebookF,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function User() {
  const { id } = useParams();
  const nombreDecodificado = decodeURIComponent(id);
  const usuario = perfilSocios.find((socio) => socio.nombre === nombreDecodificado) ;

  if (!usuario) {
    return (
      <div className="text-center text-red-600 mt-12 text-lg font-semibold">
        Usuario no encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10">
        {/* Imagen + nombre */}
        <div className="flex flex-col items-center text-center">
          <img
            src={usuario.imagen}
            alt={usuario.nombre}
            className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-pink-500 shadow-lg"
          />
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800">{usuario.nombre}</h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xl">{usuario.descripcion}</p>

          {/* Íconos redes */}
          <div className="flex gap-6 mt-4 text-xl">
            {usuario.instagram && (
              <a href={usuario.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-600 hover:text-pink-700 transition" />
              </a>
            )}
            {usuario.facebook && (
              <a href={usuario.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF className="text-blue-600 hover:text-blue-700 transition" />
              </a>
            )}
            {usuario.web && (
              <a href={usuario.web} target="_blank" rel="noreferrer">
                <FaGlobe className="text-green-700 hover:text-green-800 transition" />
              </a>
            )}
          </div>
        </div>

        {/* Información */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-indigo-500 mt-1" />
            <div>
              <strong className="block">Dirección</strong>
              {usuario.direccion}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-indigo-500 mt-1" />
            <div>
              <strong className="block">Teléfono</strong>
              {usuario.telefono}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-indigo-500 mt-1" />
            <div>
              <strong className="block">Correo</strong>
              {usuario.correo}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-indigo-500 mt-1" />
            <div>
              <strong className="block">Horario</strong>
              {usuario.horario}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
