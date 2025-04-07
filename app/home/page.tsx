import Image  from "next/image";

import  { Button }  from "../../components/ui/button";
import Link from "next/link";



export default async function home() {
    ;

    return (
        <div>
            <div className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 absolute top-4 left-6">Scrapless</p>
                <Image
                    src="/image-165.png"
                    alt="Example image"
                    layout="responsive"
                    width={16}
                    height={9}
                />
            </div>

            <div className="mx-3">
                <div className="p-6 max-w-md my-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 inline-flex items-center">
                        A smarter way to save food and reduce waste!
                        <Image
                            src="/fruits-loading-Vu5S5tYoxZ.png"
                            alt="Example image"
                            layout="responsive"
                            width={16}
                            height={9}
                        />
                    </h2>
                </div>


                <div className="max-w-sm mx-auto text-center space-y-4 my-4">
                    <h2 className="font-bold text-xl">Our Mission</h2>
                    <p className="whitespace-pre-line">We’re transforming food waste in Gran Canaria by connecting farmers, businesses, and communities.</p>

                    <p className="mt-7">Our platform helps farmers sell surplus produce, reduces waste, and ensures more food reaches people—not landfills.</p>
                    <Image
                        src="/d184c5c7-49ba-4f5e-9323-b263a21a0f8f.png"
                        alt="Example image"
                        layout="responsive"
                        width={10}
                        height={9}
                    />
                </div>
                <div className="flex flex-col items-center space-y-4 my-1">
                    <Button asChild>
                        <Link href="/list">Check our storage!</Link>
                    </Button>

                    <Image
                        src="/or.png"
                        alt="Example image"
                        layout="responsive"
                        width={13}
                        height={9}
                        className="my-7"
                    />
                    <Button> Post yours!</Button>
                </div>
                <div className="my-7">
                    <h2 className="font-bold text-2xl">Why we should we care about food waste?</h2>
                    <Image
                        src="/dust-bin-MWA1OxNwY5.png"
                        alt="Example image"
                        layout="responsive"
                        width={16}
                        height={9}
                    />
                    <p className="whitespace-pre-line"><span className="font-bold">Gran Canaria</span> faces significant food waste issues, with around 1,300 million kilograms of food discarded annually.</p>

                    <p className="my-7">The island struggles with underutilized agricultural land and high food imports, but initiatives like the "Too Good To Go" app and donations from hotels to the Food Bank of Las Palmas are helping reduce waste.</p>

                    <p>These efforts are part of a broader commitment to sustainability and food security in the region.</p>
                </div>
                <div className="my-4">
                    <Image
                        src="/64174324-c2c1-4057-8d00-e8887fdc2895.png"
                        alt="Example image"
                        layout="responsive"
                        width={16}
                        height={9}
                        className="mb-7"
                    />
                    <p className="whitespace-pre-line">Our platform helps local farmers and producers by offering their "imperfect" or surplus products at discounted prices.</p>

                    <p className="mt-7">You save money, support local businesses, and reduce waste—all while enjoying great quality.</p>
                </div>
            </div>
            <footer className="bg-[#14213D] text-white p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Scrapless</h2>
                    <Image
                        src="/banana.png"
                        alt="Example image"
                        layout="responsive"
                        width={16}
                        height={9}
                    />
                </div>

                <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Follow us</h4>
                    <ul className="flex space-x-4 mt-2">
                        <li>
                            <Image
                                src="/facebook.png"
                                alt="Example image"
                                layout="responsive"
                                width={16}
                                height={9}
                            /></li>
                        <li>
                            <Image
                                src="/ion_social-github.png"
                                alt="Example image"
                                layout="responsive"
                                width={16}
                                height={9}
                            /></li>
                        <li>
                            <Image
                                src="/Vector.png"
                                alt="Example image"
                                layout="responsive"
                                width={16}
                                height={9}
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
        </div>

    );
}