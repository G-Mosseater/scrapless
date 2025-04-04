"use client";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

export default function Map() {
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

        return position === null ? null : (
            <Marker position={position}>
                <Popup>
                    {placeInfo ? (
                        <div>
                            <h3>{placeInfo.name}</h3>
                            <p>Rating: {placeInfo.rating}</p>
                            <p>Horario: {placeInfo.hours}</p>
                        </div>
                    ) : (
                        "Cargando..."
                    )}
                </Popup>
            </Marker>
        );
    }

    // Obtener información del lugar con una API (ejemplo con OpenStreetMap Nominatim)
    async function fetchPlaceInfo(lat: number, lng: number) {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();

        // Simulación de datos adicionales
        setPlaceInfo({
            name: data.display_name,
            rating: (Math.random() * 5).toFixed(1), // Generar un rating ficticio
            hours: "8:00 AM - 10:00 PM", // Simulación de horario
        });
    }

    return (
        <MapContainer center={[40.4168, -3.7038]} zoom={13} className="h-[500px] w-full">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    );
}
