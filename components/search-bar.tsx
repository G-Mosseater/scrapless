import Image from "next/legacy/image";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

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

            <Input
                className="w-full h-full pl-20 pr-16 placeholder-black border-[1px] font-[sans-serif]"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}
