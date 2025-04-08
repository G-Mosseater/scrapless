"use client";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map() {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [placeInfo, setPlaceInfo] = useState<any>(null);

    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
    });

    // Manage clicks on the map
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
                        "Loading..."
                    )}
                </Popup>
            </Marker>
        );
    }

    async function fetchPlaceInfo(lat: number, lng: number) {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();

        setPlaceInfo({
            name: data.display_name,
            rating: (Math.random() * 5).toFixed(1),
            hours: "8:00 AM - 10:00 PM",
        });
    }

    return (
        <div className="flex flex-col h-screen bg-[#ECE6DA]"> {/* Esto da el espacio necesario para la top bar */}
            <MapContainer center={[40.4168, -3.7038]} zoom={13} className="h-full w-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
            </MapContainer>
        </div>
    );
}
