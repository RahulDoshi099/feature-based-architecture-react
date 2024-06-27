// src/features/users/components/UserList.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
  getUserStatus,
  getUserError,
} from "../state/userSlice";
import { AppDispatch } from "../../../store/store";

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectAllUsers);
  const userStatus = useSelector(getUserStatus);
  const error = useSelector(getUserError);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  return (
    <div>
      {userStatus === "loading" && <div>Loading...</div>}
      {userStatus === "failed" && <div>{error}</div>}
      {userStatus === "succeeded" && (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
