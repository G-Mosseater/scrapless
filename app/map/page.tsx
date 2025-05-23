// "use client";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   useMapEvents,
//   useMap,
// } from "react-leaflet";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import TopNavBar from "@/components/top-navigation-menu";
// import NavBar from "@/components/nav-bar";
// import L from "leaflet";

// export default function MapPage() {
//   const [position, setPosition] = useState<[number, number] | null>(null);
//   const [mapCenter, setMapCenter] = useState<[number, number]>([40.4168, -3.7038]);
//   const [placeInfo, setPlaceInfo] = useState<any>(null);
//   const [selected, setSelected] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Configure Leaflet Icons only on the client side
//   useEffect(() => {
//     if (typeof window !== "undefined" && typeof navigator !== "undefined") {
//       // We use `as any` to bypass the TypeScript error and modify the icon URLs directly
//       (L.Icon.Default.prototype as any)._getIconUrl = () => ''; // Safe to override here
//       L.Icon.Default.mergeOptions({
//         iconRetinaUrl: "/leaflet/marker-icon-2x.png",
//         iconUrl: "/leaflet/marker-icon.png",
//         shadowUrl: "/leaflet/marker-shadow.png",
//       });
//     }
//   }, []);

//   // Fetch user's location and update map center
//   useEffect(() => {
//     if (typeof window !== "undefined" && navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
//           setMapCenter(coords);
//           setPosition(coords);
//           fetchPlaceInfo(coords[0], coords[1]);
//         },
//         (err) => {
//           console.warn("Error getting location:", err.message);
//         }
//       );
//     }
//   }, []);

//   async function fetchPlaceInfo(lat: number, lng: number) {
//     const response = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
//     );
//     const data = await response.json();

//     setPlaceInfo({
//       name: data.display_name || "Lugar desconocido",
//       rating: (Math.random() * 5).toFixed(1),
//       hours: "8:00 AM - 10:00 PM",
//     });
//   }

//   // FlyToLocation component to fly to the current position
//   function FlyToLocation({ position }: { position: [number, number] | null }) {
//     const map = useMap();

//     useEffect(() => {
//       if (position) {
//         map.flyTo(position, 13, {
//           duration: 2,
//         });
//       }
//     }, [position]);

//     return null;
//   }

//   // LocationMarker component to mark position on the map
//   function LocationMarker() {
//     useMapEvents({
//       click(e) {
//         const { lat, lng } = e.latlng;
//         setPosition([lat, lng]);
//         fetchPlaceInfo(lat, lng);
//       },
//     });

//     return position === null ? null : <Marker position={position} />;
//   }

//   return (
//     <div>
//       <div className="flex flex-col h-screen bg-[#ECE6DA] relative">
//         {/* Map */}
//         <div className="absolute inset-0 z-0 rounded-b-3xl overflow-hidden">
//           <MapContainer center={mapCenter} zoom={13} className="h-full w-full">
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <LocationMarker />
//             <FlyToLocation position={position} />
//           </MapContainer>
//         </div>

//         {/* Nav */}
//         <div className="z-10">
//           <TopNavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         </div>

//         {/* Info */}
//         <div className="z-10 absolute bottom-0 left-0 right-0 flex justify-center pb-6">
//           <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl text-center animate-fade-in border-2 border-[#F0AF3E]">
//             {placeInfo ? (
//               <>
//                 <h2 className="text-2xl font-bold text-[#14213D]">{placeInfo.name}</h2>
//                 <p className="text-lg text-[#14213D] mt-3">⭐ {placeInfo.rating} / 5</p>
//                 <p className="text-lg text-[#14213D] mt-1">🕒 {placeInfo.hours}</p>
//               </>
//             ) : (
//               <p className="text-[#14213D] text-lg opacity-60">
//                 Click on the map to see information about the place
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
const Page = () => {
  return <div>Map Page</div>;
};
export default Page;
