"use client"

import Button from "@/components/ui/Button"
import { ShoppingBag } from "lucide-react"

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center justify-center rounded-full px-4 py-2 bg-black">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          0
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions