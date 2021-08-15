import firebase from 'firebase/app'
import 'firebase/firestore'
import { useContext, useState } from 'react'
import { CartContext } from '../Cart/CartContext'
import Order from './Order'


function OrderContainer() {

    const { cart, totalPrice } = useContext(CartContext)

    let name = 'Pedro'
    let phone = '12345'
    let email = 'pedro@gmail.com'

    const [ buyerLoaded, setBuyerLoaded ] = useState(false)

    const [buyer, setBuyer] = useState({
        name: name,
        phone: phone,
        email: email
    })

    const [ order, setOrder ] = useState({ 
        buyer: buyer,
        items: cart,
        total: totalPrice,
        date: firebase.firestore.Timestamp.fromDate( new Date() )
    })


    console.log(order.date)
    console.log(buyer)
    console.log(order)
    console.log(order.buyer)
    console.log("buyerLoaded is " + buyerLoaded)

    return (
        <div>
            <Order cart={cart} />
            
            { buyerLoaded && <div>
                    <p>Total {buyer.total}</p>
                    <p>{buyer.name}</p>
                </div>
            }
                
        </div>
    )
}

export default OrderContainer
