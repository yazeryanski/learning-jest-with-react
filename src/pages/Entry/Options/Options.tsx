import { Row } from 'react-bootstrap';
import { OptionType } from '../../../Types/Main';
import { useOptions } from './hooks/useOptions';
import ScoopOption from './ScoopOption';
import React from 'react';
import ToppingOption from './ToppingOption';

interface Props {
  type: OptionType
}
const Options = ({type}: Props) => {
  const items = useOptions(type);
  const ItemComponent = type === 'scoops' ? ScoopOption : ToppingOption;
  const renderedItems = items.map( item => <ItemComponent name={item.name} imagePath={item.imagePath} key={item.name} /> );

  return (
    <Row>
      {renderedItems}
    </Row>
  );
};

export default Options;

