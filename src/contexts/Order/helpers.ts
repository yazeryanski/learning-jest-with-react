import { OptionType } from '../../Types/Main';
import { pricePerItem } from '../../utils/Constants';


export function calculateSubtotal(optionType: OptionType, optionCounts: any) {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType];
}

