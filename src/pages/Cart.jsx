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

      <div className='fixed bottom-0 bg-cyan-400'>
        <div className='w-[50%]'>
          <div>
            <div className='flex'>
              <div>Subtotal</div>
              <div></div>
            </div>
            <div className='flex'>
              <div>Shipping fee</div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div>Total</div>
            <div></div>
          </div>
        </div>
      </div>

    </>
  )
}
