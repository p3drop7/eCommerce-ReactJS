import { IoAlertCircleOutline } from "react-icons/io5";
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

function OrderForm({handleSubmit, handleChange, emailError}) {

    return (
        <form onSubmit={handleSubmit} onChange={handleChange} className="confirmForm" >
                
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
                    placeholder="Confirm Email" 
                    name="confirmEmail"
                />

                { emailError && 
                    <p className="checkEmail" >
                        <IoAlertCircleOutline/>Please, check email
                    </p>
                }

                <div className="creditCardInformation">
                    <input 
                        type="number" 
                        placeholder="Credit Card Number" 
                        name="cardNumber"
                    />  
                    
                    <div className="cvvAndDate">
                        <input 
                            type="number" 
                            placeholder="CVV Number" 
                            name="CVVNUmber"
                        /> 

                        <input 
                            type="date" 
                            placeholder="Expiration Date" 
                            name="expirationDate"
                        /> 
                    </div>

                    <div className="cardIcons" >
                        <FaCcVisa className="cardIcon visa" />
                        <FaCcMastercard className="cardIcon mastercard" />
                        <SiAmericanexpress className="cardIcon americanex" />
                    </div>
                </div>
    
                <button type="submit" >CONFIRM</button>
        </form>
    )
}

export default OrderForm
