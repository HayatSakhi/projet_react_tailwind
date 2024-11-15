import React from 'react'
import Button from './Button'


const Profile = ({className, name, profile, description, image}) => {
  return (
    <div className={`flex flex-col gap-6 items-center rounded-lg border-2 border-solid ${className} w-80  lg:w-[360px] xl:w-[450px] h-[360px]`}>

        <div className="flex flex-col items-center gap-8">

            <img src={image} alt="image" className={` -mt-16 w-32 h-32 rounded-full border-4 border-solid ${className}   `} />

            <h3 className='font-semibold text-xl text-center text-black text-italic '>
                {name}
            </h3>

            <h6 className='font-semibold text-sm text-center text-stone-700 '>
                {profile}
            </h6>

            <p className='text-base font-semibold font-sans text-center text-stone-800 px-4' >
                {description}
            </p>

        </div>

        <Button text='Voir profile' link={'/'} className='bg-white text-yellow-700 border border-yellow-600 ' />
      
    </div>
  )
}

export default Profile
