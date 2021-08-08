import React from "react"

function CartItem({item, quantity, removeItem}) {
    
    return (
        <div>
            <h2>Product: {item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: ${item.price * quantity}</p>
            <button onClick={()=> removeItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem
