import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
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
                        <Link to="/order"><Button variant="success" >Confirm Order</Button></Link>
                        <Button onClick={emptyCart} variant="danger">Empty cart</Button>
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
