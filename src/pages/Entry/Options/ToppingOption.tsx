import React, { useCallback } from 'react';
import { Card, Col } from 'react-bootstrap';
import useOrderContext from '../../../contexts/Order/useOrderContext';
import { Option } from '../../../Types/Main';
import Checkbox from './elements/Checkbox';


export default function ToppingOption({name, imagePath}: Option) {
  const [ ,updateCount] = useOrderContext();

  const selectTopping = useCallback( (isSelected: boolean) => {
    updateCount( name, +isSelected, 'toppings');
  }, []);

  return (
    <Col lg={2} md={3} sm={6} xs={12}>
      <Card role="topping-card">
        <Card.Img
          className="py-3 px-2"
          role="img" 
          variant="top"
          alt={`${name} toppings`}
          src={`http://localhost:3030${imagePath}`}  
        />
        <Card.Body className="text-center p-0">
          <Card.Title>{name}</Card.Title>

          <Card.Footer>
            <Checkbox onChange={selectTopping} />
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}
