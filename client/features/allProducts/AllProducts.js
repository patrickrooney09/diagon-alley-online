import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductsSlice";
import { addToUserCart } from "../userCart/cartForUser";
import { addToCart, getTotal } from "../localCart/cartSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { id } = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getTotal());
  }, [dispatch]);

  //if user exist, we dispatch addToUserCart and add it to database, else, we dispatch addToCart which adds product to localstorage
  const handleAddToCart = (product, userId) => {
    if (userId) {
      dispatch(addToUserCart({ product, userId }));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div id="all-products">
      <h1>All Products: </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <strong>{product.name}</strong>
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <img src={product.imageUrl} />
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>
              {product.quantity < 6
                ? `Only ${product.quantity} left in stock!`
                : ""}
            </p>
            <button onClick={() => handleAddToCart(product, id)}>
              Add To Cart
            </button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
// { name, type, price, description, imageUrl, id, quantity }
