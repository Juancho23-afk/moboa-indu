import React from 'react'
import { Card } from 'react-bootstrap'

export const FetchCard = ({personaje}) => {
    return (
        <Card style={{ width: '18rem', height: '28rem',margin:10 }}>
    <Card.Img variant="top" src={personaje.image} style={{ height: '200px', objectFit: 'contain' }} />
    <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
        {personaje.race}
        </Card.Text>
    </Card.Body>
    </Card>
    )
}
export default FetchCard
