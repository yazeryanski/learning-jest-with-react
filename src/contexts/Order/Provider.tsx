import React, { useState, useMemo, useEffect } from 'react';
import { OptionType } from '../../Types/Main';
import formatCurrency from '../../utils/FormatCurency';
import OrderContext from './Context';
import { calculateSubtotal } from './helpers';
import { ContextType, OptionCountType, TotalsType } from './Types';

export function OrderContextProvider(props: {[x:string]: unknown}) {

  const [optionCounts, setOptionCounts] = useState<OptionCountType>({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);

  const [totals, setTotals] = useState<TotalsType>({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
    const grandTotal = scoopsSubtotal + toppingsSubtotal;
    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingsSubtotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() : ContextType => {
    function updateItemCount(itemName: string, newItemCount: number, optionType: OptionType) {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, newItemCount);

      setOptionCounts(newOptionCounts);
    }

    function resetOrder() {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    }
    // getter: object containing option counts for scoops and toppings, subtotals and totals
    // setter: updateOptionCount
    return [{ ...optionCounts, totals }, updateItemCount, resetOrder];
  }, [optionCounts, totals]);

  return <OrderContext.Provider value={value} {...props} />;
}