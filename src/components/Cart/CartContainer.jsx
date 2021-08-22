import CartItem from './CartItem'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import './Cart.css'


function CartContainer() {

    const { cart, removeItem, totalPrice, emptyCart, size } = useContext(CartContext)

    return (
        <div>

            { cart.length !== 0 && 
                <div className='cartContainer' >

                    <div className='cartList'>
                        {cart.map(element => 
                            <CartItem
                                key={element.item.id}
                                item={element.item}
                                quantity={element.quantity}
                                removeItem={removeItem}
                            />
                        )}
                    </div>

                    <div className='cartTotal' >

                        <h2>Total</h2>
                        <p>${totalPrice}</p>
                        { size === 1 && <p>{size} item</p> }
                        { size > 1 && <p>{size} items</p> }

                        <Link to="/order" className="confirmOrder">Confirm Order</Link>
                        <button onClick={emptyCart} >Empty cart</button>

                    </div>
                </div>
            }

            { cart.length === 0 && 
                <div className="emptyCart">
                    <h2>No items added</h2>
                    <Link to={"/"}><Button variant="secondary">Go Back</Button></Link>
                </div> 
            }
            
        </div>
    )
}

export default CartContainer
