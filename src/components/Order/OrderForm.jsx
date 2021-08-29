import { IoAlertCircleOutline } from "react-icons/io5";

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
                
                <button type="submit">CONFIRM</button>
        </form>
    )
}

export default OrderForm
