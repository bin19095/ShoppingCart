import React, { useContext, useState } from 'react'
import CartList from "./CartList";
import { Container, Row, Col } from 'react-bootstrap';
import ProductContext from '../../Context/productContext';

const CartPage = () => {
  const { getProduct } = useContext(ProductContext);
  let totalPrice, totalCartAmount = 0.00;

  const renderCartList = getProduct.map((product, index) =>{
totalPrice = product.price * product.quantity;
totalCartAmount = totalCartAmount + totalPrice;
   return (
   <>   
   <CartList key = {index} list={product} price={totalPrice} />
   </>

   );
  })
  return (
    <Container>
      <Row >
      <Col md={9} xs={6} lg={8} sm={4}>
        {renderCartList} 
        
        </Col>
        <Col>
        <h1>Total Amount: ${totalCartAmount}</h1>
        </Col>
      </Row>
    </Container>

  )
}

export default CartPage