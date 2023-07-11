import React from 'react'

function NavBar() {
  return (
    <div className='bg-black pb-5'> 

        <ul className='flex justify-end gap-8 pr-5 pt-4 text-white font-medium'>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
        </ul>
    </div>
  )
}

export default NavBar