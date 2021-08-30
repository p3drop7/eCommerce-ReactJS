import React from 'react'

function ConfirmDetails({order, onConfirm}) {
    return (
        <div className="sendOrderDetails" >
            <p><strong>Your name:</strong> {order.buyer.name}</p>
            <p><strong>Card N.:</strong> {order.buyer.cardNumber}</p>
            <p><strong>Total:</strong> ${order.total}</p>
            <button onClick={onConfirm} className="sendOrderButton" >Send order</button>
        </div>
    )
}

export default ConfirmDetails
