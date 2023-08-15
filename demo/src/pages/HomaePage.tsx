import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface HomepageProps {
  products: Product[];
}

const Homepage: React.FC<HomepageProps> = ({ products }) => {
  console.log("Homepage data: ", products);
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px'}}>
      {products.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '16px' }}>
          <h3><Link to={`/detail/${item.id}`}>{item.name}</Link></h3>
          <p>{item.price}</p>
          <span>{item.desc}</span>
          {/* <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} /> */}
        </div>
      ))}
    </div>
  );
};

export default Homepage;
