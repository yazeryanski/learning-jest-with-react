import { Row } from 'react-bootstrap';
import { OptionType } from '../../../Types/Main';
import { useOptions } from './hooks/useOptions';
import ScoopOption from './ScoopOption';
import React from 'react';
import ToppingOption from './ToppingOption';
import AlertBox from '../../../components/Alert';

interface Props {
  type: OptionType;
  [x: string]: unknown;
}
const Options = ({type, ...restProps}: Props) => {
  const [items, error] = useOptions(type);

  const ItemComponent = type === 'scoops' ? ScoopOption : ToppingOption;
  const renderItems = () => items.map( item => <ItemComponent name={item.name} imagePath={item.imagePath} key={item.name} /> );

  return (
    <Row {...restProps}>
      {!error ? renderItems() :<AlertBox variant="danger" /> }
    </Row>
  );
};

export default Options;

