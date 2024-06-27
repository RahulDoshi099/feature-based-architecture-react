// src/features/users/api/userApi.ts
import { User } from '../types/userTypes';
import { get, post, put, del } from '../../../utils/apiClient';

const USERS_ENDPOINT = '/user';

export const getUsers = async (): Promise<User[]> => {
  return await get<User[]>(USERS_ENDPOINT);
};

export const createUser = async (user: User): Promise<User> => {
  return await post<User>(USERS_ENDPOINT, user);
};

export const updateUser = async (user: User): Promise<User> => {
  return await put<User>(`${USERS_ENDPOINT}/${user.id}`, user);
};

export const deleteUser = async (id: number): Promise<void> => {
  return await del(`${USERS_ENDPOINT}/${id}`);
};
