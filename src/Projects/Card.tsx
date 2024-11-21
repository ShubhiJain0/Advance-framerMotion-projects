import React from 'react'

const Card = ({card,idx} : {card : string, idx : number}) => {
  return (
    <div key={idx} className='group relative w-[10rem] overflow-hidden h-[10rem] bg-neutral-200'>
      <div style={{
        backgroundImage:`url(${card.url})`, backgroundSize: 'cover',
        backgroundPosition : 'center',
      }}
      className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
    </div>
  )
}

export default Card