import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    const [size, setSize] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    function updateCart(item, counter){  // Sets an item into the cart
        // "item" and "counter" are brought from ItemDetail.jsx
        
        if( cart.some(it => it.item.id === item.id) ){ 
            
            // This happens if the item is already in cart
            const idx = cart.findIndex(it => it.item.id === item.id)
            const oldQuantity = cart[idx].quantity
            const newQuantity = oldQuantity + counter // Adds the quantity

            // Removes the item
            cart.splice(idx, 1) 
            // Re sets the item with new quantity in a new variable (newCartList)
            const newCartList = [...cart, {item: item, quantity: newQuantity}]
           
            // Updates cart with new item and new quantity
            setCart([...cart, {item: item, quantity: newQuantity}])
            setSize(size + counter)

            // Updates total price from cartList (can't be gotten from "cart" state because of state asynchronism)
            setTotalPrice(getTotalPrice(newCartList))
            
        }else{
            // If items is not present in "cart" state, this happens
            const newCartList = [...cart, {item: item, quantity: counter}]

            // Updates cart with item and quantity
            setCart([...cart, {item: item, quantity: counter}])
            setSize(size + counter)

            // Updates total price from cartList (can't be gotten from "cart" state because of state asynchronism)
            setTotalPrice(getTotalPrice(newCartList))
        }
    }

    function removeItem(itemId){  // Funtion to remove 1 item from cart
        const idx = cart.findIndex(it => it.item.id === itemId)
        const cartItems = cart
        cartItems.splice(idx, 1) // Removes the 1 item in the idx (index) in cartItems (cart state)

        setCart(cartItems) // Re sets the remaining intems in the cart after splice
        setTotalPrice(getTotalPrice(cartItems)) // Re sets the total price from the remaining items
        
        if(cart.lenght === 0){
            setSize(0)
            // Size to 0 if no items
        } else {
            setSize( cart.reduce((acum, value) => acum + value.quantity, 0))
            // Re sets size accoring to remaining items in cart
        }
    }

    function emptyCart(){  // Funtion to eliminate all items in cart
        setCart([])
    }

    function emptySize(){ // Funtion to set Size to 0
        setSize(0)
    }

    function emptyTotalPrice(){ // Funtion to set Price to 0
        setTotalPrice(0)
    }

    function getTotalPrice(newCartList){ 
        const total = newCartList.reduce( (acum, value) => acum + (value.quantity * value.item.price), 0)
        return total
    }

    return(
        <CartContext.Provider value={{ 
            cart, 
            size, 
            totalPrice, 
            updateCart, 
            removeItem, 
            emptyCart,
            emptySize,
            emptyTotalPrice
        }} >
            {children}
        </CartContext.Provider>
    )
}