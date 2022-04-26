import axios from 'axios';
import { Option, OptionType } from '../Types/Main';

const Instance = axios.create({
  baseURL: 'http://localhost:3030/',
});

export const fetchOptions = async (type: OptionType) : Promise<Option[]> => {
  const res = await Instance.get(type);
  if (res.status !== 200) {
    throw new Error('Server Error');
  }
  return res?.data || [];
};
