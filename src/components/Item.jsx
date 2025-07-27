import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const item = ({prod}) => {
    console.log(prod)
    return (
        <Card style={{ width: '18rem', margin:10 }}>
    <Card.Img variant="top" src={prod.img} />
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        ${prod.price}
        </Card.Text>
        <Link className='btn btn-primary' to={'/item/'+prod.id}>Ver más</Link>
    </Card.Body>
    </Card>
    )
}

export default item