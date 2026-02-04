import React from 'react'
import { House } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900'>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">


        <div className='flex items-center space-x-3 cursor-pointer'>
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10" />
        </div>
      </div>
      </header>
    </>
  )
}

export default Navbar;
