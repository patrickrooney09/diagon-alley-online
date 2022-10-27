import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ProductsSlice/ProductsSlice";

function AdminPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div id="admin-page">
      <h1>Admin Page</h1>

      <div id="admin-all-products">
        <strong>Edit Products</strong>
        <ol>
          {products.map(
            ({ name, type, price, description, imageUrl, id, quantity }) => (
              <li key={id}>
                <p>
                  {name} || Type: {type} || Price: ${price}
                </p>
              </li>
            )
          )}
        </ol>
      </div>

      <div id = "admin-all-users">
          
      </div>
    </div>

  );
}

export default AdminPage;
