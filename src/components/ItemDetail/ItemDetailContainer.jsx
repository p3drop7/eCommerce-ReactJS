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
            .finally(()=> console.log("Detail loaded"))

            /* data.collection('items').get()
            .then(res => {
                const dataLoaded = res.docs.map( item => ({...item.data(), id: item.id}) )
                const dataFiltered = dataLoaded.find( item => item.id === itemId )
                setItem(dataFiltered)
            })
            .finally(()=> console.log("Detail loaded")) */
    }, [itemId])

    /* useEffect(()=>{
        setItem(false)

        setTimeout(()=>{

            getData()
                .then( res => { setItem( res.find( it => it.id === parseInt(itemId)))})
                .catch(err => { console.log("Error: " + err) })
                .finally(()=> { console.log("Finish") })

        }, 1000)
        
    }, [itemId]) */

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