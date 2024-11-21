import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
const ScrollBar = () => {
 const { scrollYProgress } = useScroll();
 const linewidth = useTransform(scrollYProgress , [0, 1], ['0%', '100%']);
  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        className="fixed top-0 left-0 bg-red-500 h-4
      "
        style={{ width: linewidth, transition: "width 0.1s ease" }}
      ></motion.div>
      <div className="m-6">
        {[...Array(100)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            labore, accusantium necessitatibus officiis minus architecto?
            Possimus, quo. Sequi illum nobis earum excepturi maiores
            necessitatibus veritatis dignissimos officiis nisi, quibusdam magni
            placeat culpa a, ullam quod quam et aut fugiat minus porro autem!
            Expedita esse asperiores dolorem quos modi cumque. Nostrum? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam
            repellendus eum debitis minima architecto, eos non tenetur. Id iste
            molestiae est rem facere, deserunt consectetur dolore necessitatibus
            consequatur cupiditate.
          </p>
        ))}
      </div>
    </div>
  );
}

export default ScrollBar