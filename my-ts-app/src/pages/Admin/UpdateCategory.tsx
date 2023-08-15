import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../../types/category'; // Assuming you have a Category type

interface UpdateCategoryPageProps {
  categories: Category[];
  onUpdateCategory: (dataUpdate: Category) => void;
}

const UpdateCategoryPage: React.FC<UpdateCategoryPageProps> = ({ categories, onUpdateCategory }) => {
  const { id } = useParams();
  const currentCategory = categories.find((category) => category.id === Number(id));
  const [inputValues, setInputValues] = useState<Category | {}>(currentCategory || {});

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataUpdate: any = { ...inputValues, id: Number(id) };
    onUpdateCategory(dataUpdate);
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter Category Name"
          defaultValue={currentCategory?.name}
          onChange={onHandleChange}
          name="name"
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateCategoryPage;
