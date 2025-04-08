import Image from "next/legacy/image";

export default function BananarchyIconTitle() {
  return (
    <div className="relative w-full flex items-center">
      <div className="absolute left-0">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="Bananarchy logo"
        />
      </div>

      <h1 className="mx-auto font-bold text-3xl text-center">Scrapless</h1>
    </div>
  );
}


