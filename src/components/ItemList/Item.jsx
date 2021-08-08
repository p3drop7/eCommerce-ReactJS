import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import "./Item.css"

function Item({id, name, price, pictureSRC}) {

    return (
        <Col className="cardCol" >
            <Card className="card">
            <Link to={`/item/${id}`}>
                <Card.Img variant="top" src={pictureSRC} className="cardImage" />
            </Link>

            <Card.Body className="cardBody" >
                
                <Link to={`/item/${id}`} className="link" >
                    <Card.Title className="cardTitle" >{name}</Card.Title>
                </Link> 
                
                <Card.Text className="cardText" >${price}</Card.Text>
                
            </Card.Body>    
            </Card>
        </Col>
    )
}

export default Item