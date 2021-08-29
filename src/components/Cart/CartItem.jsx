import { FaRegTrashAlt } from 'react-icons/fa'
import './Cart.css'
import { Link } from 'react-router-dom'

function CartItem({item, quantity, removeItem}) {
    
    return (
        <div className='cartItem'>
            
            <div className="cartItemPictureContainer" >
                <Link to={`/item/${item.id}`}>
                    <img src={item.pictureSRC} alt={item.name} className="cartItemPicture" />
                </Link>
            </div>

            <div className="cartItemDescription" >
                <h4>{item.name}</h4>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Total:</strong> ${item.price * quantity}</p>
                <FaRegTrashAlt onClick={()=> removeItem(item.id)} className="tash"/>
            </div>   

        </div>
    )
}

export default CartItem
