import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../cartSlice/cartSlice";

const Cart = () => {
  //use useSelector to select cart from our state
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your Cart is Currently Empty !</p>
          <div>
            <Link to="/products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping </span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-nav">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => {
              return (
                <div key={cartItem.id}>
                  <div>
                    <img src={cartItem.imageUrl} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div>${cartItem.price}</div>
                  <div className="cart-quantity">
                    <button onClick={() => handleDecrease(cartItem)}>-</button>
                    <div>{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncrease(cartItem)}>+</button>
                  </div>
                  <div className="cart-total">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="check-out">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping</p>
              <button>Check Out</button>
              <div>
                <Link to="/products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Start Shopping </span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
