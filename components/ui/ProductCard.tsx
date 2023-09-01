"use client"

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./IconButton"

interface ProductCardProps {
  data: Product
}

const ProductCard = ({data}: ProductCardProps) => {
  return (
    <div className="bg-white border group cursor-pointer rounded-xl p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image src={data?.images?.[0]?.url} fill alt="product" className="aspect-square object-cover rounded-md" />
      </div>
      <div className="opacity-0 group-hover:opacity-100">
        <div className="flex gap-x-6 justify-center">
          <IconButton />
      </div>
    </div>
  )
}

export default ProductCard