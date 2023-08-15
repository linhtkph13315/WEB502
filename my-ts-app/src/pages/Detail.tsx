
import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';

interface DetailPageProps {
  products: Product[];
}

const DetailPage: React.FC<DetailPageProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const currentProduct = products.find((item) => item.id === Number(id));
  console.log(currentProduct);

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{currentProduct.name}</h2>
      <p>Gía: {currentProduct.price}</p>
      <p>Mô tả: {currentProduct.desc}</p>
      <img src={currentProduct.image} alt={currentProduct.name} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
    </div>
  );
};

export default DetailPage;
