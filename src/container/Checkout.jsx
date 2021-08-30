import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

export default function Checkout() {
  const { state, removeToCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeToCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Wish list:</h3>
        ) : (
          <h3>You don't have Wish list 😢</h3>
        )}
        {cart.map((item) => (
          <div key={item.cartId} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button>
              <i
                type="buttom"
                onClick={handleRemove(item.cartId)}
                className="fas fa-trash-alt"
              />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Price Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}
