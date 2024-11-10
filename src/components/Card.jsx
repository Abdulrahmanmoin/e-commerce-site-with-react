import React from 'react'

function Card({title, imageSrc, price, rating, description}) {
  return (
    <>
      <div className='mx-5 border-2 border-black break-words my-10  overflow-hidden '>
        <div className='h-1/3 bg-black text-white flex flex-col md:flex-row break-words '>
          <div className='break-words self-center justify-self-center flex flex-col sm:flex-row sm:gap-16 md:gap-1 items-center md:items-start xl:mt-20'>
            <div className='mt-3 sm:m-3 md:w-96'>
              <img src={imageSrc} alt={title} className=' w-48 h-32 md:h-56 object-cover' />
            </div>
            <div className='h-1/3 py-3 font-mono break-words'>
              <h3 className='text-2xl font-semibold break-words'>{title}</h3>
              <h4 className='text-lg'>{`Price: $${price}`}</h4>
            </div>
          </div>
        </div>
        <div className='h-2/3 bg-white text-black font-mono flex flex-col break-words '>
          <div className='my-4 xl:mt-20'>
            <h4 className='text-md px-3 '> <span className='font-extrabold text-md italic underline'>Rating</span>{`: ${rating}`}</h4>
            <p className='text-sm px-3'> <span className='font-extrabold text-md italic underline'>Description</span>{`: ${description}`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

