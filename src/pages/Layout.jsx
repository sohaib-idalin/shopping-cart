import React from 'react'
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <div className='bg-black pb-5'>

        <ul className='flex justify-end gap-8 pr-5 pt-4 text-white font-medium'>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}
