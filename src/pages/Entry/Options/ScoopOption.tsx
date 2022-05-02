import React, { useCallback } from 'react';
import { Card, Col } from 'react-bootstrap';
import useOrderContext from '../../../contexts/Order/useOrderContext';
import { Option } from '../../../Types/Main';
import Counter from './elements/Counter';


export default function ScoopOption({name, imagePath}: Option) {
  const [ ,updateCount] = useOrderContext();

  const changeCount = useCallback( (xCount:number) => {
    updateCount( name, xCount, 'scoops');
  }, []);

  return (
    <Col lg={2} md={3} sm={6} xs={12}>
      <Card role="scoop-card">
        <Card.Img 
          className="py-3 px-2" 
          role="img" 
          variant="top"
          alt={`${name} scoops`}
          src={`http://localhost:3030${imagePath}`}  
        />
        <Card.Body className="text-center p-0">
          <Card.Title>{name}</Card.Title>

          <Card.Footer>
            <Counter onChange={changeCount}/>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}
