import React from 'react'
import { Outlet } from "react-router-dom";
import {BsCart4} from 'react-icons/bs';

export default function Layout() {
  


  return (
    <>
      <div className='bg-black pb-5'>

        <ul className='flex justify-end gap-8 items-center pr-5 pt-4 text-white font-medium'>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li className='text-5lg'><a href="./cart"><BsCart4/></a></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}
