import React from 'react'
import leader from '../assets/leader.png'

const Hero = () => {
  return (
    <section className='w-full bg-no-repeat bg-cover bg-hero-background pt-10' >

        <div className='flex flex-col-reverse items-center justify-center md:flex-row space-y-8 md:space-x-10 p-7 md:p-0' >
            <div className='flex flex-col space-y-6 items-center' >
                <h1 className=' text-xl md:text-2xl text-yellow-700 font-semibold font-serif '>
                    Lorem ipsum ipsum dolor sit.
                </h1>
                <p className='text-sm text-stone-600 font-serif font-semibold '>
                    Lorem ipsum dolor ipsumipsum sit, amet consectetur adipisicing elit.
                </p>

            </div>
            <div className=' self-center w-[340px] h-[300px] md:w-[500px] md:h-[500px] ' >
                <img src={leader} alt="" />

            </div>
        </div>

    </section>
  )
}

export default Hero
