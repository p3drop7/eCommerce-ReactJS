import React from 'react'

function ConfirmDetails({order, onConfirm}) {
    return (
        <div className="sendOrderDetails" >
            <p>YOUR NAME:</p>
            <p>{order.buyer.name}</p>
            <p>TOTAL: ${order.total}</p>
            <button onClick={onConfirm} className="sendOrderButton" >Send order</button>
        </div>
    )
}

export default ConfirmDetails
