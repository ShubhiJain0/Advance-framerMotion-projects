import React from 'react'
import {motion} from 'framer-motion'
const StickyNav = () => {

  const menuVariants = {
    hidden :{
      height: '5.6rem', transition :{
        duration : 0.3
      }
    },
    visible : {
      height : '29rem',
      transition :{
        duration : 0.3
      }
    }
  }

  const expandRowVariants = {
    hidden : {opacity : 0, y : 50},
    visible :(i : any)=>({
      opacity : 1,
      y:0,
      transition : {delay: 0.1*i, duration : 0.6}
    })
  }

  return (
    <div className="bg-black min-h-screen w-full">
      <motion.div
        className="fixed top-0 w-full p-8 bg-white text-black rounded-lg shadow-lg"
        variants={menuVariants}
        initial="hidden"
        whileHover="visible"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-2 font-semibold uppercase">Shubhi</div>
            </div>
            <div className="hidden md:flex space-x-5 text-center">
              <a href="" className="text-black font-bold">
                Products
              </a>
              <a href="" className="text-black font-bold">
                Use cases
              </a>
              <a href="" className="text-black font-bold">
                Resources
              </a>
              <a href="" className="text-black font-bold">
                Pricing
              </a>
            </div>
            <div className="flex items-center">
              <a href="" className="text-black font-bold">
                Join
              </a>
            </div>
            <motion.div
              className=" flex flex-col py-6"
              variants={expandRowVariants}
            >
              <span className="block w-full h-px bg-gray-300"></span>
              <motion.div
                variants={expandRowVariants}
                className="flex items-center mt-5" custom={1}
              >
                <span className="rounded-2xl border border-black text-black px-2 text-sm">
                  apple
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StickyNav