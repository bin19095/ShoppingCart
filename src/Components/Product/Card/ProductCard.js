
import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({products}) => {
    const navigate = useNavigate();
   
    const handleClick = (id) => {
        navigate(`/products/${id}`);


    }
   

  
if(!products){
    return "Something went wrong";
}
const renderedCards = products && products.data?.map( (product) => {

    return (
        <Col md={4} xs={6} lg={4} sm={6} className="md-4" key={product.id} onClick={() =>handleClick(product.id)} >
<Link  className="text-dark text-decoration-none" >
        <Card className="custom-card" >
        <Card.Img variant="top" className="py-3 card-img" src={product.image} />   
            <Card.Body>
                    <Card.Title className="fs-6">
                        {product.title.slice(0,30)}
                    </Card.Title>
                    <Card.Text className="text-capitalize text-decoration-none fs-6">
                        {product.category}
                    </Card.Text>
                    <h5>${product.price}</h5>
                    <div className="py-2 d-flex justify-content-center fs-6">
                        <ReactStars
                        count={5}
                        value={product.rating.rate}
                        isHalf={true}
                        edit={false}
                        emptyIcon={<i className="far fa-start"></i>}
                        halfIcon={<i className="fa fa-start-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor = "#ffd700"

                        >

                        </ReactStars>
                        {`${product.rating.count}`}
                    </div>
                </Card.Body>      
    </Card>
     </Link>
     </Col>
   
    )


})


  return (

    <>
   
    {products.data ? renderedCards :  <div class="d-flex justify-content-center">
        Loading...
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>}

    
    </>
   
  )
}

export default ProductCard 
