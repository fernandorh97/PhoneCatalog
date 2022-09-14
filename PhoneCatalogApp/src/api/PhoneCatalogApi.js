import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.PHONE_CATALOG_API_URL,
});

export function GetPhones() {
  return instance.get('/phones').then(response => response.data);
}
