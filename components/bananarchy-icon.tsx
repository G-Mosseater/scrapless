import Image from "next/legacy/image";

export default function BananarchyIcon() {
    return (
        <>
            <Image
                src="/banana.svg"
                width={100}
                height={100}
                alt="Bananarchy logo"
            />
        </>
    );
}
