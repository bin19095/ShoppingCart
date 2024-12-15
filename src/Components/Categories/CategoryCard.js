import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './CategoryCard.css';
const CategoryCard = ({category}) =>  {
 
  return (
    <div>
        <Link to={`/${category}`} className='text-decoration-none text-dark'>
        <Card className='custom-card'>
            <Card.Body>
                <Card.Text className="text-capitalize">
                    {category}
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Link>

    </div>
  )
}

export default CategoryCard
