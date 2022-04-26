import { useEffect, useState } from 'react';
import { fetchOptions } from '../../../../api/api';
import { Option, OptionType } from '../../../../Types/Main';

export const useOptions = (type: OptionType): [Option[], boolean] => {
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState(false);

  const initTheOptions = async () => {
    try {
      const res = await fetchOptions(type);
      setOptions(res);
      setError(false);
    } catch(err) {
      setOptions([]);
      setError(true);
    }
  };

  useEffect(() => {
    initTheOptions();
  }, [type]);

  return [options, error];
};