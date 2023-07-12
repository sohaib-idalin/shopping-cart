import React from 'react'
import { useCartProducts, useCartDispatch, } from '../CartContext'
import CartProduct from '../components/CartProduct';

export default function Cart() {
  const cartProducts = useCartProducts()
  const CartDispath = useCartDispatch();

  const handelClear=()=>{
    CartDispath({type:'clear'})
  }

  return (
    <>
      <div className='text-center'>
        <h1 className='text-xl font-bold m-4'>YOUR CART</h1>
        <h2 className='text-gray-600 font-medium mb-10'>You have {cartProducts.length} products in your cart</h2>
      </div>
      <div className='flex justify-end'>
        <button className='mx-12 text-white p-2 px-5 bg-red-500 rounded-lg font-medium shadow-lg' onClick={handelClear}>Clear Your Cart</button>
      </div>
      {cartProducts.map((cartProduct) => (<CartProduct key={cartProduct.product.id} product={cartProduct.product} amount={cartProduct.amount} />))}

      <div className='sticky bottom-0 bg-gray-100 w-screen- shadow-lg '>
        <div className='w-[50%] mx-auto px-10 py-2 leading-8 font-medium  '>
          <div>
            <div className='flex justify-between '>
              <div>Subtotal :</div>
              <div> 4000</div>
            </div>
            <div className='flex justify-between'>
              <div>Shipping fee :</div>
              <div className='right-0'>5 * 17</div>
              <div>85</div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>Total :</div>
            <div> 400</div>
          </div>
        </div>
      </div>

    </>
  )
}
