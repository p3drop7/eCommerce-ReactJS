import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Container, Spinner } from 'react-bootstrap'
import ItemList from './ItemList'
import { getFirestore } from '../../data/firebaseService'
import "./Item.css"

function ItemListContainer() {

    const [items, setItems] = useState(false)
    const { categoryId } = useParams()  // Category from NavBar
    
    useEffect(() => {
        
        const data = getFirestore()

        if(categoryId === undefined){
            // All items are shown if no category is selected from NavBar
            data.collection('items').get()

                // Maps all items and sets them in "items" state
                .then(res=> setItems( res.docs.map(item => ({...item.data(), id: item.id} ))))
                .catch(err => console.log("Error " + err))
        
        }else{
            // Items shown according to category selected in NavBar 
            // (each item has a category with a "type" key)
            data.collection('items').where("type", "==", categoryId).get()
                .then(res=> setItems( res.docs.map(item => ({...item.data(), id: item.id} ))))
                .catch(err => console.log("Error " + err))
        }
            
    }, [categoryId]) // CategoryId selected from NavBar


    return (
        <Container className="itemListContainer">
            { 
                items ? <ItemList items={items} />
                      : <Spinner animation="border" variant="primary" />
            }
        </Container>
    )
}

export default ItemListContainer