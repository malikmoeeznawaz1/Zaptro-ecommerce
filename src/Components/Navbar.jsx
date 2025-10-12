import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Pages/Home'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const location = false;
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex gap-7 items-center">
          <Link to={'/'}><h1 className='font-bold text-3xl cursor-pointer'><span className='text-red-400 font-serif'>Z</span>aptro</h1></Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className='text-red-400' />
            <span className='font-semibold '>{location ? <div></div> : "Add Address"}</span>
            <FaCaretDown />
          </div>
        </div>
        {/* menu section */}
        <nav className='flex items-center gap-7'>
          <ul className='flex gap-7 items-center text-xl '>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}`}><li>Home</li></NavLink>
            <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}`}><li>Products</li></NavLink>
            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}`}><li>About</li></NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}`}><li>Contact</li></NavLink>
          </ul>
          <Link to={'/cart'} className='relative'>
            <IoCartOutline className='h-7 w-7' />
            <span className='bg-red-400 text-white px-2 rounded-full absolute -top-3 -right-3'>0</span>
          </Link>
          <div className="items-center">
            <SignedOut>
              <SignInButton className="bg-red-400 px-2 py-1 rounded text-white cursor-pointer hover:bg-red-300" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar