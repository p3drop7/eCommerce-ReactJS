import React from 'react'
import { Link } from 'react-router-dom'
import './Order.css'

function ConfirmedPurchase({orderID}) {
    return (
        <div className="confirmedPurchase">
            <p>Your order ID:</p>
            <p><strong>{orderID}</strong></p>
            <Link to="/" className="goBackButtonOrder">Go back</Link>
        </div>
    )
}

export default ConfirmedPurchase
