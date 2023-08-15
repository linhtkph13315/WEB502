import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import { Product } from '../../types/product';
import AdminLayout from '../../layouts/AdminLayOut';
interface ProductPageProps {
  products: Product[];
  removeProduct: (productId: number) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, removeProduct }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
        title: 'Desc',
        dataIndex: 'desc',
        key: 'desc',
    },
    // {
    //   title: 'Image',
    //   dataIndex: 'image',
    //   key: 'image',
    //   render: (image: string) => <img src={image} alt="Product" style={{ width: 100 }} />,
    // },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: Product) => (
        <div>
          <Link to={`/admin/product/update/${record.id}`}>
            <Button type="primary">Update</Button>
          </Link>
          <Button onClick={() => onHandleRemove(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  const onHandleRemove = (id: number) => {
    console.log("Product: ", id);
    removeProduct(id);
  };

  const data = products.map((item, index) => ({...item, key: index + 1,}));
  return (
    <div>
      <Link to="/admin/product/add">
        <Button type="primary">Add New Product</Button>
      </Link>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ProductPage;
