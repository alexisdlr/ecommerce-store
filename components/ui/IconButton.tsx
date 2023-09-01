import { cn } from "@/lib/utils"

interface IconButton {
  onClick: () => void
  className: string
}
const IconButton = ({className, onClick}: IconButton) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
      "rounded-full bg-white flex items-center justify-center border shadow-md p-2 hover:scale-110 transition"
      ,className
    )}>

    </button>
  )
}

export default IconButton