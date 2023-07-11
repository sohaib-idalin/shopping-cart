import React from 'react'
import { createContext, useContext, useReducer } from 'react';

const CartProductsContext = createContext(null);

const CartDispatchContext = createContext(null);

export function CartContext({ children }) {
  const [cartproducts, dispatch] = useReducer(
    tasksReducer,
    []
  );

  return (
    <CartProductsContext.Provider value={cartproducts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartProductsContext.Provider>
  );
}

export function useCartProducts() {
  return useContext(CartProductsContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function tasksReducer(CartProducts, action) {
  switch (action.type) {
    case 'create': {
      return [...CartProducts, {
        product: action.product,
        amount: 1
      }];
    }
    case '+': {
      return CartProducts.map(cp => {
        if (cp.product.id === action.product.id) {
          return {...cp , amount: cp.amount+1};
        } else {
          return cp;
        }
      });
    }
    case '-': {
        return CartProducts.map(cp => {
            if (cp.product.id === action.product.id) {
                if(cp.amount>1)return {...cp , amount: cp.amount-1};
              return;
            } else {
              return cp;
            }
          });
    }
    case 'delete': {
        return CartProducts.filter(cp => cp.product.id !== action.product.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}



