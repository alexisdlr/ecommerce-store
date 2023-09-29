"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";

const Summary = () => {
  const searchParams = useSearchParams()
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    if(searchParams.get('success')) {
      toast.success('Payment Completed')
      removeAll()
    }
    if(searchParams.get('canceled')) {
      toast.error('Something went Wrong')
    }

  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, {price}) => {
    return total + Number(price) 
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_API_PUBLIC_URL}/checkout`, {
      productIds: items.map(item => item.id)
    })
    window.location = response.data.url
  }
  return (
    <div className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <h3>Order Total</h3>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="mt-6 w-full" onClick={onCheckout}>Checkout</Button>
    </div>
  );
};

export default Summary;
