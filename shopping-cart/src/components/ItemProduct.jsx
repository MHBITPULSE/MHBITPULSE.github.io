import React from 'react'
import './itemproduct.scss'
import img from '../laptop1.jpeg'

const ItemProduct = (props) => {

    return (
        <div className='itemproduct'>
            <img src={img} alt="" />
            <h4>{props.item.name}</h4>
            <ul>
                <li>RAM - {props.item.ram}</li>
                <li>Storage - {props.item.storage}</li>
                <li>Display - {props.item.display}</li>
                <li>Brand - {props.item.brand}</li>
                <li style={{ color: "blue" }}>Price - {props.item.price} tk</li>
            </ul>
            <div className='butn'>
                <button onClick={() => props.addToCart(props.item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemProduct