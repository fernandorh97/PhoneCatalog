import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.PHONE_CATALOG_API_URL,
});

export function GetPhones() {
  return instance.get('/phones').then(response => response.data);
}

export function GetPhone(id) {
  return instance.get(`/phones/${id}`).then(response => response.data);
}

export function AddPhone(phone) {
  return instance.post('/phones', phone).then(response => response.data);
}

export function UpdatePhone(id, phone) {
  return instance.put(`/phones/${id}`, phone).then(response => response.data);
}

export function DeletePhone(id) {
  return instance.delete(`/phones/${id}`).then(response => response.data);
}
