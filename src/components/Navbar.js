import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Estate from '../pages/Estate'
import Aos from 'aos';
import "aos/dist/aos.css"




export default function Navbar() {
    const [moved, setMoved] = useState(true)
    const [position, setPosition] = useState('fixed');
    const [menu, setMenu ] = useState(false)

    const handleMenu = () => {
        if (menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setMoved(true);
            } else {
                setMoved(false);
            }
        };
        const handleScrolY = () => {
            if (window.scrollY > 678) {
                setPosition("hidden");
            } else {
                setPosition("fixed");
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrolY);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
    
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <>
            <div data-aos="fade-down" className={`duration-600 flex justify-between h-[4.5rem] w-screen items-center px-8 ${position} z-50 bg-[#000000]`}>
                <img src={Logo} alt="Logo"  className='object-fit h-9' />
                <div onClick={handleMenu} class={`sm:hidden bg-gray-800 p-1.5 inline-block rounded duration-200 hover:bg-gray-700 active:bg-gray-600 active:scale-105`}>
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <ul className={`flex flex-col absolute top-16 right-6 w-[260px] bg-[#000000] rounded-xl h-40 p-8 justify-center text-center space-y-7
                sm:flex-row sm:space-x-7 sm:items-center sm:relative sm:inset-0 sm:space-y-0 sm:p-0 sm:w-[350px] sm:bg-[#000000] sm:h-16 sm:flex-1 sm:flex sm:justify-end duration-300
                ${menu ? "translate-x-0" : "translate-x-80"} sm:translate-x-0`}>
                    <Link to="/">
                        <li className='cursor-pointer duration-300 text-gray-400 hover:text-gray-200 capitalize'>welcome</li>
                    </Link>
                    <li className='cursor-pointer duration-300 text-gray-400 hover:text-gray-200 capitalize'><a href='#start'>get started</a></li>
                    <Link to="/estate">
                        <li className='cursor-pointer duration-300 text-gray-400 hover:text-gray-200 capitalize'>Browse</li>
                    </Link>
                    <button className='bg-[#0c2587] text-white px-5 py-2 rounded hover:bg-[#233686] duration-200'><a href='#contact'>contact</a></button>
                </ul>
            </div>
        </>
    )
}
