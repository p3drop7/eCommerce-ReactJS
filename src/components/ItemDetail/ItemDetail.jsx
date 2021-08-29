import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Detail from './Detail'
import ItemCounter from './ItemCounter/ItemCounter'
import { CartContext } from '../Context/CartContext'
import "./ItemDetail.css"


function ItemDetail({item}) {

    const [counter, setCounter] = useState(1)
    const [quantityAdded, setQuantityAdded] = useState(false)
    const {updateCart} = useContext(CartContext)

    function add(){ // Adds one to the counter
        if(counter < item.stock){
            setCounter(counter + 1)
        }
    }

    function substract(){ // Substracts 1 from the counter
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    function addToCart(){ // Adds item to cart with its quantity
        setQuantityAdded(counter)
        updateCart(item, counter)        
    }

    return (
        <div className="itemDetail" >
            <Detail item={item}/>
             
            { quantityAdded === false && (
                <div className="ItemCountContainer">
                    <ItemCounter 
                        add={add}
                        substract={substract}
                        addToCart={addToCart}
                        counter={counter}
                    />
                </div>
            )}

            { quantityAdded && (
                <div className="ItemCountContainer">
                    <Link to="/cart" className="confirmAddButton" >Go to cart</Link>
                    <Link to="/" className="goBackButton" >Go back</Link>
                </div>
            )}
                
        </div>
    )
}

export default ItemDetail