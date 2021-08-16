import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from "./ItemDetail"
import Spinner from 'react-bootstrap/spinner'
import "./ItemDetail.css"
import { getFirestore } from '../../data/firebaseService'

function ItemDetailContainer() {
    
    const [item, setItem] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        const data = getFirestore()
        data.collection('items').doc(itemId).get()
            .then(res => setItem( {...res.data(), id: res.id} ))
    }, [itemId])

    return (
        <div className="itemDetailContainer" >
            {
                item ? <ItemDetail item={item} />
                     : <Spinner animation="border" variant="primary" />
            }
        </div>  
    )
}

export default ItemDetailContainer