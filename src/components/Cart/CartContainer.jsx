import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'


function CartContainer() {

    const { cart, removeItem, totalPrice, emptyCart } = useContext(CartContext)

    return (
        <div>

            { cart.length === 0 && <div>
                <p>No items added</p>
                <Link to={"/"}><button>Go Back</button></Link>
                </div> }  
            
            { cart.length !== 0 && <h2>Total price: ${totalPrice}</h2>}

            { cart.length !== 0 && <Button onClick={emptyCart} >Empty cart</Button> }<br/>

            { cart.length !== 0 && <Link to="/order"><Button>Confirm Order</Button></Link> }

            { cart && cart.map(element => <CartItem
                        key={element.item.id}
                        item={element.item}
                        quantity={element.quantity}
                        removeItem={removeItem}
                        />)
            }
            
        </div>
    )
}

export default CartContainer
