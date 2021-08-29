import React from 'react'
import { Link } from 'react-router-dom'

function CartTotal({totalPrice, size, emptyCart}) {
    return (
        <div className='cartTotal' >
            
            <h2>Total</h2>
            <p>${totalPrice}</p>

            { size === 1 && 
                <p>{size} ITEM</p> 
            }

            { size > 1 && 
                <p>{size} ITEMS</p> 
            }
            
            <div>  
                <Link to="/order" className="confirmOrder">Confirm Order</Link>
                <button onClick={emptyCart} >Empty cart</button>
            </div>    
        </div>
    )
}

export default CartTotal
