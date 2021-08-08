import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'


function CartContainer() {

    const { cart, removeItem, totalPrice } = useContext(CartContext)

    return (
        <div>

            { cart.length === 0 && <div>
                <p>No items added</p>
                <Link to={"/"}><button>Go Back</button></Link>
                </div> }  
            
            { cart.length !== 0 && <h2>Total price: ${totalPrice}</h2>}

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
