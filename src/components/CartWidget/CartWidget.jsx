import { useContext } from 'react'
import { CartContext } from '../Cart/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./CartWidget.css"

function CartWidget() {

    const { size } = useContext(CartContext) 
    
    return (
        <div className="widgetContainer" >
            <Link to={"/cart"} >
                <FontAwesomeIcon as={Link} to={"/cart"} icon={faShoppingCart} className="cartIcon"/>
            </Link>
            <div className="cartNumber" >{size}</div>
        </div>
    )
}

export default CartWidget