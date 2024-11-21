import React from 'react'
import {motion} from 'framer-motion'
const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='relative h-16 w-16 border-4 border-blue-500 border-solid rounded-full'>

        <motion.div className='absolute inset-0 border-4 border-teal-300 border-solid rounded-full'
        style={{borderTopColor: 'transparent'}}
        initial={{rotate:0}}
        animate={{rotate : 360}}
        transition={{duration : 1, repeat : Infinity}}
        ></motion.div>
      </div>
    </div>
  )
}

export default Loader