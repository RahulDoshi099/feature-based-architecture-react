// src/utils/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const get = async <T>(url: string): Promise<T> => {
  const response = await apiClient.get<T>(url);
  return response.data;
};

export const post = async <T>(url: string, data: any): Promise<T> => {
  const response = await apiClient.post<T>(url, data);
  return response.data;
};

export const put = async <T>(url: string, data: any): Promise<T> => {
  const response = await apiClient.put<T>(url, data);
  return response.data;
};

export const del = async (url: string): Promise<void> => {
  await apiClient.delete(url);
};

export default apiClient;
