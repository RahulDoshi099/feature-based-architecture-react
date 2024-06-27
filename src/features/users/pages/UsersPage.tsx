// src/features/users/pages/UsersPage.tsx
import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UsersPage: React.FC = () => {
  return (
    <div>
      <h1>Users</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UsersPage;
