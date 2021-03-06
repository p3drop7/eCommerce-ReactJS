import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from "./ItemDetail"
import Spinner from 'react-bootstrap/spinner'
import "./ItemDetail.css"
import { getFirestore } from '../../data/firebaseService'

function ItemDetailContainer() {
    
    const [item, setItem] = useState(false)
    const [exists, setExists] = useState(true)
    const { itemId } = useParams()

    useLayoutEffect(()=>{
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
          });
    }) // Focuses window in ItemDetailContainer when loaded

    useEffect(() => {
        const data = getFirestore()
        data.collection('items').doc(itemId).get()

            .then((res) => {

                if (!res.exists) {
                    // This happens if the item does not exist in firestore
                    setExists(false)
                }

                setItem( {...res.data(), id: res.id} )
            })
            
            .catch( err => console.log(err) )

    }, [itemId])  // Gets the item in firestore with its itemId form the url with useParams

    return (
        <div className="itemDetailContainer" >

            { (item && exists) && <ItemDetail item={item} /> }
            
            { (!item && exists) && <Spinner animation="border" variant="primary" /> }
        
            { !exists && <p>Item not found</p> }
        </div>  
    )
}

export default ItemDetailContainer