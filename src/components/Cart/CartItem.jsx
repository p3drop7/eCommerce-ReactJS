import React from "react"
import './Cart.css'

function CartItem({item, quantity, removeItem}) {
    
    return (
        <div className='cartItem'>
            
            <div className="cartItemPictureContainer" >
                <img src={item.pictureSRC} alt={item.name} className="cartItemPicture" />
            </div>

            <div className="cartItemDescription" >
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ${item.price * quantity}</p>
                <button onClick={()=> removeItem(item.id)}>Remove</button>
            </div>   

        </div>
    )
}

export default CartItem
