import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }: {delay: number} ) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
}