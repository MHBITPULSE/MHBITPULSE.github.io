import React, { useState } from 'react'
import './products.scss'
import ItemProduct from './ItemProduct'
import { PRODUCTS } from '../ProductList'
import Cart from './Cart'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Products = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(oldArray => [...oldArray, item]);
        console.log(cartItems)
    }
    const removeFromCart = (index) => {
        if (index !== -1) {
            setCartItems([
                ...cartItems.slice(0, index),
                ...cartItems.slice(index + 1)
            ]);
        }
        console.log("Remove", cartItems)

    }

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
            <div className='cart'>
                <ShoppingCartOutlinedIcon />
                {cartItems.length > 0 ? <div>
                    {cartItems.map((item, index) => <Cart key={index} index={index} item={item} removeFromCart={removeFromCart} />)}
                    <button>Proceed to Checkout</button>
                </div>
                    :
                    <span style={{ color: "yellowgreen" }}>No items in Your Cart! Please add some item in your Cart.</span>}
            </div>
        </div>

    )
}

export default Products