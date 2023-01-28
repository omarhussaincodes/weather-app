import React from 'react';
import { WiDayCloudyGusts } from "react-icons/wi";
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className="sticky z-20 cursor-pointer flex flex-row items-center justify-between font-mono text-stone-200 bg-header-primary text-sm md:text-md
         xl:text-2xl p-2 2xl:text-4xl">
            <Link to="/" relative='path'>
                <div className='flex flex-row justify-between items-center mx-0 relative p-1 animate-pulse ease-in-out'>
                    <div className='md:p-1'>
                        <WiDayCloudyGusts size={65} />
                    </div>
                    <div className="flex flex-col font-semibold tracking-tight items-start relative w-16 h-16">
                        <span className="absolute sm:top-6 md:top-0 2xl:top-2">Daily</span>
                        <span className="absolute sm:top-7 md:top-5 2xl:top-12">Weather</span>
                    </div>
                </div>
            </Link>
            <div className="hidden text-center cursor-pointer tracking-tighter p-1 md:block">
                {new Date().toDateString()}
            </div>
        </div>
    )
}

export default Navbar
