import Image from "next/legacy/image";

export default function BananarchyIconTitle({ className }) {
  return (
    <div className={`flex items-center gap-x-4 w-full ${className}`}> {/* Añadí className */}
      <Image
        src="/images/logo.png"
        width={120}
        height={120}
        alt="Bananarchy logo"
      />
      <h1 className="font-bold text-3xl">Scrapless</h1>
    </div>
  );
}
