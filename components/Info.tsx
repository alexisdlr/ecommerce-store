"use client";
import { Product } from "@/types";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  
  return (
    <div>
      <h2 className="text-gray-900 text-3xl font-bold ">{data.name}</h2>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        {data.category.name !== "Shoes" ? (
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Color:</h3>
            <div
              className="h-6 w-6 border border-gray-600 rounded-full shadow-lg"
              style={{ backgroundColor: `${data.color.value}` }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex mt-10 items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add to cart <ShoppingCart className="h-4 w-4 font-bold" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
