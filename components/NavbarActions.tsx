"use client";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart()
  if (!isMounted) {
    return null;
  }

  const onClick = () => {
    router.push('/cart')
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center justify-center rounded-full px-4 py-2 bg-black" title="Cart" onClick={onClick} >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
