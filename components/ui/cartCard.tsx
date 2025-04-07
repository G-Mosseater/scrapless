import {
  Card,
  CardContent,

} from "@/components/ui/card";
import { Button } from "./button";
import { Plus, Minus, Home, Store, MapPin, Package, User } from "lucide-react";
import Image from "next/image";

export default function CartCard() {
  return (

      <Card className="rounded-3xl border-[hsl(var(--blues))]  w-full min-w-[420px]">
        <CardContent className="flex items-center">
          <div className="w-24 h-24 overflow-hidden rounded-md">
            <Image
              src="/fruits-loading-Vu5S5tYoxZ.png"
              alt="Example image"
              layout="responsive"
              width={16}
              height={9}
            />
          </div>
          <div className="flex-1 ml-4">
            <p className="text-2xl font-medium">Name</p>
            <p className="text-2xl font-medium">Price</p>
            <p className="text-2xl font-medium">Amount</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="default" className="bg-[#14213d] h-12 w-12 p-0">
              <Plus size={24} />
            </Button>
            <span className="text-lg font-medium">1 kg</span>
            <Button variant="default" className="bg-[#14213d] h-12 w-12 p-0">
              <Minus size={24} />
            </Button>
          </div>
        </CardContent>
      </Card>
  );
}
