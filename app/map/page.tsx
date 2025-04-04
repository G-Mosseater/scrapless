"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [placeInfo, setPlaceInfo] = useState<any>(null);

  // Función para manejar clics en el mapa
  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        fetchPlaceInfo(lat, lng);
      },
    });

    return position === null ? null : <Marker position={position} />;
  }

  // Obtener información del lugar con OpenStreetMap Nominatim
  async function fetchPlaceInfo(lat: number, lng: number) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();

    // Simulación de datos adicionales
    setPlaceInfo({
      name: data.display_name || "Lugar desconocido",
      rating: (Math.random() * 5).toFixed(1), // Simulación de rating
      hours: "8:00 AM - 10:00 PM", // Simulación de horario
    });
  }

  return (
    <div className="flex flex-col h-screen pb-16"> {/* Agregamos espacio para la navbar */}
      {/* Mapa - Mitad superior */}
      <div className="h-1/2">
        <MapContainer center={[40.4168, -3.7038]} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
        </MapContainer>
      </div>

      {/* Información - Mitad inferior */}
      <div className="h-1/2 flex flex-col items-center justify-center bg-gray-100 p-5">
        {placeInfo ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{placeInfo.name}</h2>
            <p className="text-lg mt-2">⭐ {placeInfo.rating}/5</p>
            <p className="text-lg mt-2">🕒 {placeInfo.hours}</p>
          </div>
        ) : (
          <p className="text-lg text-gray-500">Haz clic en el mapa para ver información</p>
        )}
      </div>

      {/* Navbar fija en la parte inferior */}
      <nav className="fixed bottom-0 w-full bg-white shadow-md p-4 flex justify-around items-center">
        <button className="text-lg font-semibold">🏠 Home</button>
        <button className="text-lg font-semibold">📍 Lugares</button>
        <button className="text-lg font-semibold">⚙️ Configuración</button>
      </nav>
    </div>
  );
}
