import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between items-center p-4'>
        <div> <h1 className='text-white text-2xl font-bold'>Premiums</h1> </div>
        <div className='text-white flex'>
            <Link to="/" className='px-5 font-medium text-lg'>Shop</Link>
            <Link to="/cart" className='px-5'> <ShoppingCart size={32}/> </Link>
        </div>
    </div>
  )
}

export default Navbar