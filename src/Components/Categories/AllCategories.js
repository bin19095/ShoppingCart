
import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import useFilterProduct from '../Product/hooks/useFilterProducts';

function AllCategories() {
  // const [categories, setCategories ] = useState([]);

  // const getCategories = async() =>{
  //   const responses = await fakeApi('/products/categories');
  //   setCategories(responses);
  //   console.log("Categories list", categories.data)
  // }
  // useEffect(() => {
  //   getCategories();

  // },[])

  const [filterType] = useState('/categories');
  const {status,products} = useFilterProduct(filterType);
  const renderCategory = products.data?.map(( category,index) => {
  
  return(
  <Col xs={12}   key = {index} sm={6} md={3} className="mb-2 p-0">
    <CategoryCard  category={category} />
    
  </Col>
  );
})

  return (
    <Container>
       <h3 className="text-center mb-4">
       Browse Categories
        <Row>
            

               {  renderCategory}

        </Row>
       
       </h3>
        </Container>
  )
}

export default AllCategories
