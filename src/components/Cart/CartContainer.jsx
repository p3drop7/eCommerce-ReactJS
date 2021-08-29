import { useContext, useLayoutEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import './Cart.css'


function CartContainer() {

    const { cart, removeItem, totalPrice, emptyCart, size } = useContext(CartContext)

    useLayoutEffect(()=>{
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
          });
    }) // Scrolls window to this component when it's loaded

    return (
        <div className="cartContainerBox">

            <h3 className="cartTitle" >YOUR CART</h3>

            { cart.length !== 0 && 
                <div className='cartContainer' >

                    <CartTotal 
                        totalPrice={totalPrice} 
                        size={size} 
                        emptyCart={emptyCart}
                        />

                    <div className='cartList'>
                        { cart.map(element => 
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
