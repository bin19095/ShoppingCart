import React from 'react'

import useFilterProduct from '../../Components/Product/hooks/useFilterProducts';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../../Components/Product/Card/ProductCard';
import AllCategories from '../../Components/Categories/AllCategories';
function Products({productTypes}) {
  const endpoint = productTypes==null ? "" : `category/${productTypes}`; 
  const {status, products} = useFilterProduct(endpoint);
  return (
    <>
    <AllCategories />
    <Container>
        <h3 className='text-center mb-4'>
            Latest Products
        </h3>
      <Row>
         <ProductCard products={products} />  
      </Row>
    </Container>
    </>
  )
}

export default Products
