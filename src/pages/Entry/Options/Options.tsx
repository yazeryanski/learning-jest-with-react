import React, { Suspense } from 'react';
import { Row } from 'react-bootstrap';
// import useOrderContext from '../../../contexts/Order/UseOrderContext';
import { OptionType } from '../../../Types/Main';
import { useOptions } from './hooks/useOptions';

// Lazy Components
const ScoopOption = React.lazy(() => import('./ScoopOption'));
const ToppingOption = React.lazy(() => import('./ToppingOption'));
const AlertBox = React.lazy(() => import('../../../components/Alert'));

interface Props {
  type: OptionType;
  [x: string]: unknown;
}

const Options = ({type, ...restProps}: Props) => {
  // TODO: Finish the realisation
  // const [summary, updateItemCount, resetOrder] = useOrderContext();
  const [items, error] = useOptions(type);
  
  const ItemComponent = type === 'scoops' ? ScoopOption : ToppingOption;
  const renderItems = () => items.map( item => <ItemComponent name={item.name} imagePath={item.imagePath} key={item.name} /> );

  return (
    <Row {...restProps}>
      <Suspense fallback="<span>Loading</span>">
        {!error ? renderItems() : <AlertBox variant="danger" /> }
      </Suspense>
    </Row>
  );
};

export default Options;