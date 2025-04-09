"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import FileUpload from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddProduct = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <>
      <div className="flex flex-col min-h-svh w-full items-center px-4 pt-4">
        <FileUpload />

        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Product Name</Label>
            <Input className="w-full" />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-lg">Price</Label>
            <Input type="number" className="w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="vegetable">Vegetable</SelectItem>
                
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-lg">Quantity</Label>
            <div className="flex items-center justify-end gap-2">
              <Button
                size="sm"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </Button>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
                className="w-16 text-center"
              />
              <Button size="sm" onClick={() => setQuantity((q) => q + 1)}>
                +
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-lg">Description</Label>
            <Textarea />
          </div>
        </div>

        <Button className="w-[200px] mt-4">Create</Button>
      </div>
    </>
  );
};

export default AddProduct;
