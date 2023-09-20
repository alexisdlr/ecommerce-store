"use client"
import { motion } from "framer-motion"

interface ContainerProps {
  children: React.ReactNode
}
const Container = ({children}: ContainerProps) => {
  return (
    <motion.div 
      animate={{ opacity: [0,1]}}
      transition={{duration: .5}}

      className="mx-auto max-w-7xl">
      {children}
    </motion.div>
  )
}

export default Container