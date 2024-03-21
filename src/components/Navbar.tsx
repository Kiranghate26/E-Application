import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import { useAppSelector } from '../redux/hooks'

const Navbar = () => {
    const count =useAppSelector((store)=>store.cart.length)
  return (
    <div className='pt-4 bg-white top-0 sticky'>
        <div className='container  '>
            <div className='flex justify-between item-center '>
                <h1 className='text-4xl font-bold cursor-pointer'>E-Cart</h1>
                <div className="flex gap4 md:gap8 item-center">
                    <div className="md:flex item-center gap-3 hidden">
                        <div className="rounded-full border-2 border-gray-300 text-gray-500 text-3xl w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200">
                            <AiOutlineUser/>
                        </div>
                        <div className="">
                           <a href='#' className='text-gray-500'> Sign In</a>
                        </div>
                        <div className="text-gray-500 text-3xl  cursor-pointer relative">
                            <FiShoppingCart/>
                            <div className="absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full text-white text-small flex items-center justify-center  "> 
                            {count}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-b border-gray-200 pt-4"></div>
    </div>
  )
}

export default Navbar