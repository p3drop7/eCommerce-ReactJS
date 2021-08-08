import React from 'react'
import { Row } from 'react-bootstrap'
import Item from './Item'

function ItemList({items}) { 
    return (<Row className="justify-content-center">
            {
                items.map(item => 
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        pictureSRC={item.pictureSRC}
                    /> 
            
                )
            }  
        </Row>
    )
}

export default ItemList