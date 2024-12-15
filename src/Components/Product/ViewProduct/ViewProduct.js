import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import fakeApi from '../../../api/fakeApi';
import ProductContext from '../../../Context/productContext';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const {productId} = useParams();
  const [paramsDetail, setParamsDetail ] = useState([]);
  const {handleCart, getProduct } = useContext(ProductContext);
let flag= false;

  useEffect(() =>{
    const fetchingDetails = async() => {
      try{
        const endPoint = productId ? `/products/${productId}`  : '/products';
        const response = await fakeApi.get(endPoint);
        setParamsDetail(response.data);
      } catch(error) {
        console.error("Error fetching params Products",error);
      }
    }
    fetchingDetails();
 
  },[productId]);

  const handleCartClick = (id) => {
    handleCart(id);  
  }

let totalPrice = 0.00;
let totalCartAmount = 0.00;


const cartRender = getProduct.map((product,index) =>{

totalPrice = product.price * product.quantity;
totalCartAmount = totalCartAmount + totalPrice;
console.log(index);

if(index ===2){
  flag=true;
}

   return( <>
      <Card.Img variant="top" className="py-3 card-img" src={product.image} key={product.id}/>   
        <Card.Body>
                <Card.Title className="fs-6">
                    {product.title?.slice(0,50)}
                </Card.Title> X {product.quantity}
                <Card.Text className="text-capitalize text-decoration-none fs-6">
                    {product.category}
                </Card.Text>
                <h5>${product.price}</h5>
        </Card.Body>      
  </>
 );
}).slice(0,2);
  

  return (
    <Container>
      
    <Row md={4}>
      <Col md={2} xs={3} lg={7} sm={4} className="md-4" key={paramsDetail.id}  >
        <Card className="custom-card" >
        <Card.Img variant="top" className="py-3 card-img" src={paramsDetail.image} />   
            <Card.Body>
                    <Card.Title className="fs-6">
                        {paramsDetail.title?.slice(0,100)}
                    </Card.Title>
                    <Card.Text className="text-capitalize text-decoration-none fs-6">
                        {paramsDetail.category}
                    </Card.Text>
                    <h5>${paramsDetail.price}</h5>
                    <div className="py-2 d-flex justify-content-center fs-6">
                        <ReactStars
                        count={5}
                        value={paramsDetail.rating?.rate}
                        isHalf={true}
                        edit={false}
                        emptyIcon={<i className="far fa-start"></i>}
                        halfIcon={<i className="fa fa-start-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor = "#ffd700"

                        >

                        </ReactStars>
                        {`${paramsDetail.rating?.count}`}
                    </div>
                  <button onClick={() => handleCartClick(paramsDetail.id)}>
                      Add to cart
                    </button>
                   
                </Card.Body>      
    </Card>
    <Row className='mt-5'>
      <Col>
        <div>
          <h3>{paramsDetail.description}</h3>
        </div>
      
      </Col>
    </Row>

    </Col>
    <Col md={4}  xs={6} lg={4} sm={4} className="md-4"  >
    <Card className="custom-card"  >
       {getProduct && getProduct!==null && cartRender.length <=3 ? cartRender : <> {cartRender} <button> click to load more...</button></>}
       {flag ? <Link to='/carts'><button>View Cart</button> </Link>: ""}
        
        <h1>Total Amount : {totalCartAmount?.toString()} </h1>
    
  
    </Card>

    </Col>

    </Row>
    </Container>
  )
}

export default ViewProduct
