import React from "react"
import { FaRegTrashAlt } from 'react-icons/fa'
import './Cart.css'

function CartItem({item, quantity, removeItem}) {
    
    return (
        <div className='cartItem'>
            
            <div className="cartItemPictureContainer" >
                <img src={item.pictureSRC} alt={item.name} className="cartItemPicture" />
            </div>

            <div className="cartItemDescription" >
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ${item.price * quantity}</p>
                <FaRegTrashAlt onClick={()=> removeItem(item.id)} className="tash"/>
            </div>   

        </div>
    )
}

export default CartItem
