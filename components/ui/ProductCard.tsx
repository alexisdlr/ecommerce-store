"use client";
import { motion } from "framer-motion";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import { variants } from "@/lib/utils";
import usePreviewModal from "@/hooks/usePreviewModal";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  data: Product;
  index: number;
}

const ProductCard = ({ data, index }: ProductCardProps) => {
  const previewModal = usePreviewModal();
  const cart = useCart();

  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      custom={{ delay: (index + 1) * 0.1 }}
      variants={variants}
      viewport={{ once: false }}
      onClick={handleClick}
      className="bg-white border group cursor-pointer rounded-xl p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="product"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 w-full px-6 absolute bottom-5 transition">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={
                <Expand
                  size={20}
                  onClick={() => {}}
                  className="text-gray-600"
                />
              }
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <Currency value={Number(data.price)} />
    </motion.div>
  );
};

export default ProductCard;
