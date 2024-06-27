// src/features/users/api/UserService.ts
import { User } from '../types/userTypes';
import { getUsers, createUser, updateUser, deleteUser } from './userApi';

export class UserService {
  async fetchUsers(): Promise<User[]> {
    return getUsers();
  }

  async addUser(user: User): Promise<User> {
    return createUser(user);
  }

  async editUser(user: User): Promise<User> {
    return updateUser(user);
  }

  async removeUser(id: number): Promise<void> {
    return deleteUser(id);
  }
}
