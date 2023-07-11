import React from 'react'
import { useCartProducts, useCartDispatch, } from '../CartContext'
import CartProduct from '../components/CartProduct';

export default function Cart() {
  const cartProducts=useCartProducts()
  const CartDispath=useCartDispatch();

    return (
    <div className='text-center'>
        <h1 className='text-xl font-bold m-4'>YOUR CART</h1>
        <h2 className='text-gray-600 font-medium mb-10'>You have {cartProducts.length} products in your cart</h2>
        {cartProducts.map((cartProduct)=>(<CartProduct key={cartProduct.product.id} product={cartProduct.product} amount={cartProduct.amount}/>))}
    </div>
  )
}
