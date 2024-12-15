import React from 'react'
import { Card } from 'react-bootstrap'

const CartList = ({list,price}) => {
  return (
   
      <Card className="">
        <Card.Img variant="top" className="py-3 card-img" src={list.image} />
          <Card.Body>
            <Card.Title>
                {list.title?.slice(0,25)}
            </Card.Title>
            <Card.Text className="text-capitalize text-decoration-none fs-6">
              {list.category}
              <span> price * quantity ${list.price} X {list.quantity} = ${price}</span>
            </Card.Text>
            <h5>${list.price} <h6>per price</h6></h5>
            
      </Card.Body>
      </Card>
   
  )
}

export default CartList
