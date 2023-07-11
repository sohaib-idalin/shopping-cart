import React from 'react'

import Welcome from '../components/welcome'
import ProudctsList from '../components/ProudctsList'


const Products=[
  {
    id:1 ,
    name:"Iphone 11 pro",
    desc:"256GB, Navy Blue",
    price:"900",
    img:"./img1.webp"
 }
 ,
 {
  id:2 ,
  name:"Samsung galaxy",
  desc:"256GB, Navy Blue",
  price:"900",
  img:"./img2.webp"
  
}
,
{
  id:3 ,
  name:"Canon EOS M50",
  desc:"Onyx Black",
  price:"1900",
  img:"./img3.webp"
  
}
,
{
  id:4 ,
  name:"MacBook Pro",
  desc:"1TB, Graphite",
  price:"1799",
  img:"./img4.webp"
  
}
]


function Homme() {
  return (
    <>
      <Welcome />
      <h1 className='text-center text-4xl font-bold'>Our Products</h1>
      <div className='flex justify-around flex-wrap p-10 gap-5 my-3'>
        {
          Products.map(
            (product)=>(<ProudctsList key={product.id} product={product} />)
          )
        }
      </div>
      
   </>
  )
}

export default Homme

