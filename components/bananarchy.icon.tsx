import Image from 'next/image';

export default function BananarchyIcon() {
    return (
        <>
            <div className="flex items-center justify-center w-full gap-x-4">
                <h1 className="font-bold text-3xl">Scrapless</h1>
                <Image
                    src="/images/logo.png"
                    width={120}
                    height={120}
                    alt="Bananarchy logo"
                />
            </div>
        </>
    );
}
