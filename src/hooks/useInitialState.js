import React, { useState } from 'react';
import initialState from '../initialState';
export default function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.cartId !== payload),
    });
  };
  return {
    addToCart,
    removeToCart,
    state,
  };
}
