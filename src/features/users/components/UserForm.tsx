// src/features/users/components/UserForm.tsx
import React, { useState } from 'react';
import container from '../api/userContainer';
import { User } from '../types/userTypes';

const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const userService = container.getUserService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { id: 0, name, email };
    await userService.addUser(newUser);
    // Handle state update if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
