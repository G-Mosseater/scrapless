import Image from "next/image";

import { Button } from "../components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="relative w-full mx-auto aspect-[16/9]">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold absolute top-4 left-6 z-10">
          Scrapless
        </h1>
        <Image
          src="/food-wast.svg"
          alt="Madspild illustration"
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>
      <div className="mx-3">
        <div className="flex justify-between my-4">
          <h2 className="text-2xl sm:text-2xl font-bold inline-flex">
            A smarter way to save food and reduce waste!
          </h2>
          <div>
            <Image
              src="/icons/fruit-loding.gif"
              alt="Example image"
              width={125}
              height={75}
              className="my-4" unoptimized
            />

          </div>
        </div>


        <div className="mx-auto text-left space-y-4 my-4">
          <h2 className="font-bold text-xl">Our Mission</h2>
          <p className="whitespace-pre-line">We’re transforming food waste in Gran Canaria by connecting farmers, businesses, and communities.</p>

          <p className="mt-7">Our platform helps farmers sell surplus produce, reduces waste, and ensures more food reaches people—not landfills.</p>
          <Image
            src="/icons/high5.gif"
            alt="Example image"
            width={100}
            height={50}
            className="mx-auto" unoptimized
          />
        </div>
        <div className="flex flex-col items-center space-y-4 my-1">
          <Button asChild>
            <Link href="/list">Check our storage!</Link>
          </Button>

          <Image
            src="/or.svg"
            alt="Example image"
            width={700}
            height={350}
            className="my-7" unoptimized
          />
          <Button>
            <Link href="/add-product">Post yours! </Link>
          </Button>
        </div>
        <div className="my-7">
          <h2 className="font-bold text-2xl">Why we should we care about food waste?</h2>
          <Image
            src="/icons/dust-bin.gif"
            alt="Example image"
            width={100}
            height={50}
            className="mx-auto mb-7" unoptimized
          />
          <p className="whitespace-pre-line"><span className="font-bold">Gran Canaria</span> faces significant food waste issues, with around 1,300 million kilograms of food discarded annually.</p>

          <p className="my-7">The island struggles with underutilized agricultural land and high food imports, but initiatives like the "Too Good To Go" app and donations from hotels to the Food Bank of Las Palmas are helping reduce waste.</p>

          <p>These efforts are part of a broader commitment to sustainability and food security in the region.</p>
        </div>
        <div className="my-4">
          <Image
            src="/icons/farmer.gif"
            alt="Example image"
            width={300}
            height={150}
            className="mb-7 mx-auto" unoptimized
          />
          <p className="whitespace-pre-line">Our platform helps local farmers and producers by offering their "imperfect" or surplus products at discounted prices.</p>

          <p className="mt-7">You save money, support local businesses, and reduce waste—all while enjoying great quality.</p>
        </div>
      </div>
      <footer className="bg-[#14213D] text-white p-3 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/icons/banana-swag.gif"
              alt="Example image"
              width={100}
              height={50}
              unoptimized

            />
          </div>
          <h2 className="text-3xl font-bold">Scrapless</h2>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Follow us</h4>
          <ul className="flex space-x-4 mt-2">
            <li>
              <Image
                src="/facebook.svg"
                alt="Example image"
                width={40}
                height={40}
              /></li>
            <li>
              <Image
                src="/ion_social-github.svg"
                alt="Example image"
                width={40}
                height={40}
              /></li>
            <li>
              <Image
                src="/insta.svg"
                alt="Example image"
                width={40}
                height={40}
              /></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contact Us</p>
          <ul className="text-sm text-gray-300 space-y-1 mt-2">
            <li>Email: support@scrapless.com</li>
            <li>Phone: +34 800 123 456</li>
            <li>Address: 123 Eco Street, Las Palmas, Gran Canaria, Spain</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
