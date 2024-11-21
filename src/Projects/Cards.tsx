import React, { CSSProperties, ReactNode } from 'react'
import {motion} from 'framer-motion'

interface DragabelCardProp {
  children : ReactNode,
  style : CSSProperties
}
const Cards = ({children , style}: DragabelCardProp) => {
  return (
    <motion.div
      className="rounded-2xl shadow-lg p-5 m-2 w-52 h-72 flex items-center justify-center text-white text-2xl"
      style={style}
      drag
      dragConstraints={{
        top: -200,
        right: 200,
        left: -200,
        bottom: 200,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      
    >
      {children}
    </motion.div>
  );
}

export default Cards