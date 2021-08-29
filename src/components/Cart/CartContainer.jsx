import CartItem from './CartItem'
import { useContext, useLayoutEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'


function CartContainer() {

    const { cart, removeItem, totalPrice, emptyCart, size } = useContext(CartContext)

    useLayoutEffect(()=>{
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
          });
    })

    return (
        <div className="cartContainerBox">

            <h3 className="cartTitle" >YOUR CART</h3>

            { cart.length !== 0 && 
                <div className='cartContainer' >

                    <div className='cartTotal' >
                        <h2>Total</h2>
                        <p>${totalPrice}</p>
                        { size === 1 && <p>{size} ITEM</p> }
                        { size > 1 && <p>{size} ITEMS</p> }
                        <div>
                            <Link to="/order" className="confirmOrder">Confirm Order</Link>
                            <button onClick={emptyCart} >Empty cart</button>
                        </div>    
                    </div>

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
                </div>
            }

            { cart.length === 0 && 
                <div className="emptyCart">
                    <h2>NO ITEMS ADDED</h2>
                    <Link to={"/"} className="goBackCartButton" >Go Back</Link>
                </div> 
            }
            
        </div>
    )
}

export default CartContainer
