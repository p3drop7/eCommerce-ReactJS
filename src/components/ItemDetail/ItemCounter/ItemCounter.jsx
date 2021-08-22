import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './ItemCounter.css'
import "../ItemDetail.css"

function ItemCounter({addToCart, substract, add, counter}) {
    
    return (
        <>
            
            <div>
                <button onClick={substract}><AiOutlineMinus/></button>
                <div>{counter}</div>
                <button onClick={add}><AiOutlinePlus/></button>
            </div>

            <button className="addButton" onClick={addToCart}>Add to cart</button>
            
        </>
    )
}

export default ItemCounter
