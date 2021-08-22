import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Container, Spinner } from 'react-bootstrap'
import ItemList from './ItemList'
import { getFirestore } from '../../data/firebaseService'
import "./Item.css"

function ItemListContainer() {

    const [items, setItems] = useState(false)
    const { categoryId } = useParams()
    
    useEffect(() => {
        
        const data = getFirestore()

        if(categoryId === undefined){
            
            data.collection('items').get()
                .then(res=> setItems( res.docs.map(item => ({...item.data(), id: item.id} ))))
                .catch(err => console.log("Error " + err))
        
        }else{
            data.collection('items').where("type", "==", categoryId).get()
                .then(res=> setItems( res.docs.map(item => ({...item.data(), id: item.id} ))))
                .catch(err => console.log("Error " + err))
        }
            
    }, [categoryId])

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