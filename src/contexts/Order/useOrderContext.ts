import { useContext } from 'react';
import orderContext from './Context';

// create custom hook to check whether we're inside a provider
export default function useOrderContext(){
  const context = useContext(orderContext);

  if (!context) {
    throw new Error(
      'useOrderDetails must be used within an OrderDetailsProvider'
    );
  }

  return context;
}