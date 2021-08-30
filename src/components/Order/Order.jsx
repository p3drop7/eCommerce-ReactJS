import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../data/firebaseService'
import { useContext, useState, useLayoutEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Spinner } from 'react-bootstrap';
import OrderForm from "./OrderForm"
import ConfirmedPurchase from './ConfirmedPurchase'
import ConfirmDetails from './ConfirmDetails'
import './Order.css'

function Order() {

    const { cart, totalPrice, size, emptyCart, emptySize, emptyTotalPrice } = useContext(CartContext)
    const [ emailError, setEmailError ] = useState(false)
    const [ buyerLoaded, setBuyerLoaded ] = useState(100)
    const [orderID, setOrderID] = useState(false)
    
    const [buyer, setBuyer] = useState({  // Buyer details
        name: "",
        phone: "",
        email: "",
        confirmEmail: "",
        cardNumber: ""
    })

    const [order, setOrder] = useState({   // Oder Details
        items: cart,
        size: size,
        total: totalPrice,
        date: firebase.firestore.Timestamp.fromDate( new Date() ),
    })

    const handleChange = (e) => {
        e.preventDefault()
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(buyer.email === buyer.confirmEmail){
            setBuyerLoaded(200)
            setEmailError(false)
            setOrder({...order, buyer: buyer}) // Sets buyer details and order items in "order" state

        }else{
            // This happens if email is not the same in both email input tags
            setEmailError(true)
        }
    }

    const onConfirm =()=> {
        setBuyerLoaded(false)

        const dataBase = getFirestore()

        dataBase.collection('orders').add(order)
            .then( ({id}) => setOrderID(id))
            .catch(err => console.log(err))

            .finally(()=>{   
                // Empties everything from cart after sending the order
                emptyCart()
                emptySize()
                emptyTotalPrice()
            })
    }
    
    useLayoutEffect(()=>{
        window.scrollTo({
            top: 730,
            behavior: 'smooth'
          });
    }) // Scrolls window to this component when loaded

    return (
        <div className="order">

            <div className="orderTitle" >PCS</div>
            <div className="orderSubtitle">ENTER YOUR SHOPPING DETAILS</div>
            
            { buyerLoaded === 100 &&
                <OrderForm handleSubmit={handleSubmit} handleChange={handleChange} emailError={emailError} />
            }

            { buyerLoaded === 200 &&
                <ConfirmDetails order={order} onConfirm={onConfirm} />
            }

            { (!orderID && !buyerLoaded) && 
                <Spinner animation="border" variant="primary" />
            }

            { orderID &&
                <ConfirmedPurchase orderID={orderID} />
            } 

        </div>
    )
}

export default Order