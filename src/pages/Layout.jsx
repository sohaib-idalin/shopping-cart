import React from 'react'
import { Outlet ,Link} from "react-router-dom";
import {BsCart4} from 'react-icons/bs';

export default function Layout() {
  


  return (
    <>
      <div className='bg-black pb-5'>

        <ul className='flex justify-end gap-8 items-center pr-5 pt-4 text-white font-medium'>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li className='text-5lg'><Link to="/Cart"><BsCart4/></Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}
