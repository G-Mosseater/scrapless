import Image from "next/image";

export default function ProductCard() {
    return (
        <>
            <div className="flex w-[130px] h-[160px] border border-[#14213D] rounded-t-2xl justify-center items-center">
                <Image
                    src="/images/foto.png"
                    width={130}
                    height={160}
                    alt="foto"
                />
            </div>
            <div className="flex justify-center w-[130px] h-[30px] border border-[#14213D] rounded-b-2xl">
                <p>name</p>
            </div>
        </>
    )
} 
