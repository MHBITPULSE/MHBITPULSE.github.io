import React, { useState } from 'react'
import './products.scss'
import ItemProduct from './ItemProduct'
import { PRODUCTS } from '../ProductList'
import Cart from './Cart'



const Products = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => [
        setCartItems(oldArray => [...oldArray, item])
    ]

    return (
        <div className='products'>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center"
            }}>
                {PRODUCTS.map(item => <ItemProduct key={item.id} item={item} addToCart={addToCart} />)}


            </div>
            <div>
                <Cart />
            </div>
        </div>

    )
}

export default Products