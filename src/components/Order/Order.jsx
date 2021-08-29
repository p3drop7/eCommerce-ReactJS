import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../data/firebaseService'
import { Link } from 'react-router-dom'
import { useContext, useState, useLayoutEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Spinner } from 'react-bootstrap';
import OrderForm from "./OrderForm"
import './Order.css'

function Order() {

    const { cart, totalPrice, size, emptyCart, emptySize, emptyTotalPrice } = useContext(CartContext)
    const [ emailError, setEmailError ] = useState(false)
    const [ buyerLoaded, setBuyerLoaded ] = useState(100)
    const [orderID, setOrderID] = useState(false)
    
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
        confirmEmail: ""
    })

    const [order, setOrder] = useState({
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
            setOrder({...order, buyer: buyer})
        }else{
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
                emptyCart()
                emptySize()
                emptyTotalPrice()
            })
    }
    
    useLayoutEffect(()=>{
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
          });
    })

    return (
        <div className="order">

            <div className="orderTitle" >PCS</div>
            <div className="orderSubtitle">ENTER YOUR SHOPPING DETAILS</div>
            
            { buyerLoaded === 100 &&
                <OrderForm handleSubmit={handleSubmit} handleChange={handleChange} emailError={emailError} />
            }

            { buyerLoaded === 200 &&
                <div className="sendOrderDetails" >
                    <p>YOUR NAME:</p>
                    <p>{order.buyer.name}</p>
                    <p>TOTAL: ${order.total}</p>
                    <button onClick={onConfirm} className="sendOrderButton" >Send order</button>
                </div>
            }

            { (!orderID && !buyerLoaded) && <Spinner animation="border" variant="primary" />}

            { orderID &&
                <div className="confirmedPurchase">
                    <p>Your order ID:</p>
                    <p><strong>{orderID}</strong></p>
                    <Link to="/" className="goBackButtonOrder">Go back</Link>
                </div>
            } 

        </div>
    )
}

export default Order