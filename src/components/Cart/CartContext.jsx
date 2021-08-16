import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    const [size, setSize] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    function updateCart(item, counter){
        
        if( cart.some(it => it.item.id === item.id) ){
            
            const idx = cart.findIndex(it => it.item.id === item.id)
            const oldQuantity = cart[idx].quantity
            const newQuantity = oldQuantity + counter

            cart.splice(idx, 1)
            const newCartList = [...cart, {item: item, quantity: newQuantity}]
           
            setCart([...cart, {item: item, quantity: newQuantity}])
            setSize(size + counter)
            setTotalPrice(getTotalPrice(newCartList))
            
        }else{
            const newCartList = [...cart, {item: item, quantity: counter}]
            setCart([...cart, {item: item, quantity: counter}])
            setSize(size + counter)
            setTotalPrice(getTotalPrice(newCartList))
        }
    }

    function removeItem(itemId){
        const idx = cart.findIndex(it => it.item.id === itemId)
        const cartItems = cart
        cartItems.splice(idx, 1)

        setCart(cartItems)
        setTotalPrice(getTotalPrice(cartItems))
        
        if(cart.lenght === 0){
            setSize(0)
        } else {
            setSize( cart.reduce((acum, value) => acum + value.quantity, 0))
        }
    }

    function emptyCart(){
        setCart([])
    }

    function emptySize(){
        setSize(0)
    }

    function emptyTotalPrice(){
        setTotalPrice(0)
    }

    function getTotalPrice(newCartList){
        const total = newCartList.reduce( (acum, value) => acum + (value.quantity * value.item.price), 0)
        return total
    }

    console.log(cart)

    return(
        <CartContext.Provider value={{ 
            cart, 
            size, 
            totalPrice, 
            updateCart, 
            removeItem, 
            getTotalPrice, 
            emptyCart,
            emptySize,
            emptyTotalPrice
        }} >
            {children}
        </CartContext.Provider>
    )
}