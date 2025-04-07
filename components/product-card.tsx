import * as React from "react";
import Image from "next/legacy/image";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function ProductCard() {
  return (
    <Card className="w-[130px] h-[190px] border-2 border-[#14213D] rounded-2xl overflow-hidden">
      <CardContent className="flex justify-center items-center p-0 h-[160px]">
        <Image
          src="/images/card.jpg"
          width={130}
          height={160}
          alt="foto"
        />
      </CardContent>
      <CardFooter className="flex justify-center items-center h-[30px] border-[#14213D]">
        <p>name</p>
      </CardFooter>
    </Card>
  );
}