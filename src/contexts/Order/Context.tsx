import { createContext } from 'react';
import { ContextType } from './Types';

const OrderContext = createContext<ContextType | null>(null);

export default OrderContext;