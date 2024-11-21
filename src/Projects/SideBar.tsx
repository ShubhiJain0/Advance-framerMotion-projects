import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
const SideBar = () => {

  const [isOpen , setOpen] = useState(true);

  const sideBarVariants = {
    open: { opacity: 1, scale: 1, x: 0 },
    close: { opacity: 0, scale: 0.8, x: '-100%' },
  };

  const containerVairants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  };

  const backdropVariants={
    open:{opacity : 0.6},
    closed : {opacity : 0}
  }

  const itemVariants ={
    open : {opacity : 1, y : 0, scale :1},
    close : { opacity : 0, y : -20, scale : 0.9}
  }

  return (
    <div className="relative ">
      <motion.div className="fixed bg-gray-800 inset-0" 
      variants={backdropVariants}
      initial='close' animate={isOpen? 'open': 'close'}
      transition={{duration :0.3}}
      onClick={()=>{setOpen(false)}}
      ></motion.div>
      <motion.div
        className="w-64 fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg"
        variants={sideBarVariants}
        initial="close"
        animate={isOpen ? "open" : "close"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-4">
          <button className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full">
            <IoMdArrowBack
              height={6}
              width={6}
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          </button>
          <h2 className="text-2xl font-bold mb-2">filters</h2>
          <motion.div
            className="space-y-4"
            variants={containerVairants}
            initial="close"
            animate={isOpen ? "open" : "close"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Category</h3>

              <ul>
                <li>
                  <label htmlFor="" className="inline-flex items-center mt-2">
                    <input type="checkbox" name="" id="" />
                    <span className="ml-2">options 1</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="" className="inline-flex items-center mt-2">
                    <input type="checkbox" name="" id="" />
                    <span className="ml-2">options 1</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="" className="inline-flex items-center mt-2">
                    <input type="checkbox" name="" id="" />
                    <span className="ml-2">options 1</span>
                  </label>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Price range</h3>
              <input
                type="range"
                name=""
                min={0}
                max={100}
                id=""
                step={10}
                className="w-full"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="">
              <h3 className="text-xl font-semibold">Rating</h3>
              <label htmlFor="" className="inline-flex items-center mt-2">
                <input type="radio" name="" id="" />
                <span className="ml-2">1 star</span>
              </label>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <button
        className="absolute top-4 left-4 z-10 p-2 bg-gray-500 text-white rounded-full"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <IoMdArrowBack height={6} width={6} />
        ) : (
          <IoMdArrowForward height={6} width={6} />
        )}
      </button>
    </div>
  );
}

export default SideBar