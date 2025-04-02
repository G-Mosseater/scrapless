import Image from "next/image";

export default function NavBar() {
    return (
        <>
            <div className="flex justify-around items-center w-[398px] h-[75px] border border-[#14213D] rounded-t-[10px] bg-white">
                <div className="flex items-center justify-center w-12 h-12">
                    <a href="/forgot-password">
                        <Image
                            src="/icons/home-rounded.png"
                            width={40}
                            height={40}
                            alt="Home"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                    <a href="/forgot-password">
                        <Image
                            src="/icons/store.png"
                            width={40}
                            height={40}
                            alt="Store"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                    <a href="/forgot-password">
                        <Image
                            src="/icons/map-pin.png"
                            width={40}
                            height={40}
                            alt="Map"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                    <a href="/forgot-password">
                        <Image
                            src="/icons/profile-fill.png"
                            width={40}
                            height={40}
                            alt="Profile"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                    <a href="/forgot-password">
                        <Image
                            src="/icons/box-bold.png"
                            width={40}
                            height={40}
                            alt="box"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}