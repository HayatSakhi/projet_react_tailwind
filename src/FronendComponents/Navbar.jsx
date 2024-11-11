import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { Menu, X } from 'lucide-react'


const Navbar = () => {

    const linkClass = ({ isActive }) =>
        isActive ? ' text-yellow-600 text-l font-semibold font-serif  '
            : ' text-white text-l font-semibold font-serif '

    const [mobileOpen, setMobileOpen] = useState(false)

    const toggleNavbar = (e) => {
        e.preventDefault();
        setMobileOpen(!mobileOpen);
    }


    return (
        <>
        <nav className='fixed top-0 bg-black md:bg-stone-800 w-full px-5 p-3 z-50' >
            <div className='container flex items-center justify-between ' >


                <h3 className='text-white text-xl font-bold font-serif pl-4 md:pl-10' >
                    LOGO
                </h3>


                <div className='hidden md:flex items-center space-x-10' >
                    <NavLink className={linkClass} to='/'>
                        Home
                    </NavLink>
                    <NavLink className={linkClass} to='/about'>
                        About
                    </NavLink>
                    <NavLink className={linkClass} to='/contact'>
                        Contact
                    </NavLink>

                </div>


                <div className='hidden md:flex space-x-6'>
                    <Button text='Log In' link={'/'} className='bg-white text-yellow-600 border border-yellow-600 ' />
                    <Button text='Sign Up' link={'/'} className='bg-yellow-600 text-white border border-yellow-600 ' />

                </div>

                <div className='flex justify-end  md:hidden' >
                    <button onClick={toggleNavbar} >
                        {mobileOpen ? <X className='text-yellow-600' /> : <Menu className='text-white' />}
                    </button>

                </div>

            </div>
            
        </nav>
        {mobileOpen && (
            <div className='fixed bg-black top-0 left-0 w-full h-screen z-40 md:hidden'>
                <div className='flex flex-col space-y-8 items-center pt-20 '>
                    <NavLink className={linkClass} to='/'>
                        Home
                    </NavLink>
                    <NavLink className={linkClass} to='/about'>
                        About
                    </NavLink>
                    <NavLink className={linkClass} to='/contact'>
                        Contact
                    </NavLink>
                    <Button text='Log In' link={'/'} className='bg-white text-yellow-600 border border-yellow-600 ' />
                <Button text='Sign Up' link={'/'} className='bg-yellow-600 text-white border border-yellow-600 ' />


                </div>
            </div>
        )}
        </>



    )
}

export default Navbar
