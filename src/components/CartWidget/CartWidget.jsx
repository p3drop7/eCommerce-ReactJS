import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./CartWidget.css"

function CartWidget() {

    const { size } = useContext(CartContext) 
    
    return (
        <div className="widgetContainer" >
            <Link to={"/cart"} >
                <FaShoppingCart as={Link} to={"/cart"} className="cartIcon"/>
            </Link>
            <div className="cartNumber" >{size}</div>
        </div>
    )
}

export default CartWidget