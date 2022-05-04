import { OptionType } from 'types/Main';
import { pricePerItem } from 'utils/Constants';
import { OptionCountType } from './Types';



export function calculateSubtotal(optionType: OptionType, optionCounts: OptionCountType) {
  let optionCount = 0;
  console.log( optionCounts[optionType].values() );
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType];
}

