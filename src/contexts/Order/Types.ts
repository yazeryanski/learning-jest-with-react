import { OptionType } from '../../Types/Main';

export interface OptionCountType {
  scoops: Map<string, number>;
  toppings: Map<string, number>;
}

export interface TotalsType {
  scoops: string;
  toppings: string;
  grandTotal: string;
}

export interface ContextSummary extends OptionCountType {
  totals: TotalsType
}

export type ContextType = [ 
  ContextSummary,
  // eslint-disable-next-line no-unused-vars
  (itemName: string, newItemCount: number, optionType: OptionType) => void,
  () => void,
];
