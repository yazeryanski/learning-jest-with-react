import { Row } from 'react-bootstrap';
import { OptionType } from '../../../api/Types';
import { useOptions } from './hooks/useOptions';
import OptionItem from './Item';
import React from 'react';

interface Props {
  type: OptionType
}
const Options = ({type}: Props) => {
  const items = useOptions(type);

  const renderedItems = items.map( item => <OptionItem name={item.name} imagePath={item.imagePath} key={item.name} /> );

  return (
    <Row>
      {renderedItems}
    </Row>
  );
};

export default Options;

