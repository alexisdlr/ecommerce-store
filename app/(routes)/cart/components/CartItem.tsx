import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id)
  }
  return (
    <li className="flex py-6 border-b">
      <div className="w-24 h-24 relative rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data.images[0].url}
          fill
          alt="product"
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 ml-4 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 top-0 right-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.size.name}</p>
            <p className="text-gray-500 ml-4 border-1 border-l pl-4 ">{data.color.name}</p>
          </div>
          <Currency value={Number(data.price)} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
