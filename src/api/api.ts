import axios from 'axios';
import { Option, OptionType } from '../Types/Main';

export const BASE_URL = 'http://localhost:3030/';

const Instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchOptions = async (type: OptionType) : Promise<Option[]> => {
  const res = await Instance.get(type);
  if (res.status !== 200) {
    throw new Error('Server Error');
  }
  return res?.data || [];
};
