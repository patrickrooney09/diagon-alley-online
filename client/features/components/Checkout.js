import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
	const products = useSelector((state) => state.cart);
	console.log(products);
	return <div>Checkout</div>;
}

export default Checkout;
