import firebase from 'firebase/app'
import 'firebase/firestore'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../data/firebaseService'
import { useContext, useState } from 'react'
import { CartContext } from '../Cart/CartContext'
import { Button } from 'react-bootstrap'
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

    console.log(buyer)
    console.log(order)

    return (
        <div>
            
            { buyerLoaded === 100 &&
                <form onSubmit={handleSubmit} onChange={handleChange} >
                
                    <input 
                        type="text" 
                        placeholder="Full name" 
                        name="name" 
                    />

                    <input 
                        type="number" 
                        placeholder="Phone number" 
                        name="phone"
                    />

                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                    />

                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="confirmEmail"
                    />

                    {emailError && <p>Please, check email</p>}
                    
                    <Button type="submit">Confirm</Button>

                </form>

            }

            { buyerLoaded === 200 &&
                <div className="confirmOrder">
                    <p>Name: {order.buyer.name}</p>
                    <p>Total ${order.total}</p>
                    <Button variant="success" onClick={onConfirm}>Send order</Button>
                </div>
            }

            { (!orderID && !buyerLoaded) && <p>Loading...</p>}

            { orderID &&
                <div className="confirmedPurchase">
                    <p>ID: {orderID}</p>
                    <p>Total {order.total}</p>
                    <p>Nombre: {order.buyer.name}</p>
                    <Link to="/"><Button variant="secondary">Go back</Button></Link>
                </div>
            } 

        </div>
    )
}

export default Order