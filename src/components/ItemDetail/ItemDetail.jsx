import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Detail from './Detail'
import ItemCounter from './ItemCounter/ItemCounter'
import { CartContext } from '../Cart/CartContext'
import "./ItemDetail.css"



function ItemDetail({item}) {

    const [counter, setCounter] = useState(1)
    const [quantityAdded, setQuantityAdded] = useState(false)
    const {updateCart} = useContext(CartContext)

    function add(){
        if(counter < item.stock){
            setCounter(counter + 1)
        }
    }

    function substract(){
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    function addToCart(){
        setQuantityAdded(counter)
        updateCart(item, counter)        
    }

    return (
        <div className="itemDetail" >
            <Detail item={item}/>
            
            {quantityAdded === false && (
                <div className="ItemCountContainer">
                    <ItemCounter 
                        add={add}
                        substract={substract}
                        addToCart={addToCart}
                        counter={counter}
                    />
                </div>
            )}

            {quantityAdded && (
                <div className="ItemCountContainer">
                    <Button variant="success" as={Link} to="/cart" className="confirmAddButton" >Go to cart</Button>
                    <Button variant="secondary" as={Link} to="/" className="confirmAddButton" >Go back</Button>
                </div>
            )}
                
        </div>
    )
}

export default ItemDetail