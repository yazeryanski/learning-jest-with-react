import axios from 'axios';
import { Option, OptionType } from './Types';

const Instance = axios.create({
  baseURL: 'http://localhost:3030/',
});

export const fetchOptions = async (type: OptionType) : Promise<Option[]> => {
  const res = await Instance.get(type);

  return res?.data || [];
};
