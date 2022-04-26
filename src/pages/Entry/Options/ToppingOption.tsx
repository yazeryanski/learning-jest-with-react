import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Option } from '../../../Types/Main';


export default function ToppingOption({name, imagePath}: Option) {
  return (
    <Col lg={2} md={3} sm={6} xs={12}>
      <Card>
        <Card.Img 
          role="img" 
          variant="top" 
          alt={`${name} topping`}
          src={`http://localhost:3030${imagePath}`}  
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}