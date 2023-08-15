import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import { Category } from '../../types/category'; // Assuming you have a Category type

interface CategoryPageProps {
  categories: Category[];
  removeCategory: (categoryId: number) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categories, removeCategory }) => {
  const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: Category) => (
        <div>
          <Link to={`/admin/category/update/${record.id}`}>
            <Button type="primary">Update</Button>
          </Link>
          <Button onClick={() => onHandleRemove(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  const onHandleRemove = (id: number) => {
    console.log("Category: ", id);
    removeCategory(id);
  };

  const data = categories.map((item, index) => ({ ...item, key: index + 1 }));
  return (
    <div>
      <Link to="/admin/category/add">
        <Button type="primary">Add New Category</Button>
      </Link>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CategoryPage;
