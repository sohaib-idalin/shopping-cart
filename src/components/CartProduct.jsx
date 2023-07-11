import React from 'react'
import { useCartDispatch } from '../CartContext'

export default function CartProduct({product,amount}) {
  
    const CartDispath=useCartDispatch();
    const handleMinus= () => {
        CartDispath({product:product,type:'-'})
    }
    const handlePlus= () => {
        CartDispath({product:product,type:'+'})
    }
    const handleDelete= () => {
        CartDispath({product:product,type:'delete'})
    }

    return (
        <div >
            <div>    
                <div><img src={product.img} alt="fail to load" /></div>
                <ul className='flex justify-around items-center'>
                    <div >
                        <li >{product.name}</li>
                        <li >{product.desc}</li>
                    </div>
                        <div className='flex items-center '>
                            <button onClick={handleMinus}>-</button>
                            <p>{amount}</p>
                            <button onClick={handlePlus}>+</button>
                        </div>
                        
                    <li >{product.price*amount}$</li>
                    <button onClick={handleDelete}>Delete</button>
                    
                </ul>

            </div>
            
        </div>
  )
}
