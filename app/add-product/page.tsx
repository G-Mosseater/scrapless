import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import FileUpload from "@/components/file-upload";
import { Button } from "@/components/ui/button";

const AddProduct = () => {
  return (
    <div className="flex flex-col min-h-svh w-full items-center  justify-between p-3 ">
      <FileUpload />

      <div className="flex flex-col gap-3 w-full max-w-md  ">
        <Label>Product Name</Label>
        <Input className="w-full" />
        <Label>Origin</Label>
        <Input className="w-full" />
        <Label>Quantity</Label>
        <Input className="w-full" />
        <Label>Description</Label>

        <Textarea />
      </div>
      <Button className="w-[200px]">Create</Button>
    </div>
  );
};

export default AddProduct;
