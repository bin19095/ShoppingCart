import React, { useState, useEffect } from 'react'
import {  Container, Row} from 'react-bootstrap'
import ProductCard from './Card/ProductCard';
// import fakeApi from '../../api/fakeApi';
import useFilterProduct from './hooks/useFilterProducts';

const LatestProducts = ({productTypes}) => {
 
    // const product = {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //       "rate": 3.9,
    //       "count": 120
    //     }
    //   };
    
    //const [products, setProducts ] = useState([]);
    //const endpoint = productTypes ? `category/${productTypes}` : '/products'
    const [filterType, setFilterType] = useState(null);
    const {status,products} = useFilterProduct(filterType);
    console.log("status result ",status, "data response",products);
    

    // const findProduct = async() =>{
    // const responses = await fakeApi.get('/products');
    // setProducts(responses);

    //  console.log("products.data>", products.data);
    // }
    // useEffect(() =>{
    //   findProduct();


    // },[])
  return (
    <Container>
        <h3 className='text-center mb-4'>
            Latest Products
        </h3>
            
            <Row>
               
                <ProductCard products={products} />
               
            </Row>
      
    </Container>
  )
}

export default LatestProducts;