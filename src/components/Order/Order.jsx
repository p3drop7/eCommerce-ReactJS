import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../data/firebaseService'
import { useContext, useState } from 'react'
import { CartContext } from '../Cart/CartContext'
import { Button } from 'react-bootstrap'

function Order() {
    
    const { cart, totalPrice, size } = useContext(CartContext)

    const [ buyerLoaded, setBuyerLoaded ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
        confirmEmail: ""
    })

    const [ order, setOrder ] = useState({
        items: cart,
        size: size,
        total: totalPrice,
        date: firebase.firestore.Timestamp.fromDate( new Date() ),
    })

    const [orderID, setOrderID] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(buyer.email === buyer.confirmEmail ){
            setEmailError(false)
            setOrder({...order, buyer: buyer})
            setBuyerLoaded(true)

        }else{
            setEmailError(true)
        }
    }

    const onConfirm =()=> {
        const dataBase = getFirestore()
        dataBase.collection('orders').add(order)
            .then( ({id}) => setOrderID(id))
            .catch(err => console.log(err))
    }

    console.log(order)

    return (
        <div>
            
            { !buyerLoaded &&
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

                    <Button type="submit">Confirm purchase</Button>

                </form>
            }

            { buyerLoaded && 
                <div>
                    <Button onClick={onConfirm}>Finish</Button>
                    <p>ID: {orderID}</p>
                    <p>Total {order.total}</p>
                    <p>{order.buyer.name}</p>
                </div>
            }
                
        </div>
    )
}

export default Order
