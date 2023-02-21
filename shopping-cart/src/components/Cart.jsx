import React from 'react'
import './cart.scss'

const Cart = ({ index, item, removeFromCart }) => {
    return (
        <div className='cartItem'>
            <span>{index + 1}. {item.name} {item.price} tk</span>
            <button onClick={() => removeFromCart(index)}>X</button>
        </div>
    )
}

export default Cart