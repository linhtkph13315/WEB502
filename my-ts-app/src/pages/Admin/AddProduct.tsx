
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Product } from '../../types/product';
import { message, Form, Input, Button } from 'antd';

interface AddProductPageProps {
  addProduct: (product: Product) => void;
}
const AddProductPage: React.FC<AddProductPageProps> = ({ addProduct }) => {

  const [data, setData] = useState<Product>();

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'image') {
      setData((prevData:any) => ({
        ...prevData,
        image: files?.[0] || null,
      }))
    } else {
        const newData:any = { ...data, [name]: value };
        setData(newData);
    }
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data); 
    
    if(data?.name && data?.price){
      if (data?.name.trim() === '' || data?.price <= 0) {
        message.error('Please enter valid product name and price.');
        return;
      }
    }
    if(data){
      addProduct(data);
    }

  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input type="text" placeholder='Enter Product Name' onChange={onHandleChange} name='name'  />
        <input type="text" placeholder='Enter Product Price' onChange={onHandleChange} name='price'  />
        <input type="text" placeholder='Enter Product desc' onChange={onHandleChange} name='desc'  />
        <input type="file" placeholder='Upload image' onChange={onHandleChange} name='image' />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default AddProductPage;
