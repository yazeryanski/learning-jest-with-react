import { useEffect, useState } from 'react';
import { fetchOptions } from '../../../../api/api';
import { Option, OptionType } from '../../../../Types/Main';



export const useOptions = (type: OptionType) => {
  const [options, setOptions] = useState<Option[]>([]);

  const initTheOptions = async () => {
    setOptions(await fetchOptions(type));
  };

  useEffect(() => {
    initTheOptions();
  }, [type]);


  return options;
};