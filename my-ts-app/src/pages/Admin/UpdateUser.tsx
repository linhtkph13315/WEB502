import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types/user'; // Assuming you have a Category type

interface UpdateUserPageProps {
  users: User[];
  onUpdateUser: (dataUpdate: User) => void;
}

const UpdateUserPage: React.FC<UpdateUserPageProps> = ({ users, onUpdateUser }) => {
  const { id } = useParams();
  const currentUser = users.find((user) => user.id === Number(id));
  const [inputValues, setInputValues] = useState<User | {}>(currentUser || {});

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataUpdate: any = { ...inputValues, id: Number(id) };
    onUpdateUser(dataUpdate);
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter User Name"
          defaultValue={currentUser?.name}
          onChange={onHandleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter passwod"
          defaultValue={currentUser?.password}
          onChange={onHandleChange}
          name="password"
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateUserPage;
