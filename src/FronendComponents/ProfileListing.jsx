import React from 'react'
import Profile from './Profile'
import image from '../assets/profile.png'

const ProfileListing = () => {

    const profiles= [
        {name:'Alaoui ahmed', profile:'Frendend developper', description:'Lorem ipsum dolor sit amet consectetur  ipsum dolor sit amet consectetur adipisicing', image:{image}, className:'border-yellow-700'},
        {name:'Alaoui ahmed', profile:'Frendend developper', description:'Lorem ipsum dolor sit amet consectetur  ipsum dolor sit amet consectetur adipisicing', image:{image}, className:'border-green-700'},
        {name:'Alaoui ahmed', profile:'Frendend developper', description:'Lorem ipsum dolor sit amet consectetur  ipsum dolor sit amet consectetur adipisicing', image:{image}, className:'border-red-700'},

    ]

  return (
    <section className='bg-white p-10 md:p-16 ' >
        <div className='flex flex-col space-y-14 gap-24'>
        <div className='flex flex-col gap-7 justify-center items-center' >
            <h2 className='text-2xl text-black italic font-semibold font-sans'>
                TEAM 
            </h2>

            <p className='text-base text-neutral-700 font-semibold font-sans w-100' >
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
            </p>

        </div>

        <div className='flex flex-col md:flex-row gap-20 md:gap-5 items-center justify-center '>
            { profiles.map((profile, index) =>(
                <Profile key={index} name={profile.name} profile={profile.profile} description={profile.description} className={profile.className} image={image} />
            ))
            }
            
        </div>
        </div>
    </section>
  )
}

export default ProfileListing
