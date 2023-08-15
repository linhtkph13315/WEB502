import { message } from 'antd';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Category } from '../../types/category'; // Assuming you have a Category type

interface AddCategoryPageProps {
  addCategory: (category: Category) => void;
}

const AddCategoryPage: React.FC<AddCategoryPageProps> = ({ addCategory }) => {
  const [data, setData] = useState<Category>();

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
        message.error('Please enter valid category ID and name.');
        return;
      }
    }
    if (data) {
      addCategory(data);
    }
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        {/* <input type="text" placeholder='Enter Category ID' onChange={onHandleChange} name='id' /> */}
        <input type="text" placeholder='Enter Category Name' onChange={onHandleChange} name='name' />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default AddCategoryPage;
