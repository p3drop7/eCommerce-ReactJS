import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ItemCounter.css'
import "../ItemDetail.css"

function ItemCounter({addToCart, substract, add, counter}) {
    
    return (
        <>
            
            <div>
                <button onClick={substract} ><FontAwesomeIcon icon={faMinus} /></button>
                <div>{counter}</div>
                <button onClick={add} ><FontAwesomeIcon icon={faPlus}/></button>
            </div>

            <button className="addButton" onClick={addToCart}>Add to cart</button>
            
        </>
    )
}

export default ItemCounter
