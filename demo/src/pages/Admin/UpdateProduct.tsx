import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/product';

interface UpdateProductPageProps {
  products: Product[];
  onUpdate: (dataUpdate: Product) => void;
}
const UpdateProductPage: React.FC<UpdateProductPageProps> = ({ products, onUpdate }) => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id === Number(id));
  const [inputValues, setInputValues] = useState<Product | {}>(currentProduct || {});

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataUpdate: any = { ...inputValues, id: Number(id) };
    onUpdate(dataUpdate);
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          defaultValue={currentProduct?.name}
          onChange={onHandleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          defaultValue={currentProduct?.price}
          onChange={onHandleChange}
          name="price"
        />
        {/* <input
          type="file"
          placeholder="Enter Product image"
          defaultValue={currentProduct?.image}
          onChange={onHandleChange}
          name="image"
        /> */}
             <input
          type="text"
          placeholder="Enter Product desc"
          defaultValue={currentProduct?.desc}
          onChange={onHandleChange}
          name="desc"
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
