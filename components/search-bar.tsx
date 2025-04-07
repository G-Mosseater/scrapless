import Image from 'next/image';
import { Input } from "@/components/ui/input"

export default function SearchBar() {
    return (
        <div className="relative w-[318px] h-[60px] flex items-center">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Image
                    src="/icons/search.png"
                    width={35}
                    height={35}
                    alt="Search"
                />
            </div>

            <Input className="w-full h-full pl-16 pr-16 placeholder-black border-2 font-[sans-serif]" placeholder="Search" />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F0AF3E] rounded-full w-[35px] h-[35px] flex items-center justify-center">
                <Image
                    src="/icons/mdi--filter.png"
                    width={20}
                    height={20}
                    alt="Filter"
                />
            </div>
        </div>
    );
}
