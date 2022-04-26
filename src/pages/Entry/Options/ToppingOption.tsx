import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Option } from '../../../Types/Main';


export default function ToppingOption({name, imagePath}: Option) {
  return (
    <Col lg={3} md={4} xs={12}>
      <Card>
        <Card.Img 
          role="img" 
          variant="top" 
          alt={`${name} scoop`}
          src={`http://localhost:3030${imagePath}`}  
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}