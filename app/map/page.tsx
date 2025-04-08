"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import TopNavBar from "@/components/top-navigation-menu";
import L from "leaflet";

export default function MapPage() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([40.4168, -3.7038]);
  const [placeInfo, setPlaceInfo] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");  // Para pasar el search term a TopNavBar

  // Configure Leaflet Icons
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
          setMapCenter(coords);
          setPosition(coords);
          fetchPlaceInfo(coords[0], coords[1]);
        },
        (err) => {
          console.warn("Error getting location:", err.message);
        }
      );
    }
  }, []);

  function FlyToLocation({ position }: { position: [number, number] | null }) {
    const map = useMap();

    useEffect(() => {
      if (position) {
        map.flyTo(position, 13, {
          duration: 2,
        });
      }
    }, [position]);

    return null;
  }

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

  async function fetchPlaceInfo(lat: number, lng: number) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();

    setPlaceInfo({
      name: data.display_name || "Lugar desconocido",
      rating: (Math.random() * 5).toFixed(1),
      hours: "8:00 AM - 10:00 PM",
    });
  }

  return (
    <div className="flex flex-col h-screen bg-[#ECE6DA] pb-16 pt-9">
      {/* Top Nav Bar */}
      <TopNavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Map */}
      <div className="flex-grow pt-[100px]"> {/* Ajustamos el padding-top para dar espacio a la top bar */}
        <div className="h-full rounded-b-3xl overflow-hidden shadow-lg">
          <MapContainer center={mapCenter} zoom={13} className="h-full w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
            <FlyToLocation position={position} />
          </MapContainer>
        </div>
      </div>

      {/* Information */}
      <div className="h-1/4 flex flex-col items-center justify-cente">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl text-center animate-fade-in border-2 border-[#F0AF3E]">
          {placeInfo ? (
            <>
              <h2 className="text-2xl font-bold text-[#14213D]">{placeInfo.name}</h2>
              <p className="text-lg text-[#14213D] mt-3">⭐ {placeInfo.rating} / 5</p>
              <p className="text-lg text-[#14213D] mt-1">🕒 {placeInfo.hours}</p>
            </>
          ) : (
            <p className="text-[#14213D] text-lg opacity-60">
              Click on the map to see information about the place
            </p>
          )}
        </div>
      </div>
    </div>
  );
}