import { message } from 'antd';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { User } from '../../types/user'; // Assuming you have a Category type

interface AddUserPageProps {
  addUser: (category: User) => void;
}

const AddUserPage: React.FC<AddUserPageProps> = ({ addUser }) => {
  const [data, setData] = useState<User>();

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newData: any = { ...data, [name]: value };
    setData(newData);
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
    // Simple form validation
    if (data?.id && data?.name) {
      if (data?.name.trim() === '') {
        message.error('Please enter valid NAME and PASSWORD.');
        return;
      }
    }
    if (data) {
      addUser(data);
    }
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        {/* <input type="text" placeholder='Enter Category ID' onChange={onHandleChange} name='id' /> */}
        <input type="text" placeholder='Enter Category Name' onChange={onHandleChange} name='name' />
        <input type="password" placeholder='Enter password' onChange={onHandleChange} name='password' />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default AddUserPage;
