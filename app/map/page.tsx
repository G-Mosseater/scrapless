import Map from "@/components/map";
import NavBar from "@/components/nav-bar";

export default function Page() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Mapa Interactivo</h1>
      <Map />
      <NavBar/>
    </div>
  );
}
