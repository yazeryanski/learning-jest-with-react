import React, { Suspense } from 'react';
import { Row } from 'react-bootstrap';
import useOrderContext from '../../../contexts/Order/useOrderContext';
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
  const [summary] = useOrderContext();
  const [items, error] = useOptions(type);
  
  const SingleOptionComponent = type === 'scoops' ? ScoopOption : ToppingOption;
  const renderItems = () => items.map( item => <SingleOptionComponent name={item.name} imagePath={item.imagePath} key={item.name} /> );

  return (
    <div>
      <h5 className="fw-bold">Total: <span role="total">{ summary.totals[type] }</span></h5>
      <Row {...restProps}>
        <Suspense fallback="<span>Loading</span>">
          {!error ? renderItems() : <AlertBox variant="danger" /> }
        </Suspense>
      </Row>
    </div>
  );
};

export default Options;