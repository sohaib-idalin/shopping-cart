import React from 'react'
import { useCartProducts, useCartDispatch, } from '../CartContext'
import CartProduct from '../components/CartProduct';

export default function Cart() {
  const cartProducts=useCartProducts()
  const CartDispath=useCartDispatch();

    return (
    <div>
        <h1>YOUR CART</h1>
        <h2>You have {cartProducts.length} products in your cart</h2>
        {cartProducts.map((cartProduct)=>(<CartProduct key={cartProduct.product.id} product={cartProduct.product} amount={cartProduct.amount}/>))}
    </div>
  )
}
