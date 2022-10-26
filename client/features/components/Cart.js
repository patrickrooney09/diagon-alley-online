import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  //use useSelector to select cart from our state
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your Cart is Currently Empty !</p>
          <div>
            <Link to="/">
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
        <div>
          <div className="cart-nav">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>

          <div className="cart-items">
            {cart.cartItems.map((cartItem) => {
              console.log(cartItem);
              <div key={cartItem.id}>
                <div>
                  <img src={cartItem.imageUrl} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div>${cartItem.price}</div>
              </div>;
            })}
          </div>
          <span>{cart.cartItems[0].name}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
