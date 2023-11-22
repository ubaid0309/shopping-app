import React from 'react'
import NavLogo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart = useSelector(state=>state.cart.items)
  return (
    <div className='bg-[#0F172A] text-white p-3 '>
      <header>
        <nav className='max-w-6xl mx-auto flex justify-between items-center'>
          <div><NavLink to={"/"}><img src={NavLogo} className='w-36 md:w-44' alt="" /></NavLink></div>

          <div className='flex items-center gap-4'>
            <NavLink to={"/"}><p>Home</p></NavLink>

            <div className='relative flex items-center'>
            <button><NavLink to="/cart"><FaShoppingCart/> </NavLink> </button>

            {
              cart.length > 0 &&
              <span className='absolute -top-3 left-1 animate-bounce transition-all duration-500 bg-green-600 w-5 h-5 flex justify-center items-center text-white text-xs  rounded-full '>{cart.length}</span>
            }
            </div>
          </div>
          
        </nav>
      </header>
    </div>
  )
}

export default Navbar