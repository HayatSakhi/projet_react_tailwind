import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const Footer = () => {
    return (
        <footer className=' bottom-0 bg-black md:bg-stone-900 p-5 w-full ' >

            <div className='divide-y divide-opacity-45 divide-stone-400 divide-solid' >
                <div className='items-start md:items-center flex flex-col gap-4 py-3' >
                    <h3 className='text-3xl font-bold text-neutral-50 leading-9'>
                        Subscribe now
                    </h3>
                    <div className='  flex flex-row justify-between p-2 rounded-lg w-[320px] md:w-[420px] bg-white' >
                        <input type="email" placeholder='Enter your email' className=' focus:outline-none text-neutral-700 text-start ' />
                        <Button text='Subscribe' className='bg-yellow-600 text-white' />
                    </div>

                </div>
                <div className='py-3 flex justify-between space-y-3'>
                    <NavLink to='/' className='text-neutral-50 font-semiblod text-base' >
                        Home
                    </NavLink>
                    <NavLink to='/about' className='text-neutral-50 font-semiblod text-base' >
                        Aboute
                    </NavLink>
                    <NavLink to='/contact' className='text-neutral-50 font-semiblod text-base' >
                        Contact
                    </NavLink>
                </div>
                <p className='py-3 text-center text-base font-normal text-neutral-50'>
                    Copyright © 2024 | All Rights Reserved | Terms and Conditions | Privacy Policy

                </p>
            </div>

        </footer>
    )
}

export default Footer
